"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variant for elements to fade in from below
const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
  viewport: { once: true, amount: 0.2 },
};

const Location = () => {
  return (
    <section
      id="location"
      className="w-full bg-[#FDFBF7] py-24 px-8 md:py-32 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* ====== Header Section ====== */}
        <div className="mb-12 flex items-end justify-between">
          <motion.div {...fadeInAnimation}>
            <p className="text-sm uppercase tracking-widest text-stone-500">
              Location
            </p>
            <h2 className="mt-2 font-serif text-5xl font-bold text-stone-800 md:text-6xl">
              We&apos;ll see you at Pinewoods
            </h2>
          </motion.div>
          <motion.div {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 0.2 }}>
            <a
              href="https://www.google.com/maps/place/Pinewoods+Golf+%26+Country+Club+Estate/@16.438883,120.578641,17z/data=!3m1!4b1!4m6!3m5!1s0x3391a10055555555:0x87643b468512592a!8m2!3d16.438883!4d120.5812159!16s%2Fg%2F1tdylt5q"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 rounded-full bg-stone-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 md:inline-block"
            >
              Find on Google Maps
            </a>
          </motion.div>
        </div>

        {/* ====== Main Image ====== */}
        <motion.div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-xl"
          {...fadeInAnimation}
        >
          {/* IMPORTANT: Replace this src with a photo of Pinewoods! */}
          <img
            src="/golf.webp" // Example: /images/pinewoods-clubhouse.jpg
            alt="A scenic view of Pinewoods Golf & Country Club in Baguio City"
            className="h-full w-full object-cover"
          />
        </motion.div>
        
        {/* ====== Details Grid ====== */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* --- Column 1: The Venue --- */}
          <motion.div variants={fadeInAnimation}>
            <h3 className="mb-3 text-xl font-bold text-stone-800">
              The venue
            </h3>
            <p className="leading-relaxed text-stone-600">
              Nestled in the cool, pine-scented hills of Baguio, Pinewoods offers breathtaking views and elegant spaces, perfect for our special day.
            </p>
          </motion.div>

          {/* --- Column 2: By Car --- */}
          <motion.div variants={fadeInAnimation}>
            <h3 className="mb-3 text-xl font-bold text-stone-800">By car</h3>
            <p className="leading-relaxed text-stone-600">
              For guests driving, there is ample and secure{" "}
              <strong className="font-semibold text-stone-800">
                guest parking available
              </strong>{" "}
              on-site. Staff will guide you upon arrival.
            </p>
          </motion.div>

          {/* --- Column 3: By Bus / Taxi --- */}
          <motion.div variants={fadeInAnimation}>
            <h3 className="mb-3 text-xl font-bold text-stone-800">By Bus / Taxi</h3>
            <p className="leading-relaxed text-stone-600">
              Baguio is well-serviced by bus lines from Manila. From the {" "}
              <strong className="font-semibold text-stone-800">
                Baguio City bus terminal
              </strong>
              , a taxi or Grab ride takes ~20 mins.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;