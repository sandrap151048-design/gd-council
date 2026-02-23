require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'partner', 'user'], default: 'user' }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function createAdmin() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Delete existing admin if exists
    await User.deleteOne({ email: 'admin@globaledu.com' });
    console.log('Removed old admin user if existed\n');

    // Create fresh admin with simple password
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@globaledu.com',
      password: hashedPassword,
      role: 'admin'
    });

    console.log('✅ Fresh admin user created successfully!\n');
    console.log('Login credentials:');
    console.log('Email: admin@globaledu.com');
    console.log('Password: admin123');
    console.log('\nUser ID:', admin._id);
    console.log('Role:', admin.role);

    // Verify the password works
    const testMatch = await bcrypt.compare('admin123', admin.password);
    console.log('\n✅ Password verification test:', testMatch ? 'PASSED' : 'FAILED');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createAdmin();
