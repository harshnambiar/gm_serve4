const express = require('express');

const router = express.Router();

const {
  updateTask,
  deleteTask,
  getTask,
  setTask,
} = require('../controllers/task.controller');


router.get('/task', getTask);
router.post('/task', setTask);
router.put('/task', updateTask);
router.delete('/task', deleteTask);

module.exports = router;