import { Metadata } from 'next'
import SearchBar from '@/components/flights/SearchBar'
import FlightResults from '@/components/flights/FlightResults'
import FlightFilters from '@/components/flights/FlightFilters'

export const metadata: Metadata = {
  title: 'Flight Search | Skysham',
  description: 'Search and book flights to destinations worldwide with Skysham. Find the best deals on airline tickets.',
  openGraph: {
    title: 'Flight Search | Skysham',
    description: 'Search and book flights to destinations worldwide with Skysham. Find the best deals on airline tickets.',
    type: 'website',
  },
}

export default function FlightSearchPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Find Your Perfect Flight
          </h1>
          <SearchBar />
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Left Sidebar on Desktop */}
          <div className="w-full lg:w-1/4">
            <FlightFilters />
          </div>

          {/* Flight Results - Main Content */}
          <div className="w-full lg:w-3/4">
            <FlightResults />
          </div>
        </div>
      </section>
    </main>
  )
} 