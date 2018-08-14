const db = require('../controller/index')
const Konw = db.Konwledge
const Json = require('../tools/jsonResponse')


module.exports = {
    query: async (ctx, next) => {
        console.log(ctx.session)
        let result = await Konw.find()
        let data = []
        if (result) {
            result.forEach(element => {
                data.push({
                    id: element.id,
                    author: element.author,
                    title: element.title,
                    preview: element.preview,
                    type: element.type,
                    price: element.price,
                    modify: element.modify,
                    count: element.count
                })
            })
            Json.res(ctx,200,'获取成功',{
                lists: data
            })
        }else{
            Json.res(ctx,10001,'未知错误')
        }
    },
    recommend: async (ctx,next)=>{
        
    }
}