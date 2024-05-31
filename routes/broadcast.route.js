const express = require('express');

const router = express.Router();

const {
  updateBroadcast,
  deleteBroadcast,
  getBroadcast,
  setBroadcast,
} = require('../controllers/broadcast.controller');


router.post('/broadcast/browse', getBroadcast);
router.post('/broadcast', setBroadcast);
router.put('/broadcast', updateBroadcast);
router.delete('/broadcast', deleteBroadcast);

module.exports = router;