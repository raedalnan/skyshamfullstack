'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Flight, searchFlights, FlightSearchParams } from '@/lib/flightAPI'
import { useRouter } from 'next/navigation'
import { useSelectedFlight } from '@/context/SelectedFlightContext'
import FlightCard from '@/components/FlightCard'

export default function FlightResults() {
  const [sortBy, setSortBy] = useState('price')
  const [originalFlights, setOriginalFlights] = useState<Flight[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { setSelectedFlight } = useSelectedFlight()

  useEffect(() => {
    // In a real app, we would get these from URL params or context
    const defaultSearchParams: FlightSearchParams = {
      from: 'DXB',
      to: 'IST',
      departDate: new Date().toISOString(),
      passengers: 1,
      flightClass: 'Economy'
    }

    const fetchFlights = async () => {
      setLoading(true)
      try {
        const flightData = await searchFlights(defaultSearchParams)
        setOriginalFlights(flightData)
      } catch (error) {
        console.error('Error fetching flights:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFlights()
  }, [])

  // Use useMemo to sort flights without causing re-renders
  const sortedFlights = useMemo(() => {
    const sorted = [...originalFlights]
    
    switch (sortBy) {
      case 'price':
        return sorted.sort((a, b) => a.price - b.price)
      case 'duration':
        return sorted.sort((a, b) => a.duration.localeCompare(b.duration))
      case 'departure':
        return sorted.sort((a, b) => a.departure.time.localeCompare(b.departure.time))
      default:
        return sorted
    }
  }, [originalFlights, sortBy])

  const handleSort = (value: string) => {
    setSortBy(value)
  }

  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight)
    router.push('/checkout')
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Results Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {sortedFlights.length} flights found
        </h2>
        <Select value={sortBy} onValueChange={handleSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Lowest price</SelectItem>
            <SelectItem value="duration">Shortest duration</SelectItem>
            <SelectItem value="departure">Earliest departure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Flight Cards */}
      <div className="space-y-4">
        {sortedFlights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  )
} 