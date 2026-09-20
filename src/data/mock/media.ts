import type { AdminMediaItem } from "@/types/admin";

export const adminMedia: AdminMediaItem[] = [
  {
    id: "media-1",
    name: "villa-facade.jpg",
    type: "image",
    url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    date: "2026-09-10",
    usedIn: "Havenwood Villas",
  },
  {
    id: "media-2",
    name: "tower-progress.mp4",
    type: "video",
    url: "https://example.com/tower-progress.mp4",
    date: "2026-09-04",
    usedIn: "Skyline Corporate Tower",
  },
  {
    id: "media-3",
    name: "site-overview.pdf",
    type: "document",
    url: "https://example.com/site-overview.pdf",
    date: "2026-08-29",
    usedIn: "Project docs",
  },
  {
    id: "media-4",
    name: "landscape-sheet.jpg",
    type: "image",
    url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
    date: "2026-08-17",
    usedIn: "Portfolio",
  },
];
