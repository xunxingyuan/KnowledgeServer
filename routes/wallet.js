const router = require('koa-router')()

const Wallet = require('../src/wallet/index')

router.prefix('/wallet')

router.get('/query', async (ctx, next) => {
  await Wallet.Query.query(ctx,next)
})

router.post('/ctrlWallet', async (ctx,next)=>{
  await Wallet.Control.control(ctx,next)
})

module.exports = router
