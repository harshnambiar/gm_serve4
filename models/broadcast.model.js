const mongoose = require('mongoose');

const broadcastSchema = new mongoose.Schema({
  projectCode: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

module.exports = mongoose.model('Broadcast', broadcastSchema);
