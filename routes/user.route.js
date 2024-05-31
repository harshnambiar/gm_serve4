const express = require('express');

const router = express.Router();

const {
  updateUser,
  getUser,
  deleteUser,
  setUser,
  
} = require('../controllers/user.controller');

router.post('/user/browse', getUser);
router.post('/user', setUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);



module.exports = router;