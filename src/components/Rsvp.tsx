"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react"; // A nice icon for the buttons

// A reusable SVG component for the elegant decorative flourish
const Flourish: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 10C80 10 70 4 50 4C30 4 0 10 0 10"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M100 10C120 10 130 4 150 4C170 4 200 10 200 10"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M100 10C100 13.3137 97.7614 16 95 16C92.2386 16 90 13.3137 90 10"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M110 10C110 13.3137 107.761 16 105 16C102.239 16 100 13.3137 100 10"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const RSVP = () => {
  return (
    <section id="rsvp" className="w-full bg-[#FDFBF7] py-24 px-8 md:py-32">
      <motion.div
        className="mx-auto max-w-lg text-center text-stone-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Flourish className="mx-auto h-8 w-64 text-stone-700" />

        <h2 className="my-8 font-serif text-6xl font-medium uppercase tracking-[0.3em] md:text-7xl">
          RSVP
        </h2>

        <div className="mb-12 font-sans text-sm uppercase tracking-[0.2em] leading-relaxed text-stone-700">
          <p>The favor of your response</p>
          <p>is requested on or before</p>
          <p className="mt-2 font-semibold">Oct. 5, 2025</p>
        </div>

        <div className="mb-10">
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-stone-700">
            Contact the Bride or Groom:
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Interactive Button for the Bride */}
            <a
              href="sms:09177727127"
              className="group flex items-center gap-2 rounded-full bg-stone-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <MessageSquare className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Message Evamarish
            </a>
            {/* Interactive Button for the Groom */}
            <a
              href="sms:09271697915"
              className="group flex items-center gap-2 rounded-full bg-stone-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <MessageSquare className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Message Jehoshapat
            </a>
          </div>
        </div>

        <Flourish className="mx-auto h-8 w-64 rotate-180 text-stone-700" />
      </motion.div>
    </section>
  );
};

export default RSVP;