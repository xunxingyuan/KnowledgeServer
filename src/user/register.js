const db = require('../controller/index')
const User = db.User
const Auth = db.Auth
const Wallet = db.Wallet
const Json = require('../tools/jsonResponse')

module.exports = {
    register: async (ctx, next) => {
        let req = ctx.request.body
        let phone = req.phone
        let res = await User.find({ phone: phone })
        if (res.length !== 0) {
            Json.res(ctx, 201, '用户已经存在')
        } else {
            let now = new Date().getTime()
            let id = now + req.name
            let data = {
                "id": id,
                "phone": req.phone,
                "name": req.name,
                "nick": req.nick,
                "email": req.email,
                "level": 1,
                "experience": 0,
                "icon": "",
                "introduce": "",
                "create": now
            }
            let authData = {
                'id': id,
                'password': req.password,
            }
            let walletData = {
                'userId': id,
                'left': 0,
                'earn': 0,
                'used': 0,
                'withdraw': 0,
                'modify': now
            }
            const result = await new User(data).save()
            const authResult = await new Auth(authData).save()
            const createWallet = await new Wallet(walletData).save()
            if (result && authResult&&createWallet) {
                Json.res(ctx, 200, '新建用户成功')
            } else {
                Json.res(ctx, 10001, '未知错误')
            }
        }
    }
}