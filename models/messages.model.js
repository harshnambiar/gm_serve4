const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  projectCode: { type: String, required: true },
  clubCode: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: String, required: true },
  user: { type: String, required: true },
});

module.exports = mongoose.model('Message', messageSchema);
