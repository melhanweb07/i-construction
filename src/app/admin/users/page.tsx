"use client";

import { useEffect, useState } from "react";
import { getAdminUsers, saveAdminUsers } from "@/lib/admin-data";
import type { AdminUser } from "@/types/admin";
import { Users } from "lucide-react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);

  useEffect(() => {
    setUsers(getAdminUsers());
  }, []);

  function addUser() {
    const newUser: AdminUser = {
      id: `usr-${Date.now()}`,
      name: "New Team Member",
      email: "member@iconstruction.demo",
      role: "Viewer",
      status: "active",
      lastLogin: new Date().toISOString().slice(0, 10),
    };

    const next = [
      ...users,
      newUser,
    ];
    setUsers(next);
    saveAdminUsers(next);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Team</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Users</h1>
        </div>
        <button onClick={addUser} className="border border-[#C8A45D] bg-[#C8A45D] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0D0E]">Add user</button>
      </div>

      <div className="mt-8 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                <Users className="size-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{user.name}</p>
                <p className="text-sm text-[#A5A5A0]">{user.email} • {user.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
