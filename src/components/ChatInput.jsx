"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ChatInput({ input, setInput, onSend, loading }) {
  return (
    <div className="p-4 flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        placeholder="Type your question..."
        className="flex-1 bg-white rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none shadow-sm focus:ring-2 focus:ring-amber-300 transition-all"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onSend()}
        disabled={loading}
        className="bg-amber-400 hover:bg-amber-500 text-white rounded-xl px-4 py-2.5 transition-all shadow disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
