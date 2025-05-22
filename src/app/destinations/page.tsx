'use client';

import { useState } from 'react';
import { destinationsByMonth } from './destinationsByMonth';
import { DestinationCard } from './components/DestinationCard';
import { FilmStripSlider } from './components/FilmStripSlider';
import { DestinationModal } from './components/DestinationModal';

export default function DestinationsPage() {
  const months = Object.keys(destinationsByMonth);
  const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth()]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<null | {
    name: string;
    image: string;
    details: string;
  }>(null);

  // Filter destinations based on search query
  const filteredDestinations = destinationsByMonth[selectedMonth].filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Film strip slider */}
        <FilmStripSlider
          months={months}
          selectedMonth={selectedMonth}
          onMonthSelect={setSelectedMonth}
        />
        <h1 className="m-8 text-center text-4xl font-bold text-gray-900">
          Travel Destinations
        </h1>


        {/* Search bar */}
        <div className="my-8">
          <div className="relative mx-auto max-w-md">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-2 border-gray-200 px-6 py-3 pr-12 text-gray-700 shadow-sm transition-colors focus:border-blue-500 focus:outline-none"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>
        </div>

        {/* Destinations grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              image={destination.image}
              teaser={destination.teaser}
              onViewDetails={() => setSelectedDestination(destination)}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredDestinations.length === 0 && (
          <div className="mt-8 text-center text-gray-500">
            No destinations found for your search.
          </div>
        )}

        {/* Modal */}
        <DestinationModal
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          destination={selectedDestination}
        />
      </div>
    </main>
  );
}
