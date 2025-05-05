import { NavLink } from "@/lib/types";
import Link from "next/link";

const navLinks: NavLink[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels", href: "/hotels" },
  { label: "Flights", href: "/flights" },
  { label: "Bookings", href: "/bookings" },
];

export default function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="cursor-pointer hover:text-primary "
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <Link href="/login" className="cursor-pointer hover:text-primary ">
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4  py-2 rounded-md border cursor-pointer  hover:bg-yellow hover:text-white font-semibold transition duration-150 hover:border-transparent"
        >
          Sign Up
        </Link>
      </ul>
    </nav>
  );
}
