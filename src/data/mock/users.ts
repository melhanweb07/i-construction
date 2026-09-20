import type { AdminUser } from "@/types/admin";

export const adminUsers: AdminUser[] = [
  { id: "usr-1", name: "Administrator", email: "admin@iconstruction.demo", role: "Super Admin", status: "active", lastLogin: "2026-09-20" },
  { id: "usr-2", name: "Riya James", email: "riya@iconstruction.demo", role: "Admin", status: "active", lastLogin: "2026-09-18" },
  { id: "usr-3", name: "Atharv Sen", email: "atharv@iconstruction.demo", role: "Editor", status: "active", lastLogin: "2026-09-15" },
  { id: "usr-4", name: "Nisha Kumar", email: "nisha@iconstruction.demo", role: "Viewer", status: "inactive", lastLogin: "2026-08-22" },
];
