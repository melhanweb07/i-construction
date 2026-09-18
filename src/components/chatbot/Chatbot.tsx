"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { EASE } from "@/lib/animations";
import { getBotReply, quickQuestions } from "@/lib/chatbotService";
import type { ChatMessage } from "@/types";
import { cn } from "@/lib/utils";

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hi, I'm the I Construction Assistant. Ask me about services, projects or available plots.",
  timestamp: Date.now(),
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  async function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    const reply = await getBotReply(trimmed);
    setTyping(false);
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "assistant", content: reply, timestamp: Date.now() },
    ]);
  }

  return (
    <div className="fixed bottom-5 right-4 z-[70] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.4, ease: EASE }}
            role="dialog"
            aria-label="I Construction Assistant chat"
            className="mb-4 flex h-[70vh] max-h-[560px] w-[92vw] max-w-[380px] flex-col overflow-hidden border border-[#232628] bg-[#121415] shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between border-b border-[#232628] bg-[#17191a] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center border border-[#C8A45D]/40 text-[#C8A45D]">
                  <Sparkles className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#F4F1EA]">I Construction Assistant</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#596B5A]">Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex size-8 items-center justify-center text-[#A5A5A0] transition-colors hover:text-[#C8A45D]"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <p
                    className={cn(
                      "max-w-[85%] px-4 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-[#C8A45D] text-[#0B0D0E]"
                        : "border border-[#232628] bg-[#17191a] text-[#F4F1EA]",
                    )}
                  >
                    {m.content}
                  </p>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <p className="border border-[#232628] bg-[#17191a] px-4 py-2.5 text-sm text-[#A5A5A0]">
                    Typing…
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-[#232628] px-5 py-3">
              {quickQuestions.slice(0, 3).map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="border border-[#232628] px-3 py-1.5 text-[11px] text-[#A5A5A0] transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 border-t border-[#232628] p-3"
            >
              <label htmlFor="chat-input" className="sr-only">
                Type your message
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 bg-transparent px-2 py-2 text-sm text-[#F4F1EA] placeholder:text-[#5b5d5e] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex size-9 items-center justify-center border border-[#C8A45D]/50 text-[#C8A45D] transition-colors hover:bg-[#C8A45D] hover:text-[#0B0D0E]"
              >
                <Send className="size-4" aria-hidden />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="flex items-center gap-2.5 border border-[#C8A45D]/60 bg-[#0B0D0E] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#C8A45D] shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:bg-[#C8A45D] hover:text-[#0B0D0E]"
      >
        <MessageSquare className="size-4" aria-hidden />
        <span className="hidden sm:inline">{open ? "Close" : "AI Chat"}</span>
      </motion.button>
    </div>
  );
}
