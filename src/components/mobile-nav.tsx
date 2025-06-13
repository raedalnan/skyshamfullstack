"use client";
import { NavLink } from "@/lib/types";
import { XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navLinks: NavLink[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels", href: "/hotels" },
  { label: "Flights", href: "/flights" },
];

export default function MobileNav({ onClose }: { onClose: () => void }) {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
    onClose();
  };

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
            <li key={link.href} className="text-center w-full py-2">
              <Link 
                className="font-open-sans text-xl" 
                href={link.href}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {isAuthenticated ? (
            <>
              <li className="text-center w-full py-2">
                <span className="font-open-sans text-xl text-gray-400">
                  Hello, {user?.name || user?.email?.split('@')[0]}
                </span>
              </li>
              <li className="text-center w-full py-2">
                <Link 
                  className="font-open-sans text-xl" 
                  href="/bookings"
                  onClick={onClose}
                >
                  Bookings
                </Link>
              </li>
              <li className="text-center w-full py-2">
                <button
                  onClick={handleLogout}
                  className="font-open-sans text-xl"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="text-center w-full py-2">
                <Link 
                  className="font-open-sans text-xl" 
                  href="/login"
                  onClick={onClose}
                >
                  Login
                </Link>
              </li>
              <li className="text-center w-full py-2">
                <Link 
                  className="font-open-sans text-xl" 
                  href="/signup"
                  onClick={onClose}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
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
