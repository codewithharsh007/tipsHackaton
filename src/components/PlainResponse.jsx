"use client";
import { motion } from "framer-motion";

export default function PlainResponse({ data, mode }) {
  return (
    <div className="flex flex-col gap-2 max-w-[80%]">
      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-700 shadow-sm">
        {data}
      </div>
      {mode === "counselor" && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex gap-2 items-start text-sm text-gray-600"
        >
          <span>🧡</span>
          <span>
            <strong>Note:</strong> I am an AI. If you are in crisis, please
            contact campus health services or a trusted professional.
          </span>
        </motion.div>
      )}
    </div>
  );
}
