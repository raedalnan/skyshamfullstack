// Define flight data types
export interface Airline {
  name: string;
  logo: string;
}

export interface Airport {
  time: string;
  airport: string;
  code: string;
}

export interface Baggage {
  cabin: string;
  checked: string;
}

export interface Flight {
  id: string;
  airline: Airline;
  departure: Airport;
  arrival: Airport;
  duration: string;
  stops: number;
  price: number;
  baggage: Baggage;
  returnFlight?: Flight;
}

export interface FlightSearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate?: string;
  passengers: number;
  flightClass: string;
}

// Mock flight data
const mockFlights: Flight[] = [
  {
    id: '1dc677d3-a282-4d2c-8d5b-6204b2ff7c41',
    airline: {
      name: 'Emirates',
      logo: '/airlines/emirates.png'
    },
    departure: {
      time: '10:00',
      airport: 'Dubai International',
      code: 'DXB'
    },
    arrival: {
      time: '14:30',
      airport: 'Istanbul Airport',
      code: 'IST'
    },
    duration: '4h 30m',
    stops: 0,
    price: 1250,
    baggage: {
      cabin: '7kg',
      checked: '23kg'
    }
  },
  {
    id: '2fs677d3-b392-9d2c-7y5b-2204b2ff7c12',
    airline: {
      name: 'Turkish Airlines',
      logo: '/airlines/turkish.png'
    },
    departure: {
      time: '12:15',
      airport: 'Dubai International',
      code: 'DXB'
    },
    arrival: {
      time: '16:45',
      airport: 'Istanbul Airport',
      code: 'IST'
    },
    duration: '4h 30m',
    stops: 0,
    price: 1100,
    baggage: {
      cabin: '8kg',
      checked: '23kg'
    }
  },
  {
    id: '3ab687r3-c322-5d5c-8d2b-1104b2ff7d23',
    airline: {
      name: 'Qatar Airways',
      logo: '/airlines/qatar.png'
    },
    departure: {
      time: '08:45',
      airport: 'Dubai International',
      code: 'DXB'
    },
    arrival: {
      time: '15:30',
      airport: 'Istanbul Airport',
      code: 'IST'
    },
    duration: '6h 45m',
    stops: 1,
    price: 950,
    baggage: {
      cabin: '7kg',
      checked: '30kg'
    }
  },
  {
    id: '4cd123e3-d498-6f7g-9h1i-8234b2ff7j56',
    airline: {
      name: 'Etihad Airways',
      logo: '/airlines/etihad.png'
    },
    departure: {
      time: '16:20',
      airport: 'Dubai International',
      code: 'DXB'
    },
    arrival: {
      time: '20:45',
      airport: 'Istanbul Airport',
      code: 'IST'
    },
    duration: '4h 25m',
    stops: 0,
    price: 1350,
    baggage: {
      cabin: '7kg',
      checked: '25kg'
    }
  }
];

export async function searchFlights(params: FlightSearchParams): Promise<Flight[]> {
  // In a real API, we would use these parameters to filter flights
  // For mock purposes, we'll just simulate a delay and return all flights
  
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(mockFlights);
    }, 800);
  });
}

export async function getFlightById(id: string): Promise<Flight | null> {
  // In a real API, we would fetch this flight from a database
  const flight = mockFlights.find(flight => flight.id === id);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(flight || null);
    }, 300);
  });
}

// Common airport data for search suggestions
export const commonAirports = [
  { code: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'UAE' },
  { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul', country: 'Turkey' },
  { code: 'LHR', name: 'Heathrow', city: 'London', country: 'United Kingdom' },
  { code: 'JFK', name: 'John F. Kennedy', city: 'New York', country: 'USA' },
  { code: 'SIN', name: 'Changi Airport', city: 'Singapore', country: 'Singapore' },
  { code: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan' },
  { code: 'CDG', name: 'Charles de Gaulle', city: 'Paris', country: 'France' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany' },
]; 