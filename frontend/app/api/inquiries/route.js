import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Inquiry from '@/lib/models/Inquiry';

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    const query = userId ? { user: userId } : {};
    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });
    return NextResponse.json(inquiries);
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
    
    // If no user provided, create a guest user entry or use a default guest user ID
    if (!data.user) {
      // Import User model to create guest user
      const User = (await import('@/lib/models/User')).default;
      
      // Check if guest user exists with this email
      let guestUser = await User.findOne({ email: data.email });
      
      if (!guestUser) {
        // Create a guest user
        guestUser = await User.create({
          name: data.name,
          email: data.email,
          password: Math.random().toString(36).slice(-8), // Random password
          role: 'user'
        });
      }
      
      data.user = guestUser._id;
    }
    
    const inquiry = await Inquiry.create(data);
    return NextResponse.json(inquiry, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
