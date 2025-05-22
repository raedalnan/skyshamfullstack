'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, CalendarCheck, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSelectedFlight } from '@/context/SelectedFlightContext'
import { format } from 'date-fns'

export default function ConfirmationPage() {
  const router = useRouter()
  const { selectedFlight, setSelectedFlight } = useSelectedFlight()
  const [bookingRef, setBookingRef] = useState('')
  
  useEffect(() => {
    // Generate a random booking reference
    const generateBookingRef = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      let result = ''
      for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return result
    }
    
    setBookingRef(generateBookingRef())
    
    // Clear selected flight after a few seconds to simulate page refresh
    const timer = setTimeout(() => {
      setSelectedFlight(null)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [setSelectedFlight])
  
  // If no flight is selected, likely user navigated here directly
  if (!selectedFlight) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <Card className="max-w-md w-full p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Booking Not Found</h1>
          <p className="mb-6">We couldn't find a booking confirmation. Please start a new booking.</p>
          <Button onClick={() => router.push('/')}>Return to Home</Button>
        </Card>
      </div>
    )
  }

  // Format today's date for the booking date
  const bookingDate = format(new Date(), 'MMMM d, yyyy')
  
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Booking Confirmed!</h1>
          <p className="text-gray-500 mt-2">Your flight has been successfully booked.</p>
        </div>

        {/* Booking Reference */}
        <Card className="p-6 mb-6 text-center">
          <h2 className="text-lg text-gray-600 mb-2">Booking Reference</h2>
          <p className="text-3xl font-bold text-blue-600 tracking-wider">{bookingRef}</p>
          <p className="text-sm text-gray-500 mt-2">Please save this reference for your records</p>
        </Card>

        {/* Flight Details */}
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-start border-b pb-4 mb-4">
            <div>
              <h2 className="font-semibold text-lg">Flight Details</h2>
              <p className="text-sm text-gray-500">Booking Date: {bookingDate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-lg font-bold text-blue-600">${selectedFlight.price}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Airline</p>
              <div className="flex items-center mt-1">
                <img 
                  src={selectedFlight.airline.logo} 
                  alt={selectedFlight.airline.name} 
                  className="h-6 w-6 mr-2"
                />
                <p className="font-medium">{selectedFlight.airline.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">From</p>
                <p className="font-medium">{selectedFlight.departure.airport} ({selectedFlight.departure.code})</p>
                <p className="text-sm">{selectedFlight.departure.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">To</p>
                <p className="font-medium">{selectedFlight.arrival.airport} ({selectedFlight.arrival.code})</p>
                <p className="text-sm">{selectedFlight.arrival.time}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Flight Duration</p>
              <p className="font-medium">{selectedFlight.duration}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Baggage</p>
              <p className="font-medium">Cabin: {selectedFlight.baggage.cabin} • Checked: {selectedFlight.baggage.checked}</p>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="p-6 mb-6">
          <h2 className="font-semibold text-lg mb-4">Next Steps</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Check Your Email</p>
                <p className="text-sm text-gray-500">We've sent a confirmation email with your e-ticket.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CalendarCheck className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Online Check-in</p>
                <p className="text-sm text-gray-500">Check in online 24-48 hours before your flight departs.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button variant="outline" onClick={() => window.print()}>
            Print Confirmation
          </Button>
          <Button onClick={() => router.push('/')}>
            Return to Home
          </Button>
        </div>
      </div>
    </main>
  )
} 