'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { useRouter } from 'next/navigation'
import { useSelectedFlight } from '@/context/SelectedFlightContext'

interface PaymentFormProps {
  totalAmount: number
  onSuccess: () => void
}

export default function PaymentForm({ totalAmount, onSuccess }: PaymentFormProps) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { selectedFlight } = useSelectedFlight()

  const [formData, setFormData] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsProcessing(true)

    try {
      // Validation
      if (!formData.cardNumber || formData.cardNumber.length < 16) {
        throw new Error('Please enter a valid card number')
      }

      if (!formData.expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        throw new Error('Please enter a valid expiry date (MM/YY)')
      }

      if (!formData.cvv || formData.cvv.length < 3) {
        throw new Error('Please enter a valid security code')
      }

      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Success - in a real app we would call an API endpoint here
      onSuccess()

      // Navigate to confirmation page
      router.push('/checkout/confirmation')
    } catch (err: any) {
      setError(err.message || 'Payment processing failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-xl font-bold mb-4">Payment Details</h3>
        
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Payment Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div>
            <Label htmlFor="nameOnCard">Name on Card</Label>
            <Input
              id="nameOnCard"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              minLength={16}
              maxLength={19}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">Security Code</Label>
              <Input
                id="cvv"
                name="cvv"
                type="password"
                placeholder="***"
                value={formData.cvv}
                onChange={handleChange}
                maxLength={4}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="billingAddress">Billing Address</Label>
            <Input
              id="billingAddress"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP/Postal Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="pt-2">
          <p className="text-sm text-gray-500 mb-4">
            Your payment information is secure. We use encryption to protect your data.
          </p>
          
          <div className="flex items-center justify-between">
            <div className="font-medium">
              Total Amount: <span className="text-xl font-bold text-blue-600">${totalAmount}</span>
            </div>
            <Button 
              type="submit" 
              disabled={isProcessing}
              className="min-w-[150px]"
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Complete Payment'
              )}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
} 