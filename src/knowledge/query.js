const db = require('../controller/index')
const Konw = db.Konwledge
const Json = require('../tools/jsonResponse')

module.exports = {
    query: async (ctx,next)=>{
        // let result = await Konw
        let result = await Konw.find({
            userId: ctx.session.userId
        })
        let data = []
        if(result){
            result.forEach(element => {
                data.push({
                    id: element.id,
                    author: element.author,
                    title: element.title,
                    preview: element.preview,
                    content: element.content,
                    type: element.type,
                    price: element.price,
                    create: element.create,
                    modify: element.modify,
                    state: element.state,
                    count: element.count
                })
            });
            Json.res(ctx,200,'获取成功',{
                lists: data
            })
        }else{
            Json.res(ctx,10001,'未知错误')
        }
        
    }
}