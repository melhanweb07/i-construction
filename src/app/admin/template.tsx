"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/admin/login" && !isAuthenticated()) {
      router.replace("/admin/login");
    }
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#F4F1EA]">
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
