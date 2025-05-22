"use client";
import { NavLink } from "@/lib/types";
import { XIcon } from "lucide-react";
import { motion } from "framer-motion";

import Link from "next/link";

const navLinks: NavLink[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels", href: "/hotels" },
  { label: "Flights", href: "/flights" },
  { label: "Bookings", href: "/bookings" },
];
export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-10 bg-black/95 w-full h-screen text-white"
    >
      <div className="">
        <ul className="mt-12">
          {navLinks.map((link) => (
            <li key={link.href} className="text-center w-full py-2 ">
              <Link className="font-open-sans text-xl" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <XIcon className="" />
        </div>
      </div>
    </motion.nav>
  );
}
