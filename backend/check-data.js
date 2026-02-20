require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');
const Course = require('./models/Course');
const University = require('./models/University');

const checkData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const courses = await Course.find();
    console.log(`📚 Courses in database: ${courses.length}`);
    if (courses.length > 0) {
      console.log('Sample course:', JSON.stringify(courses[0], null, 2));
    }

    const universities = await University.find();
    console.log(`\n🏛️ Universities in database: ${universities.length}`);
    if (universities.length > 0) {
      console.log('Sample university:', JSON.stringify(universities[0], null, 2));
    }

    await mongoose.connection.close();
    console.log('\n✅ Check complete');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

checkData();
