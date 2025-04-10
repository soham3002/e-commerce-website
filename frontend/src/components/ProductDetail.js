import React, { useState, useEffect } from 'react';
import { fetchProduct, fetchReviews, addReview, fetchRecommendations } from '../services/api';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetchProduct(productId).then(res => setProduct(res.data));
    fetchReviews(productId).then(res => setReviews(res.data));
    fetchRecommendations(productId).then(res => setRecommended(res.data));
  }, [productId]);

  const handleSubmitReview = () => {
    const token = localStorage.getItem('token');
    addReview({ productId, rating, comment }, token).then(() => {
      setReviews([...reviews, { rating, comment }]);
      setRating(0);
      setComment('');
    });
  };

  return (
    <div>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
      <p>Rating: {product?.rating}</p>
      <div>
        <h3>Reviews</h3>
        {reviews.map((review, idx) => (
          <div key={idx}>
            <strong>{review.user?.name}</strong> - {review.rating} stars
            <p>{review.comment}</p>
          </div>
        ))}
        <h4>Add a Review</h4>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} max="5" />
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={handleSubmitReview}>Submit</button>
      </div>

      <h3>Recommended Products</h3>
      <div>
        {recommended.map((product) => (
          <div key={product._id}>
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
