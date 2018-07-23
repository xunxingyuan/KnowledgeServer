const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//用户充值提现
const ChargeSchema = new Schema({
    id: String,
    userId: String,
    //充值提现时间
    tradeTime: Number,
    //交易方式（1：提现，0：充值）
    tradeType: Number,
    //交易金额
    count: Number
})
module.exports =  ChargeSchema