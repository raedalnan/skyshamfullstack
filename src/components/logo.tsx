import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="relative aspect-square block w-24 h-24">
      <Image fill src="/logo.png" alt={""} />
    </Link>
  );
}
