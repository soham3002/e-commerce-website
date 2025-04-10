const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, productController.addProduct);
router.get('/:id', productController.getProduct);
router.get('/recommendations/:id', productController.getRecommendations);

module.exports = router;
