const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: String, // e.g., "monthly", "annual"
  status: { type: String, default: 'active' },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
