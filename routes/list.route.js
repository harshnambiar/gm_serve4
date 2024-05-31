const express = require('express');

const router = express.Router();

const {
  updateList,
  getList,
  deleteList,
  setList,
} = require('../controllers/list.controller');

router.post('/list/browse', getList);
router.post('/list', setList);
router.put('/list', updateList);
router.delete('/list', deleteList);

module.exports = router;