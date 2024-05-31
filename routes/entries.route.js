const express = require('express');

const router = express.Router();

const {
  updateEntry,
  getEntry,
  deleteEntry,
  setEntry,
  updateEntries,
  
} = require('../controllers/entries.controller');

router.post('/entry/browse', getEntry);
router.post('/entry', setEntry);
router.put('/entry', updateEntry);
router.put('/entry/many', updateEntries);
router.delete('/entry', deleteEntry);



module.exports = router;