const db = require('../controller/index')
const Wallet = db.Wallet
const Json = require('../tools/jsonResponse')

module.exports = {
    trade: async (ctx,next)=>{
        Json.res(ctx,200,'success')
    }
}