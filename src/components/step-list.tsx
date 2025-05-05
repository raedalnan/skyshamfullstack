import { Step } from "@/lib/types";
import { MdFlightTakeoff, MdLocationOn, MdPayment } from "react-icons/md";
import StepCard from "./step-card";

const steps: Step[] = [
  {
    id: 1,
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: MdLocationOn,
  },
  {
    id: 2,
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: MdPayment,
  },
  {
    id: 3,
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: MdFlightTakeoff,
  },
];

export default function StepList() {
  const bgColors = ["bg-yellow", "bg-primary", "bg-dark-green"];

  return (
    <div className="flex gap-6 flex-col">
      {steps.map((item, index) => {
        const bg = bgColors[index % bgColors.length];
        return <StepCard key={item.id} step={item} className={bg} />;
      })}
    </div>
  );
}
