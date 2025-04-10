const Product = require('../models/Product');

exports.addReview = async (req, res) => {
  const { productId, rating, comment } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).send('Product not found');

    const review = {
      user: req.user.id,
      rating,
      comment,
    };
    product.reviews.push(review);

    // Update product rating
    const avgRating = product.reviews.reduce((acc, rev) => acc + rev.rating, 0) / product.reviews.length;
    product.rating = avgRating;

    await product.save();
    res.status(201).send('Review added successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getReviews = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate('reviews.user', 'name email');
    if (!product) return res.status(404).send('Product not found');
    res.json(product.reviews);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
