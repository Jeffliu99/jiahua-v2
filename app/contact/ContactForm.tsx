"use client";

import { FormEvent, useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "30天月子餐方案",
  "剖腹产恢复方案",
  "哺乳期营养方案",
  "高端定制方案",
  "还不确定，想先咨询",
];

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = submitState === "submitting";

  const buttonText = useMemo(() => {
    if (submitState === "submitting") return "正在提交...";
    if (submitState === "success") return "已提交，感谢咨询";
    return "提交预约咨询";
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "提交失败，请稍后再试。支持直接通过微信或 WhatsApp 联系我们。");
      }

      setSubmitState("success");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(error instanceof Error ? error.message : "提交失败，请稍后再试。");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {/* Honeypot field: normal visitors will not see or fill this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#1F4E4C]">姓名 *</span>
          <input
            required
            name="name"
            type="text"
            placeholder="请输入您的姓名"
            className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#1F4E4C]">电话 / WhatsApp *</span>
          <input
            required
            name="phone"
            type="tel"
            placeholder="请输入联系电话"
            className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#1F4E4C]">邮箱</span>
          <input
            name="email"
            type="email"
            placeholder="方便的话可填写邮箱"
            className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#1F4E4C]">所在区域 *</span>
          <input
            required
            name="area"
            type="text"
            placeholder="例如 Markham / Richmond Hill / North York"
            className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#1F4E4C]">预产期 / 生产日期</span>
          <input
            name="dueDate"
            type="text"
            placeholder="例如 2026-08-15 或 已生产"
            className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#1F4E4C]">想了解的服务 *</span>
          <select
            required
            name="service"
            defaultValue=""
            className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
          >
            <option value="" disabled>
              请选择服务方案
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#1F4E4C]">留言</span>
        <textarea
          name="message"
          rows={5}
          placeholder="可以简单说明您的情况、配送区域、饮食偏好或想咨询的问题。"
          className="resize-none rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting || submitState === "success"}
        className="rounded-full bg-[#1F4E4C] px-8 py-3.5 text-center font-semibold text-white transition hover:bg-[#173D3B] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {buttonText}
      </button>

      {submitState === "success" && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-800">
          已收到您的预约咨询。我们会尽快通过电话、微信或 WhatsApp 与您联系。
        </div>
      )}

      {submitState === "error" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
