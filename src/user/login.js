const db = require('../controller/index')
const User = db.User
const Auth = db.Auth
const Json = require('../tools/jsonResponse')


module.exports = {
    login: async (ctx,next)=>{
        let req = ctx.request.body
        let user = await User.find({phone: req.phone})
        if(user.length === 0){
            Json.res(ctx,201,'用户不存在')
        }else{
            let login = await Auth.find({id:user[0].id})
            if(login){
                if(login[0].password === req.password){
                    ctx.session.userId = user[0].id
                    Json.res(ctx,200,'登录成功',{
                        userId: user[0].id
                    })
                }else{
                    Json.res(ctx,202,'用户名或者密码错误')
                }
            }else{
                Json.res(ctx,202,'用户名或者密码错误')
            }
        }
    }
}