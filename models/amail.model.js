const mongoose = require('mongoose');

const amailSchema = new mongoose.Schema({
  mailId: { type: String, required: true, unique: true },
  subject: { type: String, required: false },
  contentA: { type: String, required: true },
  contentB: { type: String, required: true },
  contentC: { type: String, required: true },
  to: { type: String, required: true },
  from: { type: String, required: true },
  isRead: {type: Boolean, required: false },
  isTrash: { type: Boolean, required: false },
  timestamp: { type: Date, required: true },
});

module.exports = mongoose.model('Amail', amailSchema);
