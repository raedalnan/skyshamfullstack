'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter, Star, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for hotels
const mockHotels = [
  {
    id: 1,
    name: "Grand Luxury Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
    starRating: 5,
    reviewScore: 9.2,
    reviewCount: 1245,
    pricePerNight: 299,
    location: "Downtown",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
    freeCancellation: true,
    distance: 0.5, // km from center
  },
  {
    id: 2,
    name: "Seaside Resort & Spa",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3",
    starRating: 4,
    reviewScore: 8.7,
    reviewCount: 892,
    pricePerNight: 199,
    location: "Beachfront",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Beach Access"],
    freeCancellation: true,
    distance: 2.1,
  },
  {
    id: 3,
    name: "Business Hotel Express",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3",
    starRating: 3,
    reviewScore: 7.9,
    reviewCount: 567,
    pricePerNight: 149,
    location: "Business District",
    amenities: ["Free WiFi", "Business Center", "Restaurant", "Gym"],
    freeCancellation: false,
    distance: 1.2,
  },
  {
    id: 4,
    name: "Boutique City Hotel",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3",
    starRating: 4,
    reviewScore: 8.9,
    reviewCount: 432,
    pricePerNight: 179,
    location: "Historic District",
    amenities: ["Free WiFi", "Restaurant", "Bar", "Room Service"],
    freeCancellation: true,
    distance: 0.8,
  },
  {
    id: 5,
    name: "Mountain View Lodge",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3",
    starRating: 5,
    reviewScore: 9.5,
    reviewCount: 678,
    pricePerNight: 249,
    location: "Mountain Area",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Hiking Trails"],
    freeCancellation: true,
    distance: 3.5,
  },
  {
    id: 6,
    name: "Airport Hotel & Conference Center",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
    starRating: 4,
    reviewScore: 8.4,
    reviewCount: 789,
    pricePerNight: 169,
    location: "Airport Area",
    amenities: ["Free WiFi", "Business Center", "Restaurant", "Shuttle Service"],
    freeCancellation: false,
    distance: 4.2,
  }
];

interface FilterState {
  priceRange: [number, number];
  starRating: number[];
  reviewScore: number[];
  propertyTypes: string[];
  amenities: string[];
  freeCancellation: boolean;
  distance: number;
  chains: string[];
}

export default function SearchResultsPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('topPicks');
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    starRating: [],
    reviewScore: [],
    propertyTypes: [],
    amenities: [],
    freeCancellation: false,
    distance: 10,
    chains: [],
  });

  const handleSort = (value: string) => {
    setSortBy(value);
  };

  const filteredHotels = mockHotels.filter((hotel) => {
    // Price range filter
    if (hotel.pricePerNight < filters.priceRange[0] || hotel.pricePerNight > filters.priceRange[1]) {
      return false;
    }

    // Star rating filter
    if (filters.starRating.length > 0 && !filters.starRating.includes(hotel.starRating)) {
      return false;
    }

    // Review score filter
    if (hotel.reviewScore < filters.reviewScore[0] || hotel.reviewScore > filters.reviewScore[1]) {
      return false;
    }

    // Property type filter (assuming all are hotels for now)
    if (filters.propertyTypes.length > 0) {
      return false;
    }

    // Amenities filter
    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity) =>
        hotel.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }

    // Free cancellation filter
    if (filters.freeCancellation && !hotel.freeCancellation) {
      return false;
    }

    // Distance filter
    if (hotel.distance > filters.distance) {
      return false;
    }

    return true;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case 'lowestPrice':
        return a.pricePerNight - b.pricePerNight;
      case 'highestRating':
        return b.reviewScore - a.reviewScore;
      case 'distance':
        return a.distance - b.distance;
      case 'topPicks':
      default:
        // Combine review score and price for a "value" score
        const scoreA = (a.reviewScore * 10) - (a.pricePerNight / 50);
        const scoreB = (b.reviewScore * 10) - (b.pricePerNight / 50);
        return scoreB - scoreA;
    }
  });

  const FilterSection = () => (
    <div className="space-y-6 p-4">
      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-2">Price Range</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={10}
          onValueChange={(value: number[]) => setFilters({ ...filters, priceRange: value as [number, number] })}
        />
        <div className="flex justify-between mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <h3 className="font-medium mb-2">Star Rating</h3>
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex items-center space-x-2">
            <Checkbox
              id={`star-${rating}`}
              checked={filters.starRating.includes(rating)}
              onCheckedChange={(checked: boolean) => {
                const newRatings = checked
                  ? [...filters.starRating, rating]
                  : filters.starRating.filter((r) => r !== rating);
                setFilters({ ...filters, starRating: newRatings });
              }}
            />
            <label htmlFor={`star-${rating}`} className="flex items-center">
              {Array(rating).fill('★').join('')}
            </label>
          </div>
        ))}
      </div>

      {/* Guest Review Score */}
      <div>
        <h3 className="font-medium mb-2">Guest Review Score</h3>
        <Slider
          defaultValue={[0, 10]}
          max={10}
          step={0.1}
          onValueChange={(value: number[]) => setFilters({ ...filters, reviewScore: value as [number, number] })}
        />
        <div className="flex justify-between mt-2">
          <span>{filters.reviewScore[0]}</span>
          <span>{filters.reviewScore[1]}</span>
        </div>
      </div>

      {/* Property Types */}
      <div>
        <h3 className="font-medium mb-2">Property Types</h3>
        {[
          "Hotel",
          "Resort",
          "Apartment",
          "Villa",
          "Hostel",
          "Guest House",
          "Bed & Breakfast"
        ].map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox
              id={`type-${type}`}
              checked={filters.propertyTypes.includes(type)}
              onCheckedChange={(checked: boolean) => {
                const newTypes = checked
                  ? [...filters.propertyTypes, type]
                  : filters.propertyTypes.filter((t) => t !== type);
                setFilters({ ...filters, propertyTypes: newTypes });
              }}
            />
            <label htmlFor={`type-${type}`}>{type}</label>
          </div>
        ))}
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-medium mb-2">Amenities</h3>
        {[
          "Free WiFi",
          "Pool",
          "Spa",
          "Restaurant",
          "Gym",
          "Parking",
          "Air Conditioning",
          "Room Service",
          "Business Center",
          "Beach Access"
        ].map((amenity) => (
          <div key={amenity} className="flex items-center space-x-2">
            <Checkbox
              id={`amenity-${amenity}`}
              checked={filters.amenities.includes(amenity)}
              onCheckedChange={(checked: boolean) => {
                const newAmenities = checked
                  ? [...filters.amenities, amenity]
                  : filters.amenities.filter((a) => a !== amenity);
                setFilters({ ...filters, amenities: newAmenities });
              }}
            />
            <label htmlFor={`amenity-${amenity}`}>{amenity}</label>
          </div>
        ))}
      </div>

      {/* Distance */}
      <div>
        <h3 className="font-medium mb-2">Distance from Center</h3>
        <Slider
          defaultValue={[0, 10]}
          max={10}
          step={0.1}
          onValueChange={(value: number[]) => setFilters({ ...filters, distance: value[1] })}
        />
        <div className="flex justify-between mt-2">
          <span>0 km</span>
          <span>{filters.distance} km</span>
        </div>
      </div>

      {/* Free Cancellation */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="freeCancellation"
          checked={filters.freeCancellation}
          onCheckedChange={(checked: boolean) => setFilters({ ...filters, freeCancellation: checked })}
        />
        <label htmlFor="freeCancellation">Free Cancellation</label>
      </div>

      {/* Reset Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => setFilters({
          priceRange: [0, 1000],
          starRating: [],
          reviewScore: [0, 10],
          propertyTypes: [],
          amenities: [],
          freeCancellation: false,
          distance: 10,
          chains: [],
        })}
      >
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mobile Filter Button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <FilterSection />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <FilterSection />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {sortedHotels.length} hotels found
            </h2>
            <Select value={sortBy} onValueChange={handleSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="topPicks">Top Picks</SelectItem>
                <SelectItem value="lowestPrice">Lowest Price</SelectItem>
                <SelectItem value="highestRating">Highest Rating</SelectItem>
                <SelectItem value="distance">Distance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Hotel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  {hotel.freeCancellation && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                      Free Cancellation
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      <Star className="h-4 w-4 mr-1" />
                      {hotel.reviewScore}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">${hotel.pricePerNight}</span>
                      <span className="text-gray-600">/night</span>
                    </div>
                    <Button>View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedHotels.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600">No hotels found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters to find more options</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 