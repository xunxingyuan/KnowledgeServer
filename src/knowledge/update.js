const db = require('../controller/index')
const Konw = db.Konwledge
const Json = require('../tools/jsonResponse')

module.exports = {
    addCount: async (ctx, next) => {
        let req = ctx.request.query
        console.log(req)
        let result = await Konw.update({
            id: req.id
        }, { '$inc': { 'count': 1 } })
        if (result) {
            Json.res(ctx, 200, '阅读数+1')
        } else {
            Json.res(ctx, 10001, '未知错误')
        }
    }
}