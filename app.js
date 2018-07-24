const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const users = require('./routes/users')
const knowlegde = require('./routes/knowledge')
const public = require('./routes/public')
const wallet = require('./routes/wallet')
const trade = require('./routes/trade')
const session = require("koa-session2")
const store = require('./src/tools/store')

require('./src/controller')

// error handler
onerror(app)


// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

//session
app.use(session({
  key: "SESSIONID",   //default "koa:sess"
  store: new store(),  //添加 store 配置项
  maxAge: 60 * 60 * 1000  //设置session超时时间,
}));
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Credentials", true)
  if(ctx.url === '/users/register'||ctx.url === '/users/login'||ctx.url.indexOf('/public/')>-1){
    await next()
  }else{
    if(ctx.session.hasOwnProperty('userId')&&ctx.session.userId!==null){
      await next()
    }else{
      ctx.body = {
        code: 10005,
        msg: 'session过期，请重新登录'
      }
    }
  }
});

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(users.routes(), users.allowedMethods())
app.use(knowlegde.routes(), knowlegde.allowedMethods())
app.use(public.routes(), public.allowedMethods())
app.use(wallet.routes(), wallet.allowedMethods())
app.use(trade.routes(), trade.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
