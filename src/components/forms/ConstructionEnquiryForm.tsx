"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitConstructionEnquiry } from "@/lib/api";
import type { ConstructionEnquiry } from "@/types";

const inputClasses =
  "peer w-full border border-[#232628] bg-transparent px-4 pt-6 pb-2.5 text-sm text-[#F4F1EA] placeholder-transparent transition-colors focus:border-[#C8A45D] focus:outline-none";
const labelClasses =
  "pointer-events-none absolute left-4 top-4 text-xs uppercase tracking-[0.1em] text-[#A5A5A0] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-[#C8A45D]";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? label}
        className={inputClasses}
      />
      <label htmlFor={name} className={labelClasses}>
        {label}
        {required ? " *" : ""}
      </label>
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full border border-[#232628] bg-transparent px-4 pt-6 pb-2.5 text-sm text-[#F4F1EA] focus:border-[#C8A45D] focus:outline-none"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#121415]">
            {o}
          </option>
        ))}
      </select>
      <label htmlFor={name} className="pointer-events-none absolute left-4 top-2 text-[10px] uppercase tracking-[0.15em] text-[#A5A5A0]">
        {label}
        {required ? " *" : ""}
      </label>
    </div>
  );
}

export default function ConstructionEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();

    if (!name || !phone) {
      setStatus("error");
      setMessage("Please provide your name and phone number.");
      return;
    }

    const payload: ConstructionEnquiry = {
      name,
      phone,
      email: String(form.get("email") || ""),
      location: String(form.get("location") || ""),
      constructionType: String(form.get("constructionType") || ""),
      propertyUse: (form.get("propertyUse") as ConstructionEnquiry["propertyUse"]) || undefined,
      landSize: String(form.get("landSize") || ""),
      constructionArea: String(form.get("constructionArea") || ""),
      budget: String(form.get("budget") || ""),
      expectedStartDate: String(form.get("expectedStartDate") || ""),
      projectLocation: String(form.get("projectLocation") || ""),
      additionalRequirements: String(form.get("additionalRequirements") || ""),
      message: String(form.get("message") || ""),
    };

    setStatus("loading");
    try {
      const result = await submitConstructionEnquiry(payload);
      setStatus(result.success ? "success" : "error");
      setMessage(result.message);
      if (result.success) e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 border border-[#596B5A]/40 bg-[#596B5A]/10 px-8 py-16 text-center">
        <CheckCircle2 className="size-10 text-[#8ea28f]" aria-hidden />
        <h3 className="text-xl font-semibold text-[#F4F1EA]">Enquiry Received</h3>
        <p className="max-w-sm text-sm text-[#A5A5A0]">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" />
        <Field label="Location" name="location" />
        <SelectField
          label="Construction Type"
          name="constructionType"
          options={["Residential Construction", "Commercial Construction", "Building Renovation", "Interior & Exterior Works", "Turnkey Construction", "Civil Works"]}
        />
        <SelectField label="Residential / Commercial" name="propertyUse" options={["Residential", "Commercial"]} />
        <Field label="Land Size" name="landSize" placeholder="e.g. 2400 sq.ft" />
        <Field label="Construction Area" name="constructionArea" placeholder="e.g. 3000 sq.ft" />
        <Field label="Budget" name="budget" placeholder="e.g. ₹40,00,000" />
        <Field label="Expected Start Date" name="expectedStartDate" type="date" />
        <Field label="Project Location" name="projectLocation" />
      </div>
      <div className="relative">
        <textarea
          id="additionalRequirements"
          name="additionalRequirements"
          rows={3}
          placeholder="Additional Requirements"
          className={`${inputClasses} resize-none`}
        />
        <label htmlFor="additionalRequirements" className={labelClasses}>
          Additional Requirements
        </label>
      </div>
      <div className="relative">
        <textarea id="message" name="message" rows={4} placeholder="Message" className={`${inputClasses} resize-none`} />
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
      </div>

      {status === "error" && <p className="text-sm text-[#c98a6b]">{message}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex w-fit items-center gap-2 bg-[#C8A45D] px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#0B0D0E] transition-colors hover:bg-[#d9bf8c] disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="size-4 animate-spin" aria-hidden />}
        Submit Enquiry
      </button>
    </form>
  );
}
