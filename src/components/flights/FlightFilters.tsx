'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface FilterState {
  priceRange: [number, number]
  stops: string[]
  airlines: string[]
  departureTime: [number, number]
  arrivalTime: [number, number]
  baggage: boolean
}

const initialFilters: FilterState = {
  priceRange: [0, 2000],
  stops: [],
  airlines: [],
  departureTime: [0, 24],
  arrivalTime: [0, 24],
  baggage: false
}

const airlines = [
  { id: 'emirates', name: 'Emirates' },
  { id: 'turkish', name: 'Turkish Airlines' },
  { id: 'qatar', name: 'Qatar Airways' },
  { id: 'etihad', name: 'Etihad Airways' }
]

const stopOptions = [
  { id: 'direct', name: 'Direct' },
  { id: '1stop', name: '1 Stop' },
  { id: '2stops', name: '2+ Stops' }
]

export default function FlightFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)

  const handlePriceChange = (value: [number, number]) => {
    setFilters({ ...filters, priceRange: value })
  }

  const handleStopsChange = (stopId: string) => {
    const newStops = filters.stops.includes(stopId)
      ? filters.stops.filter(id => id !== stopId)
      : [...filters.stops, stopId]
    setFilters({ ...filters, stops: newStops })
  }

  const handleAirlineChange = (airlineId: string) => {
    const newAirlines = filters.airlines.includes(airlineId)
      ? filters.airlines.filter(id => id !== airlineId)
      : [...filters.airlines, airlineId]
    setFilters({ ...filters, airlines: newAirlines })
  }

  const formatTime = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`
  }

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
            max={2000}
            step={50}
            onValueChange={handlePriceChange}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Stops</h3>
        <div className="space-y-2">
          {stopOptions.map((stop) => (
            <div key={stop.id} className="flex items-center space-x-2">
              <Checkbox
                id={`stop-${stop.id}`}
                checked={filters.stops.includes(stop.id)}
                onCheckedChange={() => handleStopsChange(stop.id)}
              />
              <Label htmlFor={`stop-${stop.id}`}>{stop.name}</Label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Airlines</h3>
        <div className="space-y-2">
          {airlines.map((airline) => (
            <div key={airline.id} className="flex items-center space-x-2">
              <Checkbox
                id={`airline-${airline.id}`}
                checked={filters.airlines.includes(airline.id)}
                onCheckedChange={() => handleAirlineChange(airline.id)}
              />
              <Label htmlFor={`airline-${airline.id}`}>{airline.name}</Label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Departure Time</h3>
        <div className="px-2">
          <Slider
            defaultValue={[filters.departureTime[0], filters.departureTime[1]]}
            max={24}
            step={1}
            onValueChange={(value: [number, number]) => setFilters({ ...filters, departureTime: value })}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{formatTime(filters.departureTime[0])}</span>
            <span>{formatTime(filters.departureTime[1])}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Arrival Time</h3>
        <div className="px-2">
          <Slider
            defaultValue={[filters.arrivalTime[0], filters.arrivalTime[1]]}
            max={24}
            step={1}
            onValueChange={(value: [number, number]) => setFilters({ ...filters, arrivalTime: value })}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{formatTime(filters.arrivalTime[0])}</span>
            <span>{formatTime(filters.arrivalTime[1])}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="baggage"
            checked={filters.baggage}
            onCheckedChange={(checked: boolean) => setFilters({ ...filters, baggage: checked })}
          />
          <Label htmlFor="baggage">Include checked baggage</Label>
        </div>
      </Card>
    </div>
  )
} 