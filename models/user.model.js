const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  
  walletId: {type: String, required: true, unique: true},
  walletType: {type: String, required: true},
  userName: {type: String, required: false},
  firstLogin: {type: String, required: true},
  points: {type: String, required: true},
  email: {type: String, required: false},
  twitter: {type: String, required: false},
  discord: {type: String, required: false},
  location: {type: String, required: false}, 
  eventsEntered: {type: String, required: true},
  eventsWon: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);