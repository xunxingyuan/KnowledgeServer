const router = require('koa-router')()

const Knowledge = require('../src/knowledge/index')

router.prefix('/knowledge')

router.post('/create', async (ctx, next) => {
  await Knowledge.Create.create(ctx,next)
})

module.exports = router
