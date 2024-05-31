const express = require('express');

const router = express.Router();

const {
  updateMessage,
  getMessage,
  deleteMessage,
  setMessage,
  
} = require('../controllers/messages.controller');

router.post('/messages/browse', getMessage);
router.post('/messages', setMessage);
router.put('/messages', updateMessage);
router.delete('/messages', deleteMessage);



module.exports = router;