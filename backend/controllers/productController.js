const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;
    const product = new Product({
      name,
      price,
      description,
      category,
      imageUrl,
      vendor: req.user.id, // Vendor field
    });
    await product.save();
    res.status(201).send('Product added successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const recommendedProducts = await Product.find({ category: product.category }).limit(5);
    res.json(recommendedProducts);
  } catch (error) {
    res.status(500).send('Error fetching recommendations');
  }
};
