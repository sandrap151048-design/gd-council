require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'partner', 'user'], default: 'user' }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function resetPassword() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    rl.question('Enter email address: ', async (email) => {
      rl.question('Enter new password: ', async (password) => {
        
        const user = await User.findOne({ email: email.trim().toLowerCase() });
        
        if (!user) {
          console.log('\n❌ User not found with email:', email);
          await mongoose.connection.close();
          rl.close();
          process.exit(1);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();

        console.log('\n✅ Password updated successfully!');
        console.log('\nLogin credentials:');
        console.log('Email:', user.email);
        console.log('Password:', password);
        console.log('Role:', user.role);

        await mongoose.connection.close();
        rl.close();
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

resetPassword();
