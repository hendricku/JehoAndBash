"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Configuration ---
// Add your image paths here. Make sure they are in the /public folder.
const images = ["/yes.JPG", "/yess.JPG", "/yesss.JPG"]; // I used .JPG based on your first file, update if they are .png
const intervalDelay = 6000; // Time in milliseconds between slides (6 seconds)



// Re-pasting the variant definitions for completeness, as they were shortened above
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

// const HeaderContent = () => (
//     <>
//       <nav>
//         <ul className="flex space-x-6 md:space-x-8 text-sm md:text-base font-medium">
//           {["Location", "Hotels", "The Day", "FAQ"].map((item) => (
//             <li key={item}>
//               <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:underline transition-all">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <a
//         href="#rsvp"
//         className="bg-white text-black px-5 py-2 rounded-full text-sm md:text-base font-semibold hover:bg-opacity-90 hover:scale-105 transition-transform"
//       >
//         I'm coming!
//       </a>
//     </>
//   );
  
const MainTextContent = () => (
    <div className="flex justify-between items-end w-full">
        <motion.div className="text-left" variants={containerVariants}>
        <motion.p 
            className="text-base md:text-lg font-medium mb-2" 
            variants={itemVariants}
        >
            We&apos;re getting married
        </motion.p>
        <motion.h1 
            className="font-serif text-7xl md:text-8xl lg:text-[140px] font-bold leading-none"
            variants={itemVariants}
        >
            Jehoshapat & Evamarish
        </motion.h1>
        </motion.div>
        <motion.div 
        className="text-right pb-2 md:pb-4 shrink-0 ml-4" 
        variants={itemVariants}
        >
        <p className="text-base md:text-lg font-medium">
            October 27, 2025
        </p>
        </motion.div>
    </div>
);


// Final component with content broken out for readability
const FinalHero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = React.useCallback(() => {
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
      <section className="group relative w-full h-screen overflow-hidden font-sans text-stone-100">
        <div className="absolute inset-0 -z-20">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div
                className="w-full h-full bg-cover bg-center animate-kenburns"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
  
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={prevSlide} className="p-2 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40" aria-label="Previous image"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={nextSlide} className="p-2 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40" aria-label="Next image"><ChevronRight className="w-6 h-6" /></button>
        </div>
  
        <motion.div
          className="flex flex-col justify-between h-full p-8 md:p-12 lg:p-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.header className="flex justify-between items-center w-full" variants={itemVariants}>
          
          </motion.header>
  
          <main className="w-full">
            <MainTextContent />
          </main>

          <div/>
        </motion.div>
  
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  };
  
export default FinalHero;