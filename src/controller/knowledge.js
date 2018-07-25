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

KnowSchema.static.getUserKnowledge = async (data)=>{
  let result = this.find({
    userId: data.userId
  })
  return result
}
module.exports =  KnowSchema