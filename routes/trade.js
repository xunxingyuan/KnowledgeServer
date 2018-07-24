const router = require('koa-router')()

const Trade = require('../src/trade/index')

router.prefix('/trade')

router.get('/buy', async (ctx, next) => {
  await Trade.Trade.trade(ctx,next)
})


module.exports = router
