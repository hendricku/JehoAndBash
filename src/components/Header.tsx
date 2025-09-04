"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

// --- Animation Variants for the Beautiful Mobile Menu Links ---
const menuContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This creates the beautiful staggered effect
      delayChildren: 0.2,
    },
  },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Professional touch: Prevent body from scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Location", href: "#location" },
    { name: "Story", href: "#story" },
    { name: "Entourage", href: "#entourage" },
    { name: "Verse", href: "#verse" },
    { name: "FAQ", href: "#faq" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 z-50 w-full px-4 transition-all duration-300 ease-in-out md:px-8",
          isScrolled
            ? "border-b border-stone-200/50 bg-white/80 py-3 shadow-md backdrop-blur-lg"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className={clsx("font-serif text-2xl font-bold", isScrolled ? "text-stone-800" : "text-white")}>
            S & B
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={clsx("text-base font-medium no-underline transition-colors hover:text-opacity-80", isScrolled ? "text-stone-800" : "text-white")}>
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
              className={clsx("rounded-md p-2 transition-colors", isScrolled ? "text-stone-800" : "text-white")}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <a
            href="#rsvp"
            className="hidden transform rounded-full bg-white px-4 py-2 text-sm font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105 md:block md:px-6 md:text-base"
          >
              I&apos;m coming!
          </a>
        </div>
      </header>

      {/* Mobile Menu Drawer & Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* The Cinematic Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />
            
            {/* The Beautiful Menu Panel (from the LEFT) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 z-50 flex h-full w-full max-w-sm flex-col bg-[#FDFBF7] shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-stone-200 p-4">
                <span className="font-serif text-2xl font-bold text-stone-800">Shapat & Basha</span>
                <button
                  onClick={toggleMenu}
                  className="rounded-md p-2 text-stone-600 hover:bg-stone-200/50"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-grow p-4">
                <motion.ul
                  variants={menuContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navLinks.map((link) => (
                    <motion.li key={link.name} variants={menuItemVariants} className="border-b border-stone-200">
                      <a
                        href={link.href}
                        onClick={toggleMenu}
                        className="block py-4 text-center font-serif text-2xl font-medium text-stone-800 transition-colors hover:bg-stone-200/50"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                   <motion.li variants={menuItemVariants}>
                     <a href="#rsvp" onClick={toggleMenu} className="mt-8 block rounded-full bg-stone-800 py-4 text-center font-serif text-2xl font-medium text-white transition-colors hover:bg-stone-700">
                          I&apos;m coming!
                     </a>
                   </motion.li>
                </motion.ul>
              </nav>
              <div className="p-4 text-center text-xs text-stone-400">
                October 27, 2025
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;