import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
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
