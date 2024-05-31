const express = require('express');

const router = express.Router();

const {
  updateTaskEntry,
  deleteTaskEntry,
  getTaskEntry,
  setTaskEntry,
} = require('../controllers/taskEntries.controller');


router.post('/taskEntries/browse', getTaskEntry);
router.post('/taskEntries', setTaskEntry);
router.put('/taskEntries', updateTaskEntry);
router.delete('/taskEntries', deleteTaskEntry);

module.exports = router;