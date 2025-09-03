"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// --- DATA: All names are stored here for easy editing ---
const entourageData = {
  principalSponsors: {
    left: ["Rolly Domenden", "Antonio Mararang", "Marvin Jose Madayag", "Roberto Maliwat", "Alex Viray", "Roger Carlo Cobrado", "Armando Claveria"],
    right: ["Rowena Sanchez", "Myrna Pacleb", "Maribel Hufalar", "Aljane Silvania", "Evalou Caragay", "Evadine Valle", "Rosemarie Viray", "Daisy Sabado", "Elizabeth Anicoche", "Filamor Dyouihangco", "Laurice Diosan-Valdez"],
  },
  bestMan: ["Jezreel David Ariz"],
  maidOfHonor: ["Queensy Payabyab"],
  groomsmen: ["Mark Jacob Cobrado", "Daniel Cobrado", "Hero Castro", "Briggs Maglaya", "Edsel Molina", "Champ Cargamento", "Jairus Pajara"],
  bridesmen: ["Janzi Paul Buddle", "Christian Patrick Reijnders", "Vincent Thomas Dyouihangco", "Daniel Isaac Viray", "Marvin Kyle Madayag", "Jack Warren Soriano", "Roberto Leon Ortega"],
  secondarySponsors: {
    left: ["Arianna Rosales", "Lyra Sanchez", "Swedelyn Resyl Mencias"],
    right: ["Cairo Rosales", "Mark Joshua Sanchez", "Kurt Denver Obra"],
  },
  flowerBoys: ["Zachary Nathaniel D. Viray", "Kiefer Joashly Sanchez", "Alonzo Azrael Caragay"],
  bearers: [
    { role: "Bible", name: "Miguel Joaquin L. Madayag" },
    { role: "Ring", name: "Magiting Fernandez Anicoche" },
    { role: "Coin", name: "Noah Ezekiel D. Viray" },
  ],
};

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const nameVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// --- Reusable Components for different sections ---
const TwoColumnSection = ({ title, left, right }: { title: string; left: string[]; right: string[] }) => (
  <motion.div className="mb-16 text-center" variants={sectionVariants}>
    <h3 className="mb-6 text-xl font-semibold uppercase tracking-[0.3em] text-stone-700">{title}</h3>
    <motion.div
      className="grid grid-cols-2 gap-x-8 gap-y-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.05 }}
    >
      <div className="text-right">{left.map(name => <motion.p key={name} variants={nameVariants} className="text-sm uppercase tracking-wider text-stone-600">{name}</motion.p>)}</div>
      <div className="text-left">{right.map(name => <motion.p key={name} variants={nameVariants} className="text-sm uppercase tracking-wider text-stone-600">{name}</motion.p>)}</div>
    </motion.div>
  </motion.div>
);

const PairedSection = ({ leftTitle, leftName, rightTitle, rightName }: { leftTitle: string; leftName: string; rightTitle: string; rightName: string }) => (
  <motion.div className="mb-16 grid grid-cols-2 gap-x-8 text-center" variants={sectionVariants}>
    <div>
      <h3 className="mb-4 text-xl font-semibold uppercase tracking-[0.3em] text-stone-700">{leftTitle}</h3>
      <p className="text-sm uppercase tracking-wider text-stone-600">{leftName}</p>
    </div>
    <div>
      <h3 className="mb-4 text-xl font-semibold uppercase tracking-[0.3em] text-stone-700">{rightTitle}</h3>
      <p className="text-sm uppercase tracking-wider text-stone-600">{rightName}</p>
    </div>
  </motion.div>
);

const CenteredSection = ({ title, names }: { title: string; names: string[] }) => (
  <motion.div className="mb-16 text-center" variants={sectionVariants}>
    <h3 className="mb-4 text-xl font-semibold uppercase tracking-[0.3em] text-stone-700">{title}</h3>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.1 }}>
      {names.map(name => <motion.p key={name} variants={nameVariants} className="text-sm uppercase tracking-wider text-stone-600">{name}</motion.p>)}
    </motion.div>
  </motion.div>
);

const BearersSection = ({ title, bearers }: { title: string; bearers: { role: string; name: string }[] }) => (
    <motion.div className="text-center" variants={sectionVariants}>
        <h3 className="mb-4 text-xl font-semibold uppercase tracking-[0.3em] text-stone-700">{title}</h3>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.1 }}>
            {bearers.map(bearer => (
                <motion.p key={bearer.name} variants={nameVariants} className="text-sm uppercase tracking-wider text-stone-600">
                    <span className="font-semibold">{bearer.role}:</span> {bearer.name}
                </motion.p>
            ))}
        </motion.div>
    </motion.div>
);


// --- The Main Entourage Component ---
const Entourage = () => {
  return (
    <section id="entourage" className="w-full bg-[#FDFBF7] py-24 px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2 
          className="mb-20 text-center font-serif text-7xl font-bold text-stone-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <span className="font-script text-9xl">E</span>ntourage
        </motion.h2>

        <TwoColumnSection title="Principal Sponsors" {...entourageData.principalSponsors} />
        <PairedSection leftTitle="Best Man" leftName={entourageData.bestMan[0]} rightTitle="Maid of Honor" rightName={entourageData.maidOfHonor[0]} />
        <TwoColumnSection title="Groomsmen & Bridesmen" left={entourageData.groomsmen} right={entourageData.bridesmen} />
        <TwoColumnSection title="Secondary Sponsors" {...entourageData.secondarySponsors} />
        <CenteredSection title="Flower Boys" names={entourageData.flowerBoys} />
        <BearersSection title="Bearers" bearers={entourageData.bearers} />
      </div>
    </section>
  );
};

export default Entourage;