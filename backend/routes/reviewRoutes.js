const express = require('express');
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, reviewController.addReview);
router.get('/:productId', reviewController.getReviews);

module.exports = router;
