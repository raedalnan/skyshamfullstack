import { IconItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { FaRegBuilding, FaRegMap } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import IconGroup from "./icon-group";

const iconItems: IconItem[] = [
  { id: 1, icon: ImLeaf, href: "/leaf-page" },
  { id: 2, icon: FaRegMap, href: "/map-page" },
  { id: 3, icon: IoIosSend, href: "/send-page" },
];

export default function TripCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card p-6 shadow-blue-100 shadow-xl  md:min-w-[370px]  rounded-lg",
        className
      )}
    >
      <div className="relative rounded-lg overflow-hidden h-[160px] w-full aspect-square">
        <Image className="object-cover" fill src="/greece.jpg" alt={""} />
      </div>
      <h3 className="mt-6 text-lg font-medium text-black">Trip To Greece</h3>
      <p className="text-dark font-medium mt-3 flex gap-4 items-center">
        14-29 June |<span>by Robbin joseph</span>
      </p>

      <IconGroup className="mt-5" items={iconItems} />
      <div className="flex justify-between items-center  mt-8 ">
        <p className="flex gap-2 items-center text-dark font-medium">
          <FaRegBuilding />
          24 people going
        </p>
        <button className="">
          <HeartIcon className="text-[#4152CA]" />
        </button>
      </div>
    </div>
  );
}
