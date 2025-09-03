"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus } from "lucide-react";

// --- A dedicated component for the beautifully formatted Dress Code answer ---
function DressCodeContent() {
  return (
    <div className="space-y-4 pt-2 text-stone-600">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-stone-200 bg-stone-50/80 p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-stone-500">Color</p>
          <p className="text-xl font-bold text-stone-800">BLACK</p>
        </div>
        <div className="rounded-lg border border-stone-200 bg-stone-50/80 p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-stone-500">Attire</p>
          <p className="text-xl font-bold text-stone-800">STRICTLY FORMAL</p>
        </div>
      </div>
      <div className="rounded-lg border border-stone-200 bg-stone-50/80 p-4">
        <ul className="space-y-2 text-base">
          <li><strong className="font-semibold text-stone-800">Ladies:</strong> Long Dress / Formal Gown</li>
          <li><strong className="font-semibold text-stone-800">Gentlemen:</strong> Black Tie and Suit</li>
        </ul>
      </div>
      <p className="pt-4 text-center italic text-stone-500">
        &quot;Our celebration embraces the elegance of simplicity, and black has been
        chosen as the color of timeless style.&quot;
      </p>
    </div>
  );
}

// --- The structured data for the FAQ section ---
// The `answer` can be a simple string or a full React component!
const faqData = [
  {
    question: "What is the dress code?",
    answer: <DressCodeContent />,
  },
  {
    question: "Can I bring a plus one?",
    answer: "Our wedding is an intimate celebration, so we are only able to accommodate the guests named on your invitation. Thank you for understanding!",
  },
  {
    question: "What about gifts?",
    answer: "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a contribution to our wishing well would be warmly appreciated.",
  },
];

// --- The Reusable Accordion Item (now smarter) ---
interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-stone-300/70 py-6">
      <motion.button
        className="flex w-full items-center justify-between text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-medium text-stone-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus className="h-6 w-6 shrink-0 text-stone-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: "24px" },
              collapsed: { opacity: 0, height: 0, marginTop: "0px" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-base leading-relaxed text-stone-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- The Main FAQ Section Component ---
const FAQ = () => {
  // State is now lifted here to control which item is open
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item to be open

  const handleToggle = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#FDFBF7] py-24 px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="text-center"
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
          <h2 className="mb-12 font-serif text-5xl font-bold text-stone-800 md:text-6xl">
            You also might be wondering...
          </h2>
        </motion.div>

        <div>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;