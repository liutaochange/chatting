const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  password: String,
  token: String,
  date: { type: Date, default: Date.now }
})
mongoose.model('user', UserSchema)
