'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plane, Clock, Luggage } from 'lucide-react'
import { Flight } from '@/lib/flightAPI'
import { useRouter } from 'next/navigation'
import { useSelectedFlight } from '@/context/SelectedFlightContext'

interface FlightCardProps {
  flight: Flight
}

export default function FlightCard({ flight }: FlightCardProps) {
  const router = useRouter()
  const { setSelectedFlight } = useSelectedFlight()

  const handleViewDetails = () => {
    router.push(`/flights/${flight.id}`)
  }

  const handleSelectFlight = () => {
    setSelectedFlight(flight)
    router.push('/checkout')
  }

  return (
    <Card className="p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Airline Info */}
        <div className="flex items-center space-x-3">
          <img
            src={flight.airline.logo}
            alt={flight.airline.name}
            className="w-8 h-8 object-contain"
          />
          <span className="font-medium">{flight.airline.name}</span>
        </div>

        {/* Flight Times */}
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-lg font-semibold">{flight.departure.time}</div>
            <div className="text-sm text-gray-500">{flight.departure.code}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-500">{flight.duration}</div>
            <div className="relative w-24 h-px bg-gray-300">
              <Plane className="absolute -top-2 right-0 w-4 h-4 text-blue-600 transform rotate-90" />
            </div>
            <div className="text-sm text-gray-500">
              {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">{flight.arrival.time}</div>
            <div className="text-sm text-gray-500">{flight.arrival.code}</div>
          </div>
        </div>

        {/* Flight Details */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{flight.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Luggage className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{flight.baggage.checked}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex flex-col items-end space-y-2">
          <div className="text-2xl font-bold text-blue-600">
            ${flight.price}
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={handleViewDetails}
            >
              View Details
            </Button>
            <Button variant="default" onClick={handleSelectFlight}>
              Select Flight
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
} 