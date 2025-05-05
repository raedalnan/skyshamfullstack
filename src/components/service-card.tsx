import { Service } from "@/lib/types";
import Image from "next/image";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="cursor-pointer p-10   hover:shadow-xl transition rounded-md hover:bg-white text-center">
      <div className="relative h-24 w-24 mx-auto">
        <Image className="object-contain" fill src={service.icon} alt={""} />
      </div>
      <h3 className="mt-8 font-poppins text-xl font-semibold capitalize">
        {service.title}
      </h3>
      <p
        className="leading-[1.6] mt-4
   text-dark "
      >
        {service.description}
      </p>
    </div>
  );
}
