const db = require('../controller/index')
const Konw = db.Konwledge
const Json = require('../tools/jsonResponse')

module.exports = {
    query: async (ctx,next)=>{
        // let result = await Konw
        Json.res(ctx,200,'获取成功',result)
    }
}