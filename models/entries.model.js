const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  walletId: { type: String, required: true },
  eventID: { type: String, required: true },
  applyTime: { type: String, required: true },
  result: { type: String, required: true },
});

module.exports = mongoose.model('entry', entrySchema);
