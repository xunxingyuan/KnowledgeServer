const router = require('koa-router')()

const public = require('../src/public/index')

router.prefix('/public')

router.get('/query', async (ctx, next) => {
  await public.knowledgeQuery.query(ctx,next)
})

module.exports = router