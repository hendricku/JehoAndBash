"use client"; // This component uses client-side hooks, so this directive is essential

import React, { useState, useEffect } from "react";
import clsx from "clsx"; // Import the clsx utility

const Header: React.FC = () => {
  // State to track whether the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to add and clean up a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if user has scrolled more than 10px, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once

  const navLinks = [
    { name: "Location", href: "#location" },
    { name: "Hotels", href: "#hotels" },
    { name: "The Day", href: "#the-day" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full px-8 transition-all duration-300 ease-in-out",
        // Apply these classes ONLY when isScrolled is true
        isScrolled
          ? "border-b border-stone-200/50 bg-white/80 py-3 shadow-md backdrop-blur-lg"
          : "bg-transparent py-4" // Otherwise, be transparent
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <nav>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={clsx(
                    "text-base font-medium no-underline transition-colors hover:text-opacity-80",
                    isScrolled ? "text-stone-800" : "text-white" // Invert color on scroll
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#rsvp"
          className="transform rounded-full bg-white px-6 py-2 text-base font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105"
        >
          I&apos;m coming!
        </a>
      </div>
    </header>
  );
};

export default Header;