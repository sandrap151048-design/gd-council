import { NextResponse } from 'next/server';
import dbConnect from '@/lib/config/db';
import Enrollment from '@/lib/models/Enrollment';

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    const query = userId ? { user: userId } : {};
    const enrollments = await Enrollment.find(query)
      .populate('course')
      .populate('user', 'name email')
      .sort({ createdAt: -1 });
    
    return NextResponse.json(enrollments);
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
    const enrollment = await Enrollment.create(data);
    return NextResponse.json(enrollment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
