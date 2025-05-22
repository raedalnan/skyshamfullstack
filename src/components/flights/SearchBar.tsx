'use client'

import { useState, useEffect } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, Users, Plane } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { commonAirports, FlightSearchParams } from '@/lib/flightAPI'

// Define airport type for autocomplete
interface Airport {
  code: string
  name: string
  city: string
  country: string
}

interface SearchFormData {
  origin: string
  destination: string
  departureDate: Date | undefined
  returnDate: Date | undefined
  passengers: number
  travelClass: string
}

export default function SearchBar() {
  const router = useRouter()
  const [formData, setFormData] = useState<SearchFormData>({
    origin: '',
    destination: '',
    departureDate: new Date(),
    returnDate: undefined,
    passengers: 1,
    travelClass: 'economy'
  })

  // State for airport autocomplete
  const [originSuggestions, setOriginSuggestions] = useState<Airport[]>([])
  const [destSuggestions, setDestSuggestions] = useState<Airport[]>([])
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)

  // Filter airports based on input
  const filterAirports = (input: string): Airport[] => {
    if (!input || input.length < 2) return []
    
    const filtered = commonAirports.filter(airport => 
      airport.code.toLowerCase().includes(input.toLowerCase()) ||
      airport.name.toLowerCase().includes(input.toLowerCase()) ||
      airport.city.toLowerCase().includes(input.toLowerCase()) ||
      airport.country.toLowerCase().includes(input.toLowerCase())
    )
    
    return filtered.slice(0, 5) // Limit to 5 results
  }

  // Update origin suggestions when typing
  useEffect(() => {
    setOriginSuggestions(filterAirports(formData.origin))
  }, [formData.origin])

  // Update destination suggestions when typing
  useEffect(() => {
    setDestSuggestions(filterAirports(formData.destination))
  }, [formData.destination])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create search params object
    const searchParams: FlightSearchParams = {
      from: formData.origin,
      to: formData.destination,
      departDate: formData.departureDate ? formData.departureDate.toISOString() : new Date().toISOString(),
      returnDate: formData.returnDate ? formData.returnDate.toISOString() : undefined,
      passengers: formData.passengers,
      flightClass: formData.travelClass
    }
    
    // Navigate to flights page with search params
    router.push('/flights')
  }

  // Select airport from suggestions
  const selectOriginAirport = (airport: Airport) => {
    setFormData({ ...formData, origin: `${airport.city} (${airport.code})` })
    setShowOriginSuggestions(false)
  }

  const selectDestAirport = (airport: Airport) => {
    setFormData({ ...formData, destination: `${airport.city} (${airport.code})` })
    setShowDestSuggestions(false)
  }

  const formatDate = (date: Date | undefined): string => {
    if (!date) return 'Pick a date'
    try {
      return format(date, 'PPP')
    } catch (error) {
      console.error('Error formatting date:', error)
      return 'Invalid date'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Origin */}
        <div className="space-y-2 relative">
          <label className="block text-sm font-medium text-gray-700">From</label>
          <div className="relative">
            <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="City or Airport"
              className="pl-10"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              onFocus={() => setShowOriginSuggestions(true)}
              onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)}
              required
            />
          </div>
          
          {/* Origin suggestions */}
          {showOriginSuggestions && originSuggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto">
              {originSuggestions.map((airport) => (
                <div
                  key={airport.code}
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                  onMouseDown={() => selectOriginAirport(airport)}
                >
                  <div className="font-medium">{airport.city} ({airport.code})</div>
                  <div className="text-sm text-gray-500">{airport.name}, {airport.country}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Destination */}
        <div className="space-y-2 relative">
          <label className="block text-sm font-medium text-gray-700">To</label>
          <div className="relative">
            <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400 rotate-90" />
            <Input
              type="text"
              placeholder="City or Airport"
              className="pl-10"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              onFocus={() => setShowDestSuggestions(true)}
              onBlur={() => setTimeout(() => setShowDestSuggestions(false), 200)}
              required
            />
          </div>
          
          {/* Destination suggestions */}
          {showDestSuggestions && destSuggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto">
              {destSuggestions.map((airport) => (
                <div
                  key={airport.code}
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                  onMouseDown={() => selectDestAirport(airport)}
                >
                  <div className="font-medium">{airport.city} ({airport.code})</div>
                  <div className="text-sm text-gray-500">{airport.name}, {airport.country}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Departure Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Departure</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formatDate(formData.departureDate)}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.departureDate}
                onSelect={(date: Date | undefined) => setFormData({ ...formData, departureDate: date })}
                disabled={(date: Date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Return Date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Return (Optional)</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formatDate(formData.returnDate)}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.returnDate}
                onSelect={(date: Date | undefined) => setFormData({ ...formData, returnDate: date })}
                disabled={(date: Date) => date < (formData.departureDate || new Date())}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Passengers */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Passengers</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="number"
              min="1"
              max="9"
              className="pl-10"
              value={formData.passengers}
              onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
              required
            />
          </div>
        </div>

        {/* Travel Class */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Class</label>
          <Select
            value={formData.travelClass}
            onValueChange={(value: string) => setFormData({ ...formData, travelClass: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
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

      {/* Search Button */}
      <div className="mt-6">
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Search Flights
        </Button>
      </div>
      
      {/* Popular Routes */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 mb-2">Popular Routes:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { from: 'Dubai', to: 'London' },
            { from: 'New York', to: 'Paris' },
            { from: 'Singapore', to: 'Tokyo' },
          ].map((route, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm"
              onClick={() => setFormData({
                ...formData,
                origin: route.from,
                destination: route.to
              })}
              className="text-xs"
            >
              {route.from} → {route.to}
            </Button>
          ))}
        </div>
      </div>
    </form>
  )
} 