import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  area?: string;
  dueDate?: string;
  service?: string;
  message?: string;
  website?: string;
};

function clean(value?: string) {
  return String(value || "").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#173D3B;font-weight:600;white-space:pre-wrap;">${escapeHtml(value || "未填写")}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot anti-spam field. Real visitors should never fill this.
    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const area = clean(body.area);
    const dueDate = clean(body.dueDate);
    const service = clean(body.service);
    const message = clean(body.message);

    if (!name || !phone || !area || !service) {
      return NextResponse.json(
        { ok: false, message: "请填写姓名、电话、所在区域和想了解的服务。" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "加华月子餐 <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { ok: false, message: "表单邮件服务尚未配置。请检查环境变量。" },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("zh-CN", {
      timeZone: "America/Toronto",
      hour12: false,
    });

    const html = `
      <div style="font-family:Arial,'Microsoft YaHei',sans-serif;background:#faf8f5;padding:24px;">
        <div style="max-width:720px;margin:0 auto;background:#fff;border:1px solid #f0e8dd;border-radius:20px;overflow:hidden;">
          <div style="background:#1F4E4C;color:#fff;padding:20px 24px;">
            <h1 style="margin:0;font-size:22px;">新的预约咨询</h1>
            <p style="margin:8px 0 0;color:#f4d7a7;">来自加华月子餐官网表单</p>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:15px;">
            ${row("提交时间", submittedAt)}
            ${row("姓名", name)}
            ${row("电话 / WhatsApp", phone)}
            ${row("邮箱", email)}
            ${row("所在区域", area)}
            ${row("预产期 / 生产日期", dueDate)}
            ${row("想了解的服务", service)}
            ${row("留言", message)}
          </table>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `新的预约咨询：${name} - ${service}`,
        html,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Resend error:", result);
      return NextResponse.json(
        { ok: false, message: "邮件发送失败，请稍后再试，或直接通过微信 / WhatsApp 联系我们。" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, message: "提交失败，请稍后再试。" },
      { status: 500 }
    );
  }
}
