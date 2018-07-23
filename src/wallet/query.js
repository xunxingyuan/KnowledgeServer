const db = require('../controller/index')
const Wallet = db.Wallet
const Json = require('../tools/jsonResponse')

module.exports={
    query: async (ctx,next)=>{
        let res = await Wallet.findOne({
            userId: ctx.session.userId
        })
        let data = {
            "left": res.left,
            "earn": res.earn,
            "used": res.used,
            "withdraw": res.withdraw,
            "modify": res.modify,
        }
        if(res){
            Json.res(ctx,200,'获取成功',{
                wallet: data
            })
        }else{
            Json.res(ctx,10001,'未知错误')
        }
    }
}