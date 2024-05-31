const express = require('express');

const router = express.Router();

const {
  mouseValidate,
} = require('../controllers/authentix.controller');


router.post('/authentix/mouse', mouseValidate);


module.exports = router;