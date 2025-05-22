'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { Flight } from '@/lib/flightAPI'

interface SelectedFlightContextType {
  selectedFlight: Flight | null
  setSelectedFlight: (flight: Flight | null) => void
}

const SelectedFlightContext = createContext<SelectedFlightContextType | undefined>(undefined)

export function SelectedFlightProvider({ children }: { children: ReactNode }) {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)

  return (
    <SelectedFlightContext.Provider value={{ selectedFlight, setSelectedFlight }}>
      {children}
    </SelectedFlightContext.Provider>
  )
}

export function useSelectedFlight() {
  const context = useContext(SelectedFlightContext)
  if (context === undefined) {
    throw new Error('useSelectedFlight must be used within a SelectedFlightProvider')
  }
  return context
} 