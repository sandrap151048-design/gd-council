import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Partnership from '@/lib/models/Partnership';

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    const query = userId ? { user: userId } : {};
    const partnerships = await Partnership.find(query)
      .populate('user', 'name email')
      .sort({ createdAt: -1 });
    return NextResponse.json(partnerships);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // If no user provided, create a guest user entry or use existing user
    if (!data.user) {
      // Import User model to create guest user
      const User = (await import('@/lib/models/User')).default;
      
      // Check if user exists with this email
      let existingUser = await User.findOne({ email: data.email });
      
      if (!existingUser) {
        // Create a guest user
        existingUser = await User.create({
          name: data.contactPerson,
          email: data.email,
          password: Math.random().toString(36).slice(-8), // Random password
          role: 'user'
        });
      }
      
      data.user = existingUser._id;
    }
    
    const partnership = await Partnership.create(data);
    return NextResponse.json(partnership, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
