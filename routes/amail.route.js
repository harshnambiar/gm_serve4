const express = require('express');

const router = express.Router();

const {
  updateAmailTrash,
  updateAmailRead,
  getAmailSent,
  getAmailReceived,
  setAmail,
} = require('../controllers/amail.controller');


router.post('/amail/sent', getAmailSent);
router.post('/amail/received', getAmailReceived);
router.post('/amail', setAmail);
router.put('/amail/trash', updateAmailTrash);
router.put('/amail/read', updateAmailRead);

module.exports = router;
