import { Destination } from "@/lib/types";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <div className="cursor-pointer shadow-xl hover:shadow-2xl rounded-md overflow-hidden relative h-[457px]">
      <Image
        className="object-cover z-0"
        fill
        src={destination.image}
        alt={""}
      />
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pt-4 pb-10 text-dark bg-white">
        <h5 className="flex justify-between font-poppins text-lg items-center">
          {destination.location}
          <span> {destination.price}</span>
        </h5>

        <p className="mt-5 flex gap-2 items-center capitalize text-lg">
          <FaLocationArrow className="text-black" />
          {destination.duration}
        </p>
      </div>
    </div>
  );
}
