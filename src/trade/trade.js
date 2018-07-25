const db = require('../controller/index')
const Wallet = db.Wallet
const Knowledge = db.Konwledge
const Trade = db.Trade
const Json = require('../tools/jsonResponse')

module.exports = {
    trade: async (ctx, next) => {
        let req = ctx.request.body
        let now = new Date().getTime()
        let id = now + '_' + Math.floor(Math.random()*10000)
        let knowData = await Knowledge.findOne({
            id: req.id
        })
        let userLeft = await Wallet.findOne({
            userId: ctx.session.userId
        })
        let checkBuy = await Trade.find({
            userId: ctx.session.userId,
            productId: req.id
        })
        if(checkBuy.length===0){
            if(userLeft.left<knowData.price){
                Json.res(ctx,10004,'账户余额不足')
            }else if(ctx.session.userId === knowData.userId){
                Json.res(ctx,10005,'不能购买自己发布的知识')
            }else{
                let data = {
                    id: id,
                    userId: ctx.session.userId,
                    //交易时间
                    tradeTime: now,
                    //商品ID
                    productId: req.id,
                    //金额
                    price: knowData.price,
                    //商品归属
                    owner: knowData.userId
                }
                let walletOut = {
                    left: -Number(knowData.price),
                    used: Number(knowData.price)
                }
                let walletIn = {
                    left: Number(knowData.price),
                    earn: Number(knowData.price)
                }
                let tradeResult = new Trade(data).save()
                let walletResultOut = await Wallet.updateOne({
                    userId: ctx.session.userId
                },{
                    $inc: walletOut,
                    $set: {
                        modify: now
                    }
                })
                let walletResultIn = await Wallet.updateOne({
                    userId: knowData.userId
                },{
                    $inc: walletIn,
                    $set: {
                        modify: now
                    }
                })
                if(tradeResult&&walletResultOut&&walletResultIn){
                    Json.res(ctx,200,'购买成功')
                }else{
                    Json.res(ctx,10006,'购买失败，请稍后重试')
                }
            }
        }else{
            Json.res(ctx,10007,'您已经购买该问题，请勿重复购买')
        }
    }
}