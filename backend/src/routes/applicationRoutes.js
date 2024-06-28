const express = require('express');
const {
  apply,
  getApplication,
  reviewApplication,
  allocateRoom,
} = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/apply', authMiddleware, apply);
router.get('/application', authMiddleware, getApplication);
router.post('/review', authMiddleware, reviewApplication);
router.post('/allocate', authMiddleware, allocateRoom);

module.exports = router;
