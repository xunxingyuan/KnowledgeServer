const models = require('../controller/index');
const User = models.User
const Json = require('../tools/jsonResponse')

const query = {
    queryUser: async (ctx,next)=>{
        let req = ctx.query
        let result = await User.findOne({id: req.userId})
        if(result){
            let userData = {
                "phone": result.phone,
                "name": result.name,
                "nick": result.nick,
                "email": result.email,
                "level": result.level,
                "experience": result.experience,
                "icon": result.icon,
                "introduce": result.introduce,
                "create": result.create
            }
            Json.res(ctx,200,'获取成功',userData)
        }else{
            Json.res(ctx,10001,'获取失败')
        }
    }
}

module.exports = query