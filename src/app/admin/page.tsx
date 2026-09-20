"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { Activity, BriefcaseBusiness, Building2, Camera, ChevronRight, CircleDollarSign, FileText, MessageSquareText, ShieldCheck, Users } from "lucide-react";

const metricCards = [
  { label: "Projects", value: "24", detail: "Across residential and commercial sectors", icon: BriefcaseBusiness },
  { label: "Active Properties", value: "18", detail: "Plots and land opportunities tracked", icon: Building2 },
  { label: "Open Enquiries", value: "46", detail: "New leads awaiting response", icon: MessageSquareText },
  { label: "Media Assets", value: "62", detail: "Photos, videos and documents", icon: Camera },
];

const quickLinks = [
  { title: "Construction pipeline", detail: "Monitor live progress and updates", href: "/admin/projects" },
  { title: "Real estate listings", detail: "Track plot availability and sales", href: "/admin/properties" },
  { title: "Customer enquiries", detail: "Review and respond to leads", href: "/admin/enquiries" },
  { title: "Website content", detail: "Update company, media and messaging", href: "/admin/content" },
];

const recentActivity = [
  { title: "Havenwood Villas update added", detail: "Progress milestone published to the public site.", time: "12 mins ago" },
  { title: "Lead assigned to commercial team", detail: "New office build enquiry forwarded to the sales desk.", time: "1 hour ago" },
  { title: "Property listing edited", detail: "Greenfield Estate Plot 14 metadata refreshed.", time: "4 hours ago" },
  { title: "Chatbot FAQ updated", detail: "Service and contact guidance was revised.", time: "Today" },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated()) {
      router.replace("/admin/login");
    }
  }, [router]);

  if (!mounted || !isAuthenticated()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#F4F1EA]">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col gap-5 rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-6 shadow-[0_0_0_1px_rgba(248,244,235,0.02)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">Operations Dashboard</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">I Construction Admin</h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#A5A5A0]">
            <div className="flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-3 py-1.5 text-[#F4F1EA]">
              <ShieldCheck className="size-4 text-[#C8A45D]" />
              Secure admin
            </div>
            <button
              onClick={() => router.push("/admin/login")}
              className="rounded-full border border-[#F4F1EA]/15 px-3 py-1.5 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              Sign out
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metricCards.map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-[#C8A45D]/10 p-2 text-[#C8A45D]">
                  <Icon className="size-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A5A5A0]">Live</span>
              </div>
              <p className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#C8A45D]">{label}</p>
              <p className="mt-3 text-sm text-[#A5A5A0]">{detail}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Quick access</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-[#A5A5A0]">Overview</span>
            </div>
            <div className="mt-6 space-y-3">
              {quickLinks.map((item) => (
                <button
                  key={item.title}
                  onClick={() => router.push(item.href)}
                  className="flex w-full items-center justify-between rounded-2xl border border-[#F4F1EA]/10 bg-[#0B0D0E] p-4 text-left transition hover:border-[#C8A45D]/50 hover:bg-[#131617]"
                >
                  <div>
                    <p className="text-base font-medium text-[#F4F1EA]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#A5A5A0]">{item.detail}</p>
                  </div>
                  <ChevronRight className="size-5 text-[#C8A45D]" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-6">
            <h2 className="text-xl font-semibold text-white">Recent activity</h2>
            <div className="mt-6 space-y-4">
              {recentActivity.map((item) => (
                <div key={item.title} className="border-l border-[#C8A45D]/40 pl-4">
                  <p className="text-sm font-medium text-[#F4F1EA]">{item.title}</p>
                  <p className="mt-1 text-sm text-[#A5A5A0]">{item.detail}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#C8A45D]">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Revenue pipeline", value: "₹4.8 Cr", tone: "gold", icon: CircleDollarSign },
            { label: "Tasks this week", value: "12", tone: "default", icon: Activity },
            { label: "Team members", value: "09", tone: "default", icon: Users },
            { label: "Records synced", value: "100%", tone: "gold", icon: FileText },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
              <div className="flex items-center gap-3 text-[#C8A45D]">
                <Icon className="size-5" />
                <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
              </div>
              <p className="mt-5 text-2xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
