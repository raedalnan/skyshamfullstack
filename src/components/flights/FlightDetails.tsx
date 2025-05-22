'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plane, Clock, Luggage, Info } from 'lucide-react'
import { Flight } from '@/lib/flightAPI'
import { useSelectedFlight } from '@/context/SelectedFlightContext'
import { useRouter } from 'next/navigation'

interface FlightDetailsProps {
  flightId: string
  onClose: () => void
}

export default function FlightDetails({ flightId, onClose }: FlightDetailsProps) {
  const { selectedFlight, setSelectedFlight } = useSelectedFlight()
  const router = useRouter()
  
  // If no flight is selected or IDs don't match, close the modal
  if (!selectedFlight || selectedFlight.id !== flightId) {
    onClose()
    return null
  }
  
  const flight = selectedFlight
  
  const handleBooking = () => {
    router.push('/checkout')
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-3xl bg-white p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={flight.airline.logo}
            alt={flight.airline.name}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="text-xl font-semibold">{flight.airline.name}</h2>
            <p className="text-sm text-gray-500">Flight Details</p>
          </div>
        </div>

        {/* Flight Route */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <p className="text-2xl font-bold">{flight.departure.time}</p>
            <p className="font-medium">{flight.departure.code}</p>
            <p className="text-sm text-gray-500">{flight.departure.airport}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-sm text-gray-500 mb-2">{flight.duration}</div>
            <div className="relative w-full">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300"></div>
              <Plane className="relative mx-auto w-5 h-5 text-blue-600 transform rotate-90" />
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {flight.stops === 0 ? 'Direct Flight' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold">{flight.arrival.time}</p>
            <p className="font-medium">{flight.arrival.code}</p>
            <p className="text-sm text-gray-500">{flight.arrival.airport}</p>
          </div>
        </div>

        {/* Flight Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Flight Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">Duration</p>
                  <p className="text-sm text-gray-500">{flight.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Luggage className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">Baggage</p>
                  <p className="text-sm text-gray-500">
                    Cabin: {flight.baggage.cabin} • Checked: {flight.baggage.checked}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Info className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">Class</p>
                  <p className="text-sm text-gray-500">Economy</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-4">Fare Information</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Refundable</p>
                <p className="text-sm text-gray-500">
                  Non-refundable
                </p>
              </div>
              <div>
                <p className="font-medium">Price</p>
                <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
                <p className="text-sm text-gray-500">Including all taxes and fees</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleBooking} className="bg-blue-600 hover:bg-blue-700 text-white">
            Continue to Book
          </Button>
        </div>
      </Card>
    </div>
  )
} 