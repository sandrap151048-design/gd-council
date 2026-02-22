const Newsletter = require('../models/Newsletter');

// Subscribe to newsletter
exports.subscribe = async (req, res) => {
  try {
    console.log('Newsletter subscription request received:', req.body);
    const { email } = req.body;

    if (!email) {
      console.log('Error: Email is required');
      return res.status(400).json({ message: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Error: Invalid email format:', email);
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email: email.toLowerCase().trim() });
    
    if (existingSubscriber) {
      console.log('Email already exists:', email);
      if (existingSubscriber.isActive) {
        return res.status(400).json({ message: 'This email is already subscribed' });
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = Date.now();
        await existingSubscriber.save();
        console.log('Subscription reactivated:', email);
        return res.status(200).json({ 
          message: 'Welcome back! Your subscription has been reactivated',
          subscriber: existingSubscriber 
        });
      }
    }

    // Create new subscriber
    const subscriber = await Newsletter.create({ email: email.toLowerCase().trim() });
    console.log('New subscriber created:', email);
    
    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter!',
      subscriber 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      message: 'Error subscribing to newsletter. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Get all subscribers (Admin only)
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    
    res.status(200).json({
      count: subscribers.length,
      activeCount: subscribers.filter(s => s.isActive).length,
      subscribers
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ message: 'Error fetching subscribers', error: error.message });
  }
};

// Unsubscribe
exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOne({ email });
    
    if (!subscriber) {
      return res.status(404).json({ message: 'Email not found in our subscription list' });
    }

    subscriber.isActive = false;
    await subscriber.save();
    
    res.status(200).json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({ message: 'Error unsubscribing', error: error.message });
  }
};

// Delete subscriber (Admin only)
exports.deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;

    const subscriber = await Newsletter.findByIdAndDelete(id);
    
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    
    res.status(200).json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    console.error('Delete subscriber error:', error);
    res.status(500).json({ message: 'Error deleting subscriber', error: error.message });
  }
};
