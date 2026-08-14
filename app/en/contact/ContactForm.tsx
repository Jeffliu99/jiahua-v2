"use client";

import { FormEvent, useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "30-Day Postpartum Meal Program",
  "C-Section Recovery Program",
  "Breastfeeding Nutrition Program",
  "Premium Customized Program",
  "Not Sure Yet, I’d Like a Consultation",
];

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = submitState === "submitting";

  const buttonText = useMemo(() => {
    if (submitState === "submitting") return "Submitting...";
    if (submitState === "success") return "Submitted, Thank You";
    return "Submit Consultation Request";
  }, [submitState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      area: String(formData.get("area") || "").trim(),
      dueDate: String(formData.get("dueDate") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ||
            "Submission failed. Please try again later, or contact us directly through WeChat or WhatsApp."
        );
      }

      setSubmitState("success");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Submission failed. Please try again later."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#E8DCC9] bg-white p-6 shadow-sm md:p-8"
    >
      {/* Honeypot field: normal visitors will not see or fill this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#1F4E4C]">
          Name *
          <input
            required
            name="name"
            type="text"
            className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 font-normal text-gray-700 outline-none transition focus:border-[#D6B37F] focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#1F4E4C]">
          Phone / WhatsApp *
          <input
            required
            name="phone"
            type="text"
            className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 font-normal text-gray-700 outline-none transition focus:border-[#D6B37F] focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#1F4E4C]">
          Email
          <input
            name="email"
            type="email"
            className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 font-normal text-gray-700 outline-none transition focus:border-[#D6B37F] focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#1F4E4C]">
          City / Area *
          <input
            required
            name="area"
            type="text"
            placeholder="e.g. Markham, Richmond Hill, Aurora"
            className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 font-normal text-gray-700 outline-none transition focus:border-[#D6B37F] focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#1F4E4C]">
          Due Date / Delivery Date
          <input
            name="dueDate"
            type="text"
            placeholder="e.g. 2026-09-15"
            className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 font-normal text-gray-700 outline-none transition focus:border-[#D6B37F] focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#1F4E4C]">
          Service Interested In *
          <select
            required
            name="service"
            defaultValue=""
            className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 font-normal text-gray-700 outline-none transition focus:border-[#D6B37F] focus:bg-white"
          >
            <option value="" disabled>
              Please select a meal program
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-[#1F4E4C]">
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your due date, delivery area, dietary restrictions, preferred start date, or any questions you have."
          className="resize-none rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 font-normal text-gray-700 outline-none transition focus:border-[#D6B37F] focus:bg-white"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full cursor-pointer justify-center rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white transition hover:bg-[#173D3B] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {buttonText}
      </button>

      {submitState === "success" && (
        <p className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
          We have received your consultation request. We will contact you as soon as possible by phone, WeChat, or WhatsApp.
        </p>
      )}

      {submitState === "error" && (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
