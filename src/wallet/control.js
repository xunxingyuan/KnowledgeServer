const db = require('../controller/index')
const Wallet = db.Wallet
const Charge = db.Charge
const Json = require('../tools/jsonResponse')

module.exports = {
    control: async (ctx, next) => {
        let req = ctx.request.body
        let now = new Date().getTime()
        let id = now + '_' + Math.floor(Math.random()*10000)
        let data = {
            id: id,
            userId: ctx.session.userId,
            tradeTime: now,
            tradeType: req.type,
            count: req.count
        }
        let walletData = await Wallet.findOne({
            userId: ctx.session.userId
        })
        if(req.type === '1'){
            if(walletData.left < req.count){
                Json.res(ctx,10004,'提现金额不能超过余额')
            }else{
                let left = walletData.left - req.count
                let withdraw = walletData.withdraw + req.count
                let updateData = {$set : {
                    left: left,
                    withdraw: withdraw,
                    modify: now
                }};
                let result = await Wallet.updateOne({userId: ctx.session.userId},updateData)
                let withdrawResult = await new Charge(data).save()
                if(result&&withdrawResult){
                    Json.res(ctx,200,'提现成功')
                }else{
                    Json.res(ctx,10004,'提现失败')
                }
            }
        }else if(req.type === '0'){
            let left = walletData.left + req.count
            let updateData = {$set : {
                left: left,
                modify: now
            }};
            let result = await Wallet.updateOne({userId: ctx.session.userId},updateData)
            let chargeResult = await new Charge(data).save()
            if(result&&chargeResult){
                Json.res(ctx,200,'充值成功')
            }else{
                Json.res(ctx,10004,'充值失败')
            }
        }else{
            Json.res(ctx,10003,'充值参数错误')
        }
    }
}
