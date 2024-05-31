const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  taskID: { type: String, required: true, unique: true },
  goodPoints: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
