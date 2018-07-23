const router = require('koa-router')()

const Wallet = require('../src/wallet/index')

router.prefix('/wallet')

router.post('/query', async (ctx, next) => {
//   await Knowledge.Create.create(ctx,next)
})

module.exports = router
