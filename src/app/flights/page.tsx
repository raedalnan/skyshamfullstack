'use client';

import { useState, useCallback, memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Search, Plane } from 'lucide-react';
import { cn } from '@/lib/utils';

// Memoized Trip Type Button
const TripTypeButton = memo(({ 
  type, 
  currentType, 
  onClick 
}: { 
  type: string; 
  currentType: string; 
  onClick: () => void;
}) => (
  <Button
    variant={currentType === type ? 'outline' : 'default'}
    onClick={onClick}
    className={cn(
      "min-w-[100px]",
      currentType === type && "border-2"
    )}
  >
    {type === 'oneway' ? 'One Way' : 'Round Trip'}
  </Button>
));

TripTypeButton.displayName = 'TripTypeButton';

// Memoized Trip Type Container
const TripTypeContainer = memo(({ 
  tripType, 
  onTripTypeChange 
}: { 
  tripType: string; 
  onTripTypeChange: (type: string) => void;
}) => {
  const buttons = useMemo(() => [
    {
      type: 'oneway',
      label: 'One Way',
    },
    {
      type: 'roundtrip',
      label: 'Round Trip',
    },
  ], []);

  return (
    <div className="flex space-x-4">
      {buttons.map(({ type }) => (
        <TripTypeButton
          key={type}
          type={type}
          currentType={tripType}
          onClick={() => onTripTypeChange(type)}
        />
      ))}
    </div>
  );
});

TripTypeContainer.displayName = 'TripTypeContainer';

export default function FlightSearchPage() {
  const router = useRouter();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [tripType, setTripType] = useState('oneway');
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('economy');

  const handleTripTypeChange = useCallback((type: string) => {
    if (type === tripType) return; // Prevent unnecessary updates
    
    setTripType(type);
    if (type === 'oneway') {
      setReturnDate(undefined);
    }
  }, [tripType]);

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      from,
      to,
      departureDate: departureDate?.toISOString() || '',
      returnDate: returnDate?.toISOString() || '',
      tripType,
      passengers: passengers.toString(),
      cabinClass,
    });

    router.push(`/flights/results?${searchParams.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Find Your Perfect Flight</h1>
        
        <div className="space-y-6">
          {/* Trip Type Selection */}
          <TripTypeContainer
            tripType={tripType}
            onTripTypeChange={handleTripTypeChange}
          />

          {/* From and To */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">From</label>
              <Input
                placeholder="City or Airport"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">To</label>
              <Input
                placeholder="City or Airport"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Departure Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !departureDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? format(departureDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {tripType === 'roundtrip' && (
              <div>
                <label className="block text-sm font-medium mb-2">Return Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>

          {/* Passengers and Cabin Class */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Passengers</label>
              <Select value={passengers.toString()} onValueChange={(value) => setPassengers(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select passengers" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Cabin Class</label>
              <Select value={cabinClass} onValueChange={setCabinClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select cabin class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium">Premium Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSearch}
          >
            <Plane className="mr-2 h-4 w-4" />
            Search Flights
          </Button>
        </div>
      </div>
    </div>
  );
} 