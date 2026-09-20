"use client";

import { useEffect, useState } from "react";
import { getAdminChatbotKnowledge, saveAdminChatbotKnowledge } from "@/lib/admin-data";
import type { AdminChatbotItem } from "@/types/admin";
import { MessageSquareText, Plus } from "lucide-react";

export default function AdminChatbotPage() {
  const [items, setItems] = useState<AdminChatbotItem[]>([]);

  useEffect(() => {
    setItems(getAdminChatbotKnowledge());
  }, []);

  function addEntry() {
    const newItem: AdminChatbotItem = {
      id: `kb-${Date.now()}`,
      question: "New chatbot prompt",
      answer: "Add a helpful answer for visitors.",
      category: "General",
      status: "enabled",
      updatedAt: new Date().toISOString().slice(0, 10),
    };

    const next = [
      ...items,
      newItem,
    ];
    setItems(next);
    saveAdminChatbotKnowledge(next);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">AI assistant</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Chatbot knowledge</h1>
        </div>
        <button onClick={addEntry} className="inline-flex items-center gap-2 border border-[#C8A45D] bg-[#C8A45D] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0D0E]">
          <Plus className="size-4" /> Add item
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                <MessageSquareText className="size-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{item.question}</p>
                <p className="text-sm text-[#A5A5A0]">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
