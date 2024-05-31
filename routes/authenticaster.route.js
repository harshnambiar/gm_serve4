const express = require('express');

const router = express.Router();

const {
  calculateScore,
} = require('../controllers/authenticaster.controller');


router.post('/authenticaster/score', calculateScore);


module.exports = router;