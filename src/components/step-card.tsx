import { Step } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function StepCard({
  step,
  className,
}: {
  step: Step;
  className?: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className={cn(
          "text-white bg-yellow w-fit h-fit p-4 rounded-lg",
          className
        )}
      >
        <step.icon className="text-4xl " />
      </div>
      <div>
        <h5 className="font-poppins font-bold text-xl text-dark">
          {step.title}
        </h5>
        <p className="mt-1 leading-[1.6] text-dark">{step.description}</p>
      </div>
    </div>
  );
}
