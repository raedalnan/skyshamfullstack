'use client';

import { NavLink } from "@/lib/types";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels", href: "/hotels" },
  { label: "Flights", href: "/flights" },
];

export default function Navigation() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8 items-center">
        {navLinks.map((link) => (
          
          <li key={link.href}>
            <Link
              className="cursor-pointer hover:text-primary"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
        {isAuthenticated ? (
          <>
            <li>
              
              <Link
                className="cursor-pointer hover:text-primary"
                href="/bookings"
              >
                Bookings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="cursor-pointer hover:text-primary"
              >
                Logout
              </button>
              
            </li>
            <li>
              <span className="text-sm text-gray-500">
                Hello, {user?.name || user?.email?.split('@')[0]}
              </span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login" className="cursor-pointer hover:text-primary">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-md border cursor-pointer hover:bg-yellow hover:text-white font-semibold transition duration-150 hover:border-transparent"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
