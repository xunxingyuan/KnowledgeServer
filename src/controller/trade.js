const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TradeSchema = new Schema({
    id: String,
    userId: String,
    //交易时间
    tradeTime: Number,
    //交易方式（1：购买，0：收入）
    tradeType: Number,
    //商品ID
    productId: String
})
module.exports =  TradeSchema