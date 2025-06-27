const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String // 'admin' or 'user'
});

module.exports = mongoose.model('User', userSchema);
