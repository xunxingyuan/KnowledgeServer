const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  id: String,
  password: String
})
module.exports =  AuthSchema