const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  favoriteFoods: { type: [String], required: true }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
