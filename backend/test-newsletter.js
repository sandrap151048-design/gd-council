require('dotenv').config();
const mongoose = require('mongoose');
const Newsletter = require('./models/Newsletter');

const testNewsletter = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Get all subscribers
    const subscribers = await Newsletter.find();
    console.log('\n📧 Newsletter Subscribers:');
    console.log('Total:', subscribers.length);
    console.log('Active:', subscribers.filter(s => s.isActive).length);
    
    if (subscribers.length > 0) {
      console.log('\nSubscribers:');
      subscribers.forEach((sub, index) => {
        console.log(`${index + 1}. ${sub.email} - ${sub.isActive ? 'Active' : 'Inactive'} - ${sub.subscribedAt}`);
      });
    } else {
      console.log('\n⚠️  No subscribers found. Adding sample data...');
      
      // Add sample subscribers
      const sampleEmails = [
        'john.doe@example.com',
        'jane.smith@example.com',
        'student@university.edu'
      ];
      
      for (const email of sampleEmails) {
        await Newsletter.create({ email });
        console.log(`✅ Added: ${email}`);
      }
      
      console.log('\n✅ Sample subscribers added successfully!');
    }

    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

testNewsletter();
