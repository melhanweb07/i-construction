"use client";

import { useEffect, useState } from "react";
import type { AdminMediaItem } from "@/types/admin";
import { Camera, Plus } from "lucide-react";

const seedMedia: AdminMediaItem[] = [
  {
    id: "media-1",
    name: "villa-facade.jpg",
    type: "image",
    url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    date: "2026-09-12",
    usedIn: "Havenwood Villas",
  },
  {
    id: "media-2",
    name: "office-tour.mp4",
    type: "video",
    url: "https://example.com/office-tour.mp4",
    date: "2026-09-05",
    usedIn: "Skyline Corporate Tower",
  },
];

export default function AdminMediaPage() {
  const [media, setMedia] = useState<AdminMediaItem[]>(seedMedia);

  function addMedia() {
    const newAsset: AdminMediaItem = {
      id: `media-${Date.now()}`,
      name: "new-upload.jpg",
      type: "image",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
      date: new Date().toISOString().slice(0, 10),
      usedIn: "Portfolio",
    };

    const next = [
      ...media,
      newAsset,
    ];
    setMedia(next);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Asset library</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Media</h1>
        </div>
        <button onClick={addMedia} className="inline-flex items-center gap-2 border border-[#C8A45D] bg-[#C8A45D] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0D0E]">
          <Plus className="size-4" /> Add media
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {media.map((asset) => (
          <div key={asset.id} className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                <Camera className="size-4" />
              </div>
              <div>
                <p className="font-medium text-white">{asset.name}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[#A5A5A0]">{asset.type}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#A5A5A0]">{asset.usedIn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
