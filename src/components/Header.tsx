"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Location", href: "#location" },
    { name: "Hotels", href: "#hotels" },
    { name: "The Day", href: "#the-day" },
    { name: "FAQ", href: "#faq" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 z-50 w-full px-8 transition-all duration-300 ease-in-out",
          isScrolled
            ? "border-b border-stone-200/50 bg-white/80 py-3 shadow-md backdrop-blur-lg"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={clsx(
                      "text-base font-medium no-underline transition-colors hover:text-opacity-80",
                      isScrolled ? "text-stone-800" : "text-white"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={clsx(
                "rounded-md p-2 text-stone-800 transition-colors",
                isScrolled ? "text-stone-800" : "text-white"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        

<a
      href="#rsvp" 
      className="transform rounded-full bg-white px-6 py-2 text-base font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105"
    >
         I&apos;m coming!
    </a>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="rounded-md p-2 text-stone-800"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className="block px-4 py-2 text-lg font-medium text-stone-800 hover:bg-stone-100"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;