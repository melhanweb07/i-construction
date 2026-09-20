"use client";

import { useEffect, useState } from "react";
import { getAdminEnquiries, saveAdminEnquiries } from "@/lib/admin-data";
import type { AdminEnquiry } from "@/types/admin";
import { MessageSquareText, Search } from "lucide-react";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<AdminEnquiry[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setEnquiries(getAdminEnquiries());
  }, []);

  const filtered = enquiries.filter((item) => `${item.customerName} ${item.email}`.toLowerCase().includes(search.toLowerCase()));

  function updateStatus(id: string, status: AdminEnquiry["status"]) {
    const next = enquiries.map((item) => (item.id === id ? { ...item, status } : item));
    setEnquiries(next);
    saveAdminEnquiries(next);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Lead management</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Enquiries</h1>
        </div>
        <label className="flex items-center gap-2 rounded-xl border border-[#F4F1EA]/10 bg-[#111315] px-3 py-2 text-sm text-[#A5A5A0]">
          <Search className="size-4" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search lead" className="w-40 bg-transparent outline-none placeholder:text-[#6B6B64]" />
        </label>
      </div>

      <div className="mt-8 space-y-4">
        {filtered.map((enquiry) => (
          <div key={enquiry.id} className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <MessageSquareText className="size-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{enquiry.customerName}</p>
                  <p className="text-sm text-[#A5A5A0]">{enquiry.email} • {enquiry.phone}</p>
                </div>
              </div>
              <select value={enquiry.status} onChange={(event) => updateStatus(enquiry.id, event.target.value as AdminEnquiry["status"])} className="rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2 text-sm text-white outline-none focus:border-[#C8A45D]">
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="follow-up">Follow-up</option>
                <option value="converted">Converted</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#A5A5A0]">
              <span className="rounded-full border border-[#F4F1EA]/10 px-2 py-1">{enquiry.type}</span>
              <span className="rounded-full border border-[#F4F1EA]/10 px-2 py-1">{enquiry.date}</span>
              {"preferredLocation" in enquiry ? <span className="rounded-full border border-[#F4F1EA]/10 px-2 py-1">{enquiry.preferredLocation}</span> : <span className="rounded-full border border-[#F4F1EA]/10 px-2 py-1">{enquiry.location}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
