const router = require('koa-router')()

const User = require('../src/user/index')

router.prefix('/users')

router.post('/login', async (ctx, next) => {
  await User.Login.login(ctx,next)
})

router.post('/register', async (ctx, next) => {
  await User.Register.register(ctx,next)
})

router.get('/query',async (ctx,next) => {
  await User.Query.queryUser(ctx,next)
})

router.put('/query/:id', async (ctx,next)=>{
  await User.Update.updateUser(ctx,next)
})
module.exports = router
