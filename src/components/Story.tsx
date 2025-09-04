"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx"; // We'll use clsx for cleaner conditional classes


const storyData = [
  {
    bgImage: "/yess.JPG",
    fgImage: "/yes.JPG",
    title: "A Fateful Beginning",
    description: "It all started not with a grand gesture, but a simple, shared laugh over coffee. A chance meeting that felt less like an introduction and more like a reunion of two souls who had been waiting for each other.",
  },
  {
    bgImage: "/yesss.JPG",
    fgImage: "/yess.JPG",
    title: "Building Our World",
    description: "From spontaneous road trips to quiet evenings building furniture, we discovered our world in the small moments. We've filled our lives with inside jokes, endless support, and a love that feels like coming home.",
  },
  {
    bgImage: "/yes.JPG",
    fgImage: "/yesss.JPG",
    title: "The Next Chapter",
    description: "Now, standing on the brink of our greatest adventure, we're filled with gratitude. We are so excited to step into our forever, surrounded by you—the people who have shaped our lives and our story.",
  },
];

const StoryChapter = ({ chapter, index }: { chapter: typeof storyData[0]; index: number }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create the parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FDFBF7]  py-24 px-8"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y, scale }}
      >
        <img src={chapter.bgImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Foreground Content Card */}
      <div
        className={clsx(
          "flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:gap-16",
          index % 2 !== 0 && "md:flex-row-reverse" // Alternate layout for every other chapter
        )}
      >
        {/* Foreground Image */}
        <motion.div
          className="relative h-[40vh] w-full shrink-0 shadow-2xl md:h-[50vh] md:w-5/12"
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: index % 2 !== 0 ? 3 : -3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={chapter.fgImage} alt={chapter.title} className="h-full w-full object-cover" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-left text-stone-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-4 font-serif text-5xl font-bold">{chapter.title}</h2>
          <p className="text-lg leading-relaxed text-stone-700">{chapter.description}</p>
        </motion.div>
      </div>
    </section>
  );
};


// --- The Main "Our Story" Component ---
const OurStory = () => {
  return (
    <div id="story">
      {/* Title Section */}
      <div className="bg-stone-50 py-24 text-center">
        <h2 className="font-serif text-6xl font-bold text-stone-800">Our Story</h2>
      </div>

      {/* Map through the data to create each chapter */}
      {storyData.map((chapter, index) => (
        <StoryChapter key={index} chapter={chapter} index={index} />
      ))}
    </div>
  );
};

export default OurStory;