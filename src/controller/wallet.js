const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
  userId: String,
  //账户余额
  left: Number,
  //账户收入
  earn: Number,
  //账户消费
  used: Number,
  //提现金额
  withdraw: Number,
  //最近变动时间
  modify: Number
})
module.exports =  WalletSchema