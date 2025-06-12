import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flight Search | Skysham',
  description: 'Search and book flights to destinations worldwide with Skysham. Find the best deals on airline tickets.',
  openGraph: {
    title: 'Flight Search | Skysham',
    description: 'Search and book flights to destinations worldwide with Skysham. Find the best deals on airline tickets.',
    type: 'website',
  },
}

export default function FlightResultsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 