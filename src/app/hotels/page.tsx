'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Search, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Room {
  adults: number;
  children: { age: number }[];
}

export default function HotelSearchPage() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [rooms, setRooms] = useState<Room[]>([{ adults: 1, children: [] }]);
  const [citizenship, setCitizenship] = useState('');
  const [starRating, setStarRating] = useState<string[]>([]);
  const [mealPlan, setMealPlan] = useState<string[]>([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [showRoomsSection, setShowRoomsSection] = useState(false);

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 1, children: [] }]);
  };

  const handleRemoveRoom = (index: number) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  const handleAdultChange = (roomIndex: number, value: number) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].adults = Math.max(1, Math.min(4, value));
    setRooms(newRooms);
  };

  const handleSearch = () => {
    // TODO: Implement search logic
    console.log({
      destination,
      checkIn,
      checkOut,
      rooms,
      citizenship,
      starRating,
      mealPlan,
      freeCancellation,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Find Your Perfect Stay</h1>
        
        <div className="space-y-6">
          {/* Destination */}
          <div>
            <label className="block text-sm font-medium mb-2">Destination</label>
            <Input
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {/* Dates and Rooms */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Check-in</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Check-out</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Rooms & Guests</label>
              <Button
                variant="outline"
                className="w-full justify-between"
                onClick={() => setShowRoomsSection(!showRoomsSection)}
              >
                <span>
                  {rooms.length} {rooms.length === 1 ? 'Room' : 'Rooms'} • {rooms.reduce((total, room) => total + room.adults + room.children.length, 0)} Guests
                </span>
                <span>{showRoomsSection ? '▼' : '▲'}</span>
              </Button>
            </div>
          </div>

          {showRoomsSection && (
            <div className="border rounded-lg p-4 space-y-4 mt-4">
              {rooms.map((room, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Room {index + 1}</h3>
                    {index > 0 && (
                      <Button
                        variant="ghost"
                        className="text-red-500"
                        onClick={() => handleRemoveRoom(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleAdultChange(index, room.adults - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{room.adults} Adults</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleAdultChange(index, room.adults + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Add children" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No children</SelectItem>
                        <SelectItem value="1">1 child</SelectItem>
                        <SelectItem value="2">2 children</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
              <Button
                variant="ghost"
                className="text-blue-500"
                onClick={handleAddRoom}
              >
                + Add a room
              </Button>
            </div>
          )}

          {/* Additional Parameters */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Citizenship</label>
              <Select value={citizenship} onValueChange={setCitizenship}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium">Star Rating</label>
              {[2, 3, 4, 5].map((rating) => (
                <div key={rating} className="flex items-center space-x-2 h-6">
                  <Checkbox
                    id={`star-${rating}`}
                    checked={starRating.includes(rating.toString())}
                    onCheckedChange={(checked: boolean) => {
                      if (checked) {
                        setStarRating([...starRating, rating.toString()]);
                      } else {
                        setStarRating(starRating.filter(r => r !== rating.toString()));
                      }
                    }}
                  />
                  <label
                    htmlFor={`star-${rating}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {rating} Stars
                  </label>
                </div>
              ))}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium">Meal Plan</label>
              {[
                { value: 'RO', label: 'Room Only' },
                { value: 'BB', label: 'Bed & Breakfast' },
                { value: 'HB', label: 'Half Board' },
                { value: 'FB', label: 'Full Board' },
                { value: 'AI', label: 'All Inclusive' }
              ].map((plan) => (
                <div key={plan.value} className="flex items-center space-x-2 h-6">
                  <Checkbox
                    id={`meal-${plan.value}`}
                    checked={mealPlan.includes(plan.value)}
                    onCheckedChange={(checked: boolean) => {
                      if (checked) {
                        setMealPlan([...mealPlan, plan.value]);
                      } else {
                        setMealPlan(mealPlan.filter(m => m !== plan.value));
                      }
                    }}
                  />
                  <label
                    htmlFor={`meal-${plan.value}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {plan.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="freeCancellation"
              checked={freeCancellation}
              onCheckedChange={(checked: boolean) => setFreeCancellation(checked)}
              className='rounded-none w-5 h-5'
            />
            <label
              htmlFor="freeCancellation"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Free cancellation
            </label>
          </div>

          <Button
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSearch}
          >
            <Search className="mr-2 h-4 w-4" />
            Search Hotels
          </Button>
        </div>
      </div>
    </div>
  );
}
