const db = require('../controller/index')
const Konw = db.Konwledge
const Json = require('../tools/jsonResponse')

module.exports = {
    addCount: async (ctx, next) => {
        let req = ctx.request.query
        let result = await Konw.update({
            id: req.id
        }, { '$inc': { 'count': 1 } })
        if (result) {
            Json.res(ctx, 200, '阅读数+1')
        } else {
            Json.res(ctx, 10001, '未知错误')
        }
    },
    update: async (ctx, next) =>{

    },
    delete: async (ctx, next) =>{
        let req = ctx.request.query
        let result = await Konw.remove({
            id: req.id
        })
        if (result) {
            Json.res(ctx, 200, '删除成功')
        } else {
            Json.res(ctx, 10001, '未知错误')
        }
    },
}