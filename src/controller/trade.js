const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TradeSchema = new Schema({
    id: String,
    userId: String,
    //交易时间
    tradeTime: Number,
    //商品ID
    productId: String,
    //金额
    price: Number,
    //商品归属
    owner: String
})
module.exports =  TradeSchema