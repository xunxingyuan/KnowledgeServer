const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KnowSchema = new Schema({
  id: String,
  userId: String,
  author: String,
  title: String,
  preview: String,
  content: String,
  type: Number,
  price: Number,
  create: Number,
  modify: Number,
  state: Number,
  count: Number
})
module.exports =  KnowSchema