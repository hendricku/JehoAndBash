"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const SplashScreen: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isSealed, setIsSealed] = useState(true);
  const [isVanishing, setIsVanishing] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // This function is called when the user clicks the wax seal
  const handleUnseal = () => {
    if (!isSealed) return;
    setIsSealed(false);
    audioRef.current?.play().catch(error => console.error("Audio play failed:", error));
  };

  // This function is called when the user clicks the revealed invitation card
  const handleEnter = () => {
    setIsVanishing(true);
    setTimeout(() => setIsLoaded(false), 1000); // Allow time for exit animation
  };

  return (
    <>
      <audio ref={audioRef} src="/bgmusic.mp3" loop preload="auto" />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* The entire envelope assembly, which will animate out */}
            <motion.div
              className="relative"
              animate={isVanishing ? { scale: 1.5, opacity: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
              {/* The Invitation Card (initially hidden inside) */}
              <motion.div
                onClick={handleEnter}
                className="absolute -bottom-2/3 left-1/2 z-10 h-[38vh] w-[80vw] max-w-md -translate-x-1/2 cursor-pointer rounded-md bg-[#FDFBF7] p-8 text-center text-stone-800 shadow-lg md:h-[48vh]"
                initial={{ y: "100%", scale: 0.9 }}
                animate={{ y: isSealed ? "100%" : 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
              >
                <h2 className="font-serif text-4xl font-bold">Jehoshapat & Evamarish</h2>
                <p className="mt-4 font-sans text-sm uppercase tracking-widest text-stone-500">
                  Invite you to celebrate their wedding
                </p>
                <div className="mt-8 rounded-full border border-stone-400 py-2 px-4 text-xs font-semibold uppercase tracking-widest text-stone-600">
                  View Invitation
                </div>
              </motion.div>

              {/* The Envelope Body */}
              <div className="relative h-[40vh] w-[90vw] max-w-lg rounded-lg bg-[#F1EBE2] shadow-2xl md:h-[50vh]">
                <div className="absolute top-1/2 left-0 h-[1px] w-full bg-stone-400/30"></div>
                <div className="absolute top-0 left-1/2 h-full w-[1px] bg-stone-400/30"></div>

                {/* The Envelope Flap */}
                <motion.div
                  className="absolute top-0 left-0 z-20 h-1/2 w-full origin-top"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    backgroundColor: "#e9e1d5",
                  }}
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: isSealed ? 0 : -180 }}
                  transition={{ duration: 0.7, ease: "circOut" }}
                />

                {/* The Golden Wax Seal */}
                <motion.button
                  onClick={handleUnseal}
                  className="absolute top-1/2 left-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isSealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="h-7 w-7 text-white/80" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SplashScreen;