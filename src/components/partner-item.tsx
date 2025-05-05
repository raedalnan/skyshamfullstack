import { Partner } from "@/lib/types";
import Image from "next/image";

export default function PartnerItem({ partner }: { partner: Partner }) {
  return (
    <div className="w-24 h-24 relative">
      <Image className="object-contain" fill src={partner.logo} alt={""} />
    </div>
  );
}
