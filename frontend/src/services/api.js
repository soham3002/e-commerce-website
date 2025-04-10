import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchReviews = (productId) => API.get(`/reviews/${productId}`);
export const addReview = (data, token) => API.post('/reviews/add', data, { headers: { Authorization: `Bearer ${token}` } });
export const fetchRecommendations = (productId) => API.get(`/products/recommendations/${productId}`);
