'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plane, Clock, Luggage, Info, ArrowLeft } from 'lucide-react'
import { Flight, getFlightById } from '@/lib/flightAPI'
import { useSelectedFlight } from '@/context/SelectedFlightContext'

type FlightDetailsClientProps = {
  flightId: string;
}

export default function FlightDetailsClient({ flightId }: FlightDetailsClientProps) {
  const [flight, setFlight] = useState<Flight | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { setSelectedFlight } = useSelectedFlight()

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const flightData = await getFlightById(flightId)
        setFlight(flightData)
      } catch (error) {
        console.error('Error fetching flight:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFlight()
  }, [flightId])

  const handleBookFlight = () => {
    if (flight) {
      setSelectedFlight(flight)
      router.push('/checkout')
    }
  }

  if (loading || !flight) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => router.push('/flights')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to search results
          </Button>
        </div>

        <Card className="p-6 mb-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={flight.airline.logo}
              alt={flight.airline.name}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">{flight.airline.name}</h1>
              <p className="text-sm text-gray-500">Flight ID: {flight.id}</p>
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
                  <p className="text-sm text-gray-500">Non-refundable</p>
                </div>
                <div>
                  <p className="font-medium">Price</p>
                  <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
                  <p className="text-sm text-gray-500">Including all taxes and fees</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Book Now Button */}
          <div className="flex justify-end">
            <Button 
              onClick={handleBookFlight}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
            >
              Book Now
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
} 