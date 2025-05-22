import FlightDetailsClient from '@/components/FlightDetailsClient'
import { getFlightById } from '@/lib/flightAPI'
import { notFound } from 'next/navigation'

export default async function FlightDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  try {
    const flight = await getFlightById(params.id)
    if (!flight) {
      notFound()
    }
    return <FlightDetailsClient flightId={params.id} />
  } catch (error) {
    console.error('Error fetching flight:', error)
    notFound()
  }
} 