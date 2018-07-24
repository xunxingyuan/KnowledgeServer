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

WalletSchema.static.add = async (data)=>{
  let now = new Date().getTime()
  let id = now + '_' + Math.floor(Math.random()*10000)
  let cb = await this.update({userId: data.userId},{
    $set: {

    }
  })
}


module.exports =  WalletSchema