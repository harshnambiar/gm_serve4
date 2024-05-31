const mongoose = require('mongoose');

const taskEntrySchema = new mongoose.Schema({
  walletId: { type: String, required: true },
  taskID: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('TaskEntries', taskEntrySchema);
