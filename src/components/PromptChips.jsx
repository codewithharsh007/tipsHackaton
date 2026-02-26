"use client";
import { motion } from "framer-motion";
import { PROMPT_CHIPS } from "@/lib/personas";

export default function PromptChips({ setInput }) {
  return (
    <div className="px-4 pt-2 pb-1 flex gap-2 overflow-x-auto">
      {PROMPT_CHIPS.map((chip, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setInput(chip)}
          className="shrink-0 bg-white text-gray-500 text-xs rounded-full px-3 py-1.5 border border-gray-200 hover:border-amber-300 hover:text-amber-600 transition-all whitespace-nowrap"
        >
          {chip.length > 28 ? chip.slice(0, 28) + "…" : chip}
        </motion.button>
      ))}
    </div>
  );
}
