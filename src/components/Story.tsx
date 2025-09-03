"use client";

import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section id="location" className="relative bg-stone-50 text-stone-800">
      {/* This container needs to be taller than the screen to allow for scrolling */}
      <div className="relative h-[200vh]">
        {/* This is the sticky container that will hold our content */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="relative mx-auto flex w-full max-w-7xl items-center px-8">
            {/* Left Column (The Sticky Image) */}
            <div className="relative h-[60vh] w-1/2 overflow-hidden rounded-2xl">
              <motion.img
                src="/yes.JPG" // Use one of your beautiful images
                alt="The couple smiling"
                className="absolute h-full w-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>

            {/* Right Column (The Scrolling Text) */}
            <div className="w-1/2 pl-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 font-serif text-6xl font-bold">
                  Our Story
                </h2>
                <p className="mb-4 text-lg text-stone-600">
                  It all began on a crisp autumn evening under a sky full of
                  stars. A chance encounter, a shared laugh, and a connection
                  that felt like coming home. We've built a life filled with
                  adventure, quiet moments, and endless support.
                </p>
                <p className="text-lg text-stone-600">
                  Now, we're ready to start our greatest adventure yet. We're so
                  excited to celebrate the beginning of our forever with you, the
                  people who mean the most to us.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;