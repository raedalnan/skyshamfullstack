'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, MapPin, Wifi, Waves, Heart, Utensils, Dumbbell, Car, Wind, Coffee } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface Hotel {
  id: number;
  name: string;
  description: string;
  images: string[];
  starRating: number;
  reviewScore: number;
  reviewCount: number;
  location: {
    address: string;
    city: string;
    coordinates: [number, number];
  };
  amenities: string[];
  nearbyLandmarks: {
    name: string;
    distance: number;
    type: string;
  }[];
  rooms: Room[];
}

interface Room {
  id: number;
  type: string;
  description: string;
  maxOccupancy: number;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  freeCancellation: boolean;
  available: boolean;
}

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export default function HotelDetailsPage() {
  const params = useParams();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`/api/hotels/${params.id}`);
        const data = await response.json();
        setHotel(data);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [params.id]);

  const handleBooking = async () => {
    if (!selectedRoom || !checkIn || !checkOut) return;

    try {
      const bookingData = {
        hotelId: hotel?.id,
        roomId: selectedRoom.id,
        checkIn,
        checkOut,
        guests,
        ...bookingForm,
      };

      // Replace with your actual API endpoint
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        // Handle successful booking
        console.log('Booking successful');
      } else {
        // Handle booking error
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  if (loading) {
    return <HotelDetailsSkeleton />;
  }

  if (!hotel) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Hotel not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Photo Gallery */}
      <div className="mb-8">
        <PhotoGallery images={hotel.images} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hotel Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {Array(hotel.starRating).fill('★').map((_, i) => (
                  <span key={i} className="text-yellow-400">{'★'}</span>
                ))}
              </div>
              <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">
                <Star className="h-4 w-4 mr-1" />
                {hotel.reviewScore}
              </div>
              <div className="text-gray-600">
                {hotel.reviewCount} reviews
              </div>
            </div>
            <div className="flex items-center text-gray-600 mt-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{hotel.location.address}, {hotel.location.city}</span>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="prose max-w-none">
                <p>{hotel.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="rooms">
              <div className="space-y-6">
                {hotel.rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    isSelected={selectedRoom?.id === room.id}
                    onSelect={() => setSelectedRoom(room)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="amenities">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <AmenityIcon amenity={amenity} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="h-[400px] bg-gray-100 rounded-lg mb-4">
                {/* Add your map component here */}
                <div className="w-full h-full flex items-center justify-center">
                  Map Component
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Nearby Landmarks</h3>
                {hotel.nearbyLandmarks.map((landmark) => (
                  <div key={landmark.name} className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{landmark.name}</h4>
                      <p className="text-sm text-gray-600">{landmark.type}</p>
                    </div>
                    <span className="text-gray-600">{landmark.distance} km</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <BookingSidebar
              selectedRoom={selectedRoom}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              onCheckInChange={setCheckIn}
              onCheckOutChange={setCheckOut}
              onGuestsChange={setGuests}
              bookingForm={bookingForm}
              onBookingFormChange={setBookingForm}
              onBook={handleBooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Hotel"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative h-20 rounded-lg overflow-hidden",
              selectedImage === index && "ring-2 ring-blue-500"
            )}
          >
            <img
              src={image}
              alt={`Hotel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function RoomCard({ room, isSelected, onSelect }: { room: Room; isSelected: boolean; onSelect: () => void }) {
  return (
    <Card className={cn("p-4", isSelected && "ring-2 ring-blue-500")}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <img
            src={room.images[0]}
            alt={room.type}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{room.type}</h3>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-medium mb-2">Room Features</h4>
              <ul className="space-y-1">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center text-sm">
                    <AmenityIcon amenity={amenity} className="h-4 w-4 mr-2" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Room Details</h4>
              <ul className="space-y-1 text-sm">
                <li>Max Occupancy: {room.maxOccupancy} guests</li>
                {room.freeCancellation && (
                  <li className="text-green-600">Free Cancellation</li>
                )}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold">${room.pricePerNight}</span>
              <span className="text-gray-600">/night</span>
            </div>
            <Button
              onClick={onSelect}
              variant={isSelected ? "default" : "outline"}
            >
              {isSelected ? "Selected" : "Select Room"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function BookingSidebar({
  selectedRoom,
  checkIn,
  checkOut,
  guests,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  bookingForm,
  onBookingFormChange,
  onBook,
}: {
  selectedRoom: Room | null;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guests: number;
  onCheckInChange: (date: Date | undefined) => void;
  onCheckOutChange: (date: Date | undefined) => void;
  onGuestsChange: (guests: number) => void;
  bookingForm: BookingForm;
  onBookingFormChange: (form: BookingForm) => void;
  onBook: () => void;
}) {
  const nights = checkIn && checkOut
    ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const totalPrice = selectedRoom ? selectedRoom.pricePerNight * nights : 0;

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
      
      {/* Date Selection */}
      <div className="space-y-4 mb-6">
        <div>
          <Label>Check-in</Label>
          <Calendar
            mode="single"
            selected={checkIn}
            onSelect={onCheckInChange}
            className="rounded-md border"
          />
        </div>
        <div>
          <Label>Check-out</Label>
          <Calendar
            mode="single"
            selected={checkOut}
            onSelect={onCheckOutChange}
            className="rounded-md border"
          />
        </div>
        <div>
          <Label>Guests</Label>
          <Input
            type="number"
            min={1}
            max={selectedRoom?.maxOccupancy || 4}
            value={guests}
            onChange={(e) => onGuestsChange(parseInt(e.target.value))}
          />
        </div>
      </div>

      {/* Booking Form */}
      {selectedRoom && (
        <div className="space-y-4">
          <div className="border-t pt-4">
            <h3 className="font-medium mb-4">Guest Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>First Name</Label>
                <Input
                  value={bookingForm.firstName}
                  onChange={(e) => onBookingFormChange({ ...bookingForm, firstName: e.target.value })}
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  value={bookingForm.lastName}
                  onChange={(e) => onBookingFormChange({ ...bookingForm, lastName: e.target.value })}
                />
              </div>
            </div>
            <div className="mt-4">
              <Label>Email</Label>
              <Input
                type="email"
                value={bookingForm.email}
                onChange={(e) => onBookingFormChange({ ...bookingForm, email: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <Label>Phone</Label>
              <Input
                type="tel"
                value={bookingForm.phone}
                onChange={(e) => onBookingFormChange({ ...bookingForm, phone: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <Label>Special Requests</Label>
              <Input
                value={bookingForm.specialRequests}
                onChange={(e) => onBookingFormChange({ ...bookingForm, specialRequests: e.target.value })}
              />
            </div>
          </div>

          {/* Price Summary */}
          <div className="border-t pt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>${selectedRoom.pricePerNight} × {nights} nights</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full"
            onClick={onBook}
            disabled={!checkIn || !checkOut || !selectedRoom}
          >
            Book Now
          </Button>
        </div>
      )}
    </Card>
  );
}

function AmenityIcon({ amenity, className }: { amenity: string; className?: string }) {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Free WiFi': <Wifi className={className} />,
    'Pool': <Waves className={className} />,
    'Spa': <Heart className={className} />,
    'Restaurant': <Utensils className={className} />,
    'Gym': <Dumbbell className={className} />,
    'Parking': <Car className={className} />,
    'Air Conditioning': <Wind className={className} />,
    'Room Service': <Coffee className={className} />,
  };

  return iconMap[amenity] || null;
}

function HotelDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <Skeleton className="h-[400px] w-full" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <div className="lg:col-span-1">
            <Skeleton className="h-[400px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 