"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

// --- Configuration ---
// Set your wedding date and time in the Philippines (UTC+8)
// Format: YYYY-MM-DDTHH:MM:SS+08:00
const weddingDate = "2025-10-27T16:00:00+08:00"; // 4:00 PM Philippines Time

// --- Helper function to format numbers with a leading zero ---
const formatNumber = (num: number) => String(num).padStart(2, "0");

// --- A Reusable Component for Each Time Unit (Day, Hour, etc.) ---
interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center font-serif text-6xl font-bold text-stone-800 md:text-8xl"
          >
            {formatNumber(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-stone-500">
        {label}
      </p>
    </div>
  );
};

// --- The Main Countdown Component ---
const Time = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="time" className="w-full bg-[#FDFBF7] py-24 px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center justify-center gap-1 text-stone-800">
            <Heart className="h-4 w-4 fill-current" />
            <Heart className="h-5 w-5 fill-current" />
            <Heart className="h-4 w-4 fill-current" />
          </div>
          <h2 className="mb-4 font-serif text-5xl font-bold text-stone-800 md:text-6xl">
            Counting the Moments
          </h2>
          <p className="mx-auto max-w-xl text-stone-600">
            Until we become Mr. & Mrs. in the beautiful city of pines.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
};

export default Time;