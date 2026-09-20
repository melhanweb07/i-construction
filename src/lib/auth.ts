// DEMO ONLY — replace with secure backend authentication before production.
import { readStorage, writeStorage } from "@/lib/storage";

const AUTH_KEY = "iconstruction_auth";

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return readStorage<{ authenticated: boolean }>(AUTH_KEY, { authenticated: false }).authenticated === true;
}

export function login(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  const valid = normalizedEmail === "admin@iconstruction.demo" && normalizedPassword === "Admin@123";

  if (!valid) {
    return { ok: false, message: "Invalid email or password." };
  }

  writeStorage(AUTH_KEY, { authenticated: true, email: normalizedEmail });
  return { ok: true, message: "Login successful." };
}

export function logout() {
  if (typeof window === "undefined") return;
  writeStorage(AUTH_KEY, { authenticated: false, email: "" });
}
