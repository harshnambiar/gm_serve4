const express = require('express');

const router = express.Router();

const {
  updateProject,
  deleteProject,
  getProject,
  setProject,
  
  
} = require('../controllers/project.controller');


router.post('/project/browse', getProject);

router.post('/project', setProject);
router.put('/project', updateProject);
router.delete('/project', deleteProject);

module.exports = router;