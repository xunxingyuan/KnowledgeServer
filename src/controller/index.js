const mongoose = require("mongoose");
const config = require('../../conf/conf')
const options = {
  user: config.mongodb.auth.user,
  pass: config.mongodb.auth.password,
  path: config.mongodb.path
}

//数据库Schema
const userSchema = require('./user')
const authSchema = require('./auth')
const knowSchema = require('./knowledge')
const chargeSchema = require('./charge')
const tradeSchema = require('./trade')
const walletSchema = require('./wallet')


//数据库认证
let authUrl = "mongodb://"+ options.user + ':'+ options.pass + '@' + options.path
mongoose.connect(authUrl,{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', (callback) => {
  console.log('MongoDB连接成功！！')
})


//导出model
exports.User = mongoose.model('users',userSchema)
exports.Auth = mongoose.model('auth',authSchema)
exports.Konwledge = mongoose.model('konwledge',knowSchema)
exports.Charge = mongoose.model('charge',chargeSchema)
exports.Trade = mongoose.model('trade',tradeSchema)
exports.Wallet = mongoose.model('wallet',walletSchema)


