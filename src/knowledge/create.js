const db = require('../controller/index')
const User = db.User
const Konw = db.Konwledge
const Json = require('../tools/jsonResponse')

module.exports = {
    create: async (ctx, next) => {
        let req = ctx.request.body
        let res = await User.findOne({ id: ctx.session.userId })
        if (res.length !== 0) {
            let now = new Date().getTime()
            let id = new Date().getTime() + '_' + Math.floor(Math.random()*10000)
            let data = {
                id: id,
                userId: ctx.session.userId,
                author: res.name,
                title: req.title,
                preview: req.preview,
                content: req.content,
                type: req.type,
                price: req.price,
                create: now,
                modify: now,
                state: 0,
                count: 0
            }
            const result = await new Konw(data).save()
            if (result) {
                Json.res(ctx, 200, '创建知识成功')
            } else {
                Json.res(ctx, 10001, '未知错误')
            }
        } else {
            Json.res(ctx, 10002, '用户不存在')
        }

    }
}