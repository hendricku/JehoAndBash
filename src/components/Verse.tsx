"use client";

import React from "react";
import { motion } from "framer-motion";

// A reusable SVG component for the elegant decorative flourish
// (Copied from the RSVP component for design consistency)
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

const Verse = () => {
  return (
    <section id="verse" className="w-full bg-[#FDFBF7] py-24 px-8 md:py-32">
      <motion.div
        className="mx-auto max-w-2xl text-center text-stone-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Flourish className="mx-auto h-8 w-64 text-stone-700" />

        <div className="my-12">
          <p className="mb-6 font-sans text-sm uppercase tracking-[0.2em] text-stone-500">
            1 Corinthians 13:4–7
          </p>
          <p className="font-serif text-2xl italic leading-loose text-stone-700 md:text-3xl">
            “Love is patient, love is kind. It does not envy, it does not
            boast, it is not proud. It does not dishonor others, it is not
            self-seeking, it is not easily angered, it keeps no record of
            wrongs. Love does not delight in evil but rejoices with the truth.
            It always protects, always trusts, always hopes, always perseveres.”
          </p>
        </div>

        <Flourish className="mx-auto h-8 w-64 rotate-180 text-stone-700" />
      </motion.div>
    </section>
  );
};

export default Verse;