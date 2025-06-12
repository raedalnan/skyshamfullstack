'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FlightResults from '@/components/flights/FlightResults';
import FlightFilters from '@/components/flights/FlightFilters';

export default function FlightResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const departureDate = searchParams.get('departureDate') ? new Date(searchParams.get('departureDate')!) : null;
  const returnDate = searchParams.get('returnDate') ? new Date(searchParams.get('returnDate')!) : null;
  const tripType = searchParams.get('tripType') || 'oneway';
  const passengers = parseInt(searchParams.get('passengers') || '1');
  const cabinClass = searchParams.get('cabinClass') || 'economy';

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-4">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Search
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Search Parameters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-500">From</p>
              <p className="font-medium">{from}</p>
            </div>
            <div>
              <p className="text-gray-500">To</p>
              <p className="font-medium">{to}</p>
            </div>
            <div>
              <p className="text-gray-500">Departure</p>
              <p className="font-medium">{departureDate?.toLocaleDateString()}</p>
            </div>
            {tripType === 'roundtrip' && (
              <div>
                <p className="text-gray-500">Return</p>
                <p className="font-medium">{returnDate?.toLocaleDateString()}</p>
              </div>
            )}
          </div>
        </div>

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
      </div>
    </main>
  );
} 