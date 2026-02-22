const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    console.log('🔄 Connecting to MongoDB...');
    
    // MongoDB connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const conn = await mongoose.connect(process.env.MONGODB_URI, options);
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`✅ Database Name: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error(`❌ MongoDB connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️  MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✅ MongoDB reconnected');
    });

    return conn;

  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    
    if (!process.env.MONGODB_URI) {
      console.error('⚠️  MONGODB_URI environment variable is not set!');
      console.error('⚠️  Please add MONGODB_URI in Render environment variables');
    } else {
      console.error('⚠️  Please check your MONGODB_URI is correct');
      console.error('⚠️  Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)');
    }
    
    throw error;
  }
};

module.exports = connectDB;
