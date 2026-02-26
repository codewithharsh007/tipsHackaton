"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import StructuredResponse from "./StructuredResponse";
import PlainResponse from "./PlainResponse";
import TypingIndicator from "./TypingIndicator";

export default function MessageList({ messages, loading, bottomRef }) {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto p-5 flex flex-col gap-4">
      <AnimatePresence>
        {messages.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-full text-center text-gray-400 gap-2"
          >
            <Sparkles className="w-8 h-8 text-amber-400" />
            <p className="text-sm">
              Ask your doubt, plan your study, or share how you feel.
            </p>
          </motion.div>
        )}

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
          >
            {msg.role === "ai" && (
              <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-sm shrink-0 mt-1">
                AI
              </div>
            )}

            {msg.role === "user" ? (
              <div className="bg-[#ddd6c8] text-gray-700 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm max-w-[75%]">
                {msg.text}
              </div>
            ) : msg.type === "structured" ? (
              <StructuredResponse data={msg.data} />
            ) : (
              <PlainResponse data={msg.data} mode={msg.mode} />
            )}
          </motion.div>
        ))}

        {loading && <TypingIndicator />}
      </AnimatePresence>
      <div ref={bottomRef} />
    </div>
  );
}
