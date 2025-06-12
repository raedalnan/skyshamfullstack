import { NextResponse } from 'next/server';

// Mock data - Replace with actual database query
const mockHotel = {
  id: 1,
  name: "Grand Luxury Hotel",
  description: "Experience unparalleled luxury at our 5-star hotel located in the heart of the city. Our hotel offers stunning views, world-class amenities, and exceptional service to make your stay memorable.",
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3",
  ],
  starRating: 5,
  reviewScore: 9.2,
  reviewCount: 1245,
  location: {
    address: "123 Luxury Avenue",
    city: "New York",
    coordinates: [40.7128, -74.0060],
  },
  amenities: [
    "Free WiFi",
    "Pool",
    "Spa",
    "Restaurant",
    "Gym",
    "Parking",
    "Air Conditioning",
    "Room Service",
  ],
  nearbyLandmarks: [
    {
      name: "Central Park",
      distance: 0.5,
      type: "Park",
    },
    {
      name: "Times Square",
      distance: 1.2,
      type: "Attraction",
    },
    {
      name: "Empire State Building",
      distance: 2.1,
      type: "Landmark",
    },
  ],
  rooms: [
    {
      id: 1,
      type: "Deluxe King Room",
      description: "Spacious room with a king-size bed and city view",
      maxOccupancy: 2,
      pricePerNight: 299,
      amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Room Service"],
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3",
      ],
      freeCancellation: true,
      available: true,
    },
    {
      id: 2,
      type: "Executive Suite",
      description: "Luxurious suite with separate living area and premium amenities",
      maxOccupancy: 3,
      pricePerNight: 499,
      amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Living Room", "Executive Lounge Access"],
      images: [
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3",
      ],
      freeCancellation: true,
      available: true,
    },
    {
      id: 3,
      type: "Presidential Suite",
      description: "Ultimate luxury with panoramic views and premium services",
      maxOccupancy: 4,
      pricePerNight: 999,
      amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Room Service", "Living Room", "Dining Room", "Private Terrace", "Butler Service"],
      images: [
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3",
      ],
      freeCancellation: true,
      available: true,
    },
  ],
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real application, you would fetch the hotel data from your database
    // const hotel = await prisma.hotel.findUnique({
    //   where: { id: parseInt(params.id) },
    //   include: { rooms: true, amenities: true, nearbyLandmarks: true },
    // });

    // For now, we'll return mock data
    return NextResponse.json(mockHotel);
  } catch (error) {
    console.error('Error fetching hotel:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hotel data' },
      { status: 500 }
    );
  }
} 