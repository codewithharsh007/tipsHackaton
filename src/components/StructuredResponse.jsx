"use client";
import { motion } from "framer-motion";

const CARDS = [
  { key: "summary",     label: "Summary",      bg: "bg-white" },
  { key: "explanation", label: "Explanation",   bg: "bg-amber-50" },
  { key: "example",     label: "Example",       bg: "bg-white" },
  { key: "selfTest",    label: "Self Test 🧠",  bg: "bg-amber-50" },
];

export default function StructuredResponse({ data }) {
  return (
    <div className="flex flex-col gap-2 max-w-[80%]">
      {CARDS.map((card, i) => (
        <motion.div
          key={card.key}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className={`${card.bg} rounded-xl px-4 py-2.5 text-sm text-gray-700 shadow-sm`}
        >
          <span className="font-semibold text-amber-500 block mb-0.5">
            {card.label}
          </span>
          {data[card.key]}
        </motion.div>
      ))}
    </div>
  );
}
