"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ModeSelector from "@/components/ModeSelector";
import PromptChips from "@/components/PromptChips";
import MessageList from "@/components/MessageList";
import ChatInput from "@/components/ChatInput";

export default function Home() {
  const [mode, setMode] = useState("mentor");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userMsg = typeof text === "string" ? text : input;
    if (!userMsg.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, mode }),
      });
      const json = await res.json();

      if (json.error) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", type: "plain", mode, data: json.error },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "ai", type: json.type, mode: json.mode, data: json.data },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          type: "plain",
          mode,
          data: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 pt-5 pb-3 h-full overflow-hidden gap-3">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center shrink-0"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Student Success Copilot 🎓
        </h2>
        <p className="text-gray-500 text-sm mt-0.5">
          Ask doubts · Plan your study · Manage exam stress
        </p>
      </motion.div>

      {/* Persona Selector */}
      <div className="w-full max-w-6xl shrink-0">
        <ModeSelector mode={mode} setMode={setMode} />
      </div>

      {/* Chat Box — flex-1 fills ALL remaining space exactly */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-[#e8e2d8] rounded-3xl w-full max-w-6xl flex flex-col shadow-md overflow-hidden flex-1 min-h-0"
      >
        {/* Messages — only this part scrolls */}
        <MessageList
          messages={messages}
          loading={loading}
          bottomRef={bottomRef}
        />

        {/* Pinned bottom section */}
        <div className="shrink-0 bg-[#ddd6c8] px-4 pt-3 pb-1">
          <PromptChips setInput={setInput} />
        </div>
        <div className="shrink-0 bg-[#ddd6c8] px-4 pb-4 pt-2">
          <ChatInput
            input={input}
            setInput={setInput}
            onSend={sendMessage}
            loading={loading}
          />
        </div>
      </motion.div>
    </div>
  );
}
