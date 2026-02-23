import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    // Check if user exists
    let user = await User.findOne({ email: email.trim().toLowerCase() });
    
    // If user doesn't exist, create a new one automatically
    if (!user) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash(password, 10);
      
      user = await User.create({
        name: email.split('@')[0], // Use email prefix as name
        email: email.trim().toLowerCase(),
        password: hashedPassword,
        role: 'user'
      });
      
      console.log('New user created:', user.email);
    } else {
      // User exists - verify password
      const isMatch = await bcrypt.compare(password, user.password);
      
      if (!isMatch) {
        // Password doesn't match - update it to the new password
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        console.log('Password updated for:', user.email);
      }
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '30d' }
    );

    return NextResponse.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
