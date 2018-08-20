const router = require('koa-router')()

const Knowledge = require('../src/knowledge/index')

router.prefix('/knowledge')

router.post('/create', async (ctx, next) => {
  await Knowledge.Create.create(ctx,next)
})

router.get('/query', async (ctx,next)=>{
  await Knowledge.Query.query(ctx,next)
})

router.get('/countAdd', async (ctx, next) => {
  await Knowledge.Update.addCount(ctx, next)
})

module.exports = router
