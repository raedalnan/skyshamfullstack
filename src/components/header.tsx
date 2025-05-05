"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Logo from "./logo";
import MobileMenuToggle from "./mobile-menu-toggle";
import MobileNav from "./mobile-nav";
import Navigation from "./navigation";
import Wrapper from "./wrapper";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="py-6">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
          <MobileMenuToggle onToggle={handleToggle} />
        </div>
      </Wrapper>
      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && <MobileNav onClose={handleClose} />}
      </AnimatePresence>
    </header>
  );
}
