"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Configuration (Unchanged) ---
const images = ["/yes.JPG", "/yess.JPG", "/yesss.JPG"];
const intervalDelay = 6000;

// --- Animation Variants (Unchanged) ---
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};
  
// --- THE UPGRADED MainTextContent COMPONENT ---
const MainTextContent = () => (
    // This container now intelligently stacks on mobile and goes side-by-side on larger screens
    <div className="flex w-full flex-col items-start md:flex-row md:items-end md:justify-between">
        <motion.div className="text-left" variants={containerVariants}>
            <motion.p 
                className="mb-2 text-base font-medium md:text-lg" 
                variants={itemVariants}
            >
                We're getting married
            </motion.p>
            <motion.h1 
                className="font-serif font-bold leading-none
                /* THE PROFESSIONAL FIX: Fluid Typography using clamp() */
                /* This scales the text smoothly between a min and max size */
                /* Format: text-[clamp(MINIMUM, FLUID, MAXIMUM)] */
                text-[clamp(3.75rem,12vw,8.75rem)]"
                variants={itemVariants}
            >
                Jehoshapat & Evamarish
            </motion.h1>
        </motion.div>
        <motion.div 
            // Stacks below on mobile, moves to the right on desktop
            className="mt-4 shrink-0 md:mt-0 md:ml-4 md:pb-2 md:text-right" 
            variants={itemVariants}
        >
            <p className="text-base font-medium md:text-lg">
                October 27, 2025
            </p>
        </motion.div>
    </div>
);


const FinalHero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    useEffect(() => {
      const timer = setInterval(nextSlide, intervalDelay);
      return () => clearInterval(timer);
    }, [nextSlide]);
  
    return (
      <section className="group relative h-screen w-full overflow-hidden font-sans text-stone-100">
        {/* All background and carousel logic remains IDENTICAL, as requested */}
        <div className="absolute inset-0 -z-20">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div
                className="h-full w-full animate-kenburns bg-cover bg-center"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
  
        {/* Navigation arrows remain IDENTICAL */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={prevSlide} className="rounded-full bg-black/20 p-2 opacity-0 transition-opacity duration-300 group-hover:bg-black/40" aria-label="Previous image"><ChevronLeft className="h-6 w-6" /></button>
          <button onClick={nextSlide} className="rounded-full bg-black/20 p-2 opacity-0 transition-opacity duration-300 group-hover:bg-black/40" aria-label="Next image"><ChevronRight className="h-6 w-6" /></button>
        </div>
  
        <motion.div
          className="flex h-full flex-col justify-end p-8 md:p-12 lg:p-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header remains empty, as in your code */}
          <motion.header className="flex w-full items-center justify-between" variants={itemVariants}>
          </motion.header>
  
          {/* Main content now uses the UPGRADED responsive component */}
          <main className="w-full">
            <MainTextContent />
          </main>
        </motion.div>
  
        {/* Slide indicators remain IDENTICAL */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  };
  
export default FinalHero;