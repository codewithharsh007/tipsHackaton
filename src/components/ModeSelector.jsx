"use client";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, Settings2 } from "lucide-react";

const MODES = [
  { key: "mentor", label: "Academic Mentor", Icon: GraduationCap },
  { key: "counselor", label: "Counselor Mode", Icon: Heart },
  { key: "senior", label: "Senior Buddy", Icon: Users },
];

export default function ModeSelector({ mode, setMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-sm px-4 py-3 flex items-center gap-3 w-full max-w-6xl flex-wrap"
    >
      <Settings2 className="text-gray-400 w-5 h-5 shrink-0" />
      <span className="text-gray-400 text-sm font-medium">Persona Toggle</span>
      <div className="flex gap-2 flex-wrap">
        {MODES.map(({ key, label, Icon }) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMode(key)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              mode === key
                ? "bg-amber-400 text-white shadow"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
