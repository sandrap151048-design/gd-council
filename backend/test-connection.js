require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');

console.log('🔍 Testing MongoDB Connection...\n');
console.log('Environment:', process.env.NODE_ENV);
console.log('MongoDB URI:', process.env.MONGODB_URI ? '✅ Found' : '❌ Not found');
console.log('JWT Secret:', process.env.JWT_SECRET ? '✅ Found' : '❌ Not found');
console.log('\n📡 Attempting to connect to MongoDB...\n');

const testConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ SUCCESS! MongoDB Connected');
    console.log('📍 Host:', conn.connection.host);
    console.log('📁 Database:', conn.connection.name);
    console.log('🔌 Connection State:', conn.connection.readyState === 1 ? 'Connected' : 'Not Connected');
    
    // List all collections
    const collections = await conn.connection.db.listCollections().toArray();
    console.log('\n📚 Collections in database:');
    if (collections.length === 0) {
      console.log('   (No collections yet - database is empty)');
    } else {
      collections.forEach(col => {
        console.log(`   - ${col.name}`);
      });
    }

    console.log('\n✅ Connection test completed successfully!');
    console.log('You can now start your server with: npm run dev\n');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ CONNECTION FAILED!');
    console.error('Error:', error.message);
    console.error('\n🔧 Troubleshooting tips:');
    console.error('1. Check your MONGODB_URI in the .env file');
    console.error('2. Verify your MongoDB Atlas username and password');
    console.error('3. Make sure your IP address is whitelisted in MongoDB Atlas');
    console.error('4. Check if special characters in password are URL encoded');
    console.error('5. Ensure your cluster is running in MongoDB Atlas\n');
    process.exit(1);
  }
};

testConnection();
