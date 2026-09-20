"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@iconstruction.demo");
  const [password, setPassword] = useState("Admin@123");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = login(email, password);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0D0E] px-4 py-12 text-[#F4F1EA]">
      <div className="w-full max-w-md rounded-[28px] border border-[#F4F1EA]/10 bg-[#111315] p-6 shadow-2xl shadow-black/30 sm:p-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8A45D]">Secure Access</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">Admin login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#A5A5A0]">
              <Mail className="size-4" /> Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-[#F4F1EA]/10 bg-[#0B0D0E] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#6B6B64] focus:border-[#C8A45D]"
              placeholder="admin@iconstruction.demo"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#A5A5A0]">
              <LockKeyhole className="size-4" /> Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-[#F4F1EA]/10 bg-[#0B0D0E] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#6B6B64] focus:border-[#C8A45D]"
              placeholder="Enter password"
              required
            />
          </label>

          {error ? <p className="text-sm text-[#F59E0B]">{error}</p> : null}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 border border-[#C8A45D] bg-[#C8A45D] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B0D0E] transition hover:brightness-110"
          >
            Sign in
            <ArrowRight className="size-4" />
          </button>
        </form>

        <div className="mt-6 rounded-2xl border border-[#C8A45D]/20 bg-[#C8A45D]/5 p-4 text-sm text-[#D7D0C2]">
          Demo credentials: admin@iconstruction.demo / Admin@123
        </div>
      </div>
    </div>
  );
}
