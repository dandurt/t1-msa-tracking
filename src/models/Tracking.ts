import mongoose from 'mongoose';

const trackingSchema = new mongoose.Schema({
  component: String,
  variant: String,
  action: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Tracking', trackingSchema);
