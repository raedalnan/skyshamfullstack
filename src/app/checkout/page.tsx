'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useSelectedFlight } from '@/context/SelectedFlightContext'
import { useRouter } from 'next/navigation'
import PaymentForm from '@/components/PaymentForm'

interface PassengerDetails {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  passport: string
}

interface PaymentDetails {
  cardNumber: string
  expiryDate: string
  cvv: string
  nameOnCard: string
}

export default function CheckoutPage() {
  const { selectedFlight } = useSelectedFlight()
  const router = useRouter()
  
  useEffect(() => {
    // Redirect if no flight is selected
    if (!selectedFlight) {
      router.push('/flights')
    }
  }, [selectedFlight, router])
  
  const [passengerDetails, setPassengerDetails] = useState<PassengerDetails>({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    passport: ''
  })

  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  })

  const [extras, setExtras] = useState({
    insurance: false,
    meal: false,
    extraBaggage: false
  })
  
  // Calculate total price
  const calculateTotal = () => {
    if (!selectedFlight) return 0
    
    let total = selectedFlight.price
    if (extras.insurance) total += 49
    if (extras.meal) total += 25
    if (extras.extraBaggage) total += 75
    
    return total
  }

  const handlePaymentSuccess = () => {
    console.log('Payment successful')
    // Additional processing can be done here if needed
  }
  
  // If no flight is selected, show loading or redirect
  if (!selectedFlight) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Redirecting to flight search...</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Flight Summary */}
          <Card className="p-6 lg:col-span-1">
            <h2 className="font-semibold text-xl mb-4">Flight Summary</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Outbound</p>
                <p className="font-medium">{selectedFlight.departure.airport} ({selectedFlight.departure.code}) → {selectedFlight.arrival.airport} ({selectedFlight.arrival.code})</p>
                <p className="text-sm">{selectedFlight.departure.time} - {selectedFlight.arrival.time}</p>
                <p className="text-sm text-gray-500">{selectedFlight.airline.name}</p>
              </div>
              <div className="border-t pt-4">
                <p className="font-medium">Total Price</p>
                <p className="text-2xl font-bold text-blue-600">${calculateTotal()}</p>
                <p className="text-xs text-gray-500">Including all taxes and fees</p>
              </div>
            </div>
          </Card>

          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Passenger Details */}
            <Card className="p-6">
              <h2 className="font-semibold text-xl mb-6">Passenger Details</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={passengerDetails.firstName}
                      onChange={(e) => setPassengerDetails({
                        ...passengerDetails,
                        firstName: e.target.value
                      })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={passengerDetails.lastName}
                      onChange={(e) => setPassengerDetails({
                        ...passengerDetails,
                        lastName: e.target.value
                      })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={passengerDetails.email}
                    onChange={(e) => setPassengerDetails({
                      ...passengerDetails,
                      email: e.target.value
                    })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={passengerDetails.phone}
                    onChange={(e) => setPassengerDetails({
                      ...passengerDetails,
                      phone: e.target.value
                    })}
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Extra Services */}
            <Card className="p-6">
              <h2 className="font-semibold text-xl mb-6">Extra Services</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="insurance"
                    checked={extras.insurance}
                    onCheckedChange={(checked: boolean | 'indeterminate') => setExtras({
                      ...extras,
                      insurance: checked === 'indeterminate' ? false : checked
                    })}
                  />
                  <div className="grid gap-1.5">
                    <Label htmlFor="insurance">Travel Insurance</Label>
                    <p className="text-sm text-gray-500">Add travel insurance for $49</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="meal"
                    checked={extras.meal}
                    onCheckedChange={(checked: boolean | 'indeterminate') => setExtras({
                      ...extras,
                      meal: checked === 'indeterminate' ? false : checked
                    })}
                  />
                  <div className="grid gap-1.5">
                    <Label htmlFor="meal">Special Meal</Label>
                    <p className="text-sm text-gray-500">Add a special meal for $25</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="extraBaggage"
                    checked={extras.extraBaggage}
                    onCheckedChange={(checked: boolean | 'indeterminate') => setExtras({
                      ...extras,
                      extraBaggage: checked === 'indeterminate' ? false : checked
                    })}
                  />
                  <div className="grid gap-1.5">
                    <Label htmlFor="extraBaggage">Extra Baggage</Label>
                    <p className="text-sm text-gray-500">Add an extra 23kg bag for $75</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Payment Details */}
            <PaymentForm
              totalAmount={calculateTotal()}
              onSuccess={handlePaymentSuccess}
            />
          </div>
        </div>
      </div>
    </main>
  )
} 