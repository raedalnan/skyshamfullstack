import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    // Validate required fields
    const requiredFields = [
      'hotelId',
      'roomId',
      'checkIn',
      'checkOut',
      'guests',
      'firstName',
      'lastName',
      'email',
      'phone',
    ];

    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // In a real application, you would:
    // 1. Validate the dates and room availability
    // 2. Create the booking in your database
    // 3. Send confirmation emails
    // 4. Handle payment processing

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock successful booking response
    return NextResponse.json({
      success: true,
      bookingId: Math.floor(Math.random() * 1000000),
      message: 'Booking confirmed successfully',
      bookingDetails: {
        ...bookingData,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
} 