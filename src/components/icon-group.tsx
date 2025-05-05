import { IconItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

type IconGroupProps = {
  items: IconItem[];
  className?: string;
};

const IconGroup = ({ items, className }: IconGroupProps) => {
  return (
    <div className={cn("flex gap-4 items-center", className)}>
      {items.map(({ id, icon: Icon, href }) => (
        <Link
          key={id}
          href={href}
          className="group hover:bg-primary hover:text-white  bg-[#F5F5F5] w-fit p-4 rounded-full h-fit"
        >
          <Icon className="text-[#9CA0B0] group-hover:text-white" />
        </Link>
      ))}
    </div>
  );
};

export default IconGroup;
