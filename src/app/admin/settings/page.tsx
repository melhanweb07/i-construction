"use client";

import { useEffect, useState } from "react";
import { getAdminSettings, saveAdminSettings } from "@/lib/admin-data";
import type { AdminSettings } from "@/types/admin";
import { Settings } from "lucide-react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<AdminSettings | null>(null);

  useEffect(() => {
    setSettings(getAdminSettings());
  }, []);

  if (!settings) return null;

  function updateField<K extends keyof AdminSettings>(key: K, value: AdminSettings[K]) {
    const next = { ...settings, [key]: value } as AdminSettings;
    setSettings(next);
    saveAdminSettings(next);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Preferences</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Settings</h1>
      </div>

      <div className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
        <div className="mb-4 flex items-center gap-3 text-[#C8A45D]">
          <Settings className="size-5" />
          <span className="text-xs uppercase tracking-[0.18em]">System</span>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between rounded-2xl border border-[#F4F1EA]/10 bg-[#0B0D0E] p-3 text-sm text-[#F4F1EA]">
            <span>Dark mode</span>
            <input type="checkbox" checked={settings.darkMode} onChange={(event) => updateField("darkMode", event.target.checked)} className="h-4 w-4 accent-[#C8A45D]" />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-[#F4F1EA]/10 bg-[#0B0D0E] p-3 text-sm text-[#F4F1EA]">
            <span>Compact sidebar</span>
            <input type="checkbox" checked={settings.compactSidebar} onChange={(event) => updateField("compactSidebar", event.target.checked)} className="h-4 w-4 accent-[#C8A45D]" />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-[#F4F1EA]/10 bg-[#0B0D0E] p-3 text-sm text-[#F4F1EA]">
            <span>Notifications enabled</span>
            <input type="checkbox" checked={settings.notifications} onChange={(event) => updateField("notifications", event.target.checked)} className="h-4 w-4 accent-[#C8A45D]" />
          </label>
          <input value={settings.websiteName} onChange={(event) => updateField("websiteName", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <input value={settings.contactEmail} onChange={(event) => updateField("contactEmail", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
        </div>
      </div>
    </div>
  );
}
