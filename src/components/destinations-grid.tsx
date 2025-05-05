import { Destination } from "@/lib/types";
import DestinationCard from "./destination-card";

const topDestinations: Destination[] = [
  {
    id: 1,
    location: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
    image: "/italy.jpg",
  },
  {
    id: 2,
    location: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
    image: "/london.jpg",
  },
  {
    id: 3,
    location: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
    image: "/europe.jpg",
  },
];

export default function DestinationGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {topDestinations.map((item) => (
        <DestinationCard key={item.id} destination={item} />
      ))}
    </div>
  );
}
