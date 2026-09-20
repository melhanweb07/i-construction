const isBrowser = typeof window !== "undefined";

export function readStorage<T>(key: string, fallback: T): T {
  if (!isBrowser) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T) {
  if (!isBrowser) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function removeStorage(key: string) {
  if (!isBrowser) return;
  window.localStorage.removeItem(key);
}

export function clearAdminStorage() {
  if (!isBrowser) return;
  const keys = [
    "iconstruction_auth",
    "iconstruction_projects",
    "iconstruction_properties",
    "iconstruction_services",
    "iconstruction_blogs",
    "iconstruction_testimonials",
    "iconstruction_enquiries",
    "iconstruction_content",
    "iconstruction_chatbot",
    "iconstruction_users",
    "iconstruction_settings",
  ];
  keys.forEach((key) => window.localStorage.removeItem(key));
}
