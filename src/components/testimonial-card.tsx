import { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card bg-white mt-16 ml-10 shadow-blue-300 shadow p-8 text-dark rounded-lg relative",
        className
      )}
    >
      <div className="w-fit h-fit absolute inset-0 -top-10 -left-10 ">
        <Image
          height={70}
          width={70}
          className=" w-[70px] h-[70px] object-cover rounded-full"
          src={testimonial.image}
          alt={""}
        />
      </div>
      <p className=" text-dark leading-[1.6]">{testimonial.message}</p>
      <h3 className="font-bold  text-lg mt-9 ">{testimonial.name}</h3>
      <p className="text-sm mt-1">{testimonial.location}</p>
    </div>
  );
}
