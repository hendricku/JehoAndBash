"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This creates the smooth scrolling effect
    });
  };

  return (
    <footer className="w-full bg-[#FDFBF7] py-16 px-8">
      <motion.div
        className="mx-auto max-w-4xl text-center text-stone-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Back to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-800"
        >
          <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          Back to Top
        </button>

        {/* Divider */}
        <div className="mx-auto h-px w-1/3 bg-stone-300" />

        {/* Main Footer Content */}
        <div className="my-10">
          <h2 className="font-serif text-4xl font-bold text-stone-800">
            Jehoshapat & Evamarish
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-500">
            October 27, 2025
          </p>
          <p className="mt-6 text-base italic text-stone-600">
            Thank you for being part of our story.
          </p>
        </div>

        {/* Credits (Optional) */}
        <p className="text-xs text-stone-400">
          Designed & Built with ♡
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;