import { Service } from "@/lib/types";
import ServiceCard from "./service-card";

const services: Service[] = [
  {
    id: 1,
    icon: "/category-1.png",
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: 2,
    icon: "/category-2.png",
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    id: 3,
    icon: "/category-3.png",
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    id: 4,
    icon: "/category-4.png",
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers",
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((item) => (
        <ServiceCard key={item.id} service={item} />
      ))}
    </div>
  );
}
