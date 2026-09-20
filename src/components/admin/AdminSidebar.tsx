"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BarChart3, BriefcaseBusiness, Building2, FileCog, LayoutDashboard, LogOut, MessageSquareText, Newspaper, Settings, ShieldCheck, Users, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: BriefcaseBusiness },
  { href: "/admin/properties", label: "Properties", icon: Building2 },
  { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquareText },
  { href: "/admin/content", label: "Content", icon: FileCog },
  { href: "/admin/media", label: "Media", icon: Video },
  { href: "/admin/chatbot", label: "Chatbot", icon: BarChart3 },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
  { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-[#F4F1EA]/10 bg-[#0F1113] lg:flex lg:flex-col">
      <div className="border-b border-[#F4F1EA]/10 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#C8A45D]/15 text-[#C8A45D]">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">Admin</p>
            <p className="mt-1 text-lg font-semibold text-white">I Construction</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-5">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition",
                active ? "bg-[#15191A] text-[#F4F1EA]" : "text-[#A5A5A0] hover:bg-[#141618] hover:text-[#F4F1EA]",
              )}
            >
              <Icon className="size-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[#F4F1EA]/10 p-3">
        <button
          onClick={() => {
            router.push("/admin/login");
          }}
          className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-[#A5A5A0] transition hover:bg-[#141618] hover:text-[#F4F1EA]"
        >
          <LogOut className="size-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
