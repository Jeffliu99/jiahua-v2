import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_COOKIE_NAME = "jiahua_admin_auth";

async function adminLogin(formData: FormData) {
  "use server";

  const password = String(formData.get("password") || "");
  const from = String(formData.get("from") || "/admin/blog");
  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionToken = process.env.ADMIN_SESSION_TOKEN;

  if (!adminPassword || !sessionToken) {
    redirect("/admin/login?error=missing-env");
  }

  if (password !== adminPassword) {
    redirect("/admin/login?error=wrong-password");
  }

  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect(from.startsWith("/admin") ? from : "/admin/blog");
}

function getErrorMessage(error?: string) {
  if (error === "wrong-password") {
    return "密码不正确，请重新输入。";
  }

  if (error === "missing-env") {
    return "后台登录环境变量还没有设置，请先在 .env 中加入 ADMIN_PASSWORD 和 ADMIN_SESSION_TOKEN。";
  }

  return "";
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams?: Promise<{
    error?: string;
    from?: string;
  }>;
}) {
  const params = searchParams ? await searchParams : {};
  const errorMessage = getErrorMessage(params?.error);
  const from = params?.from || "/admin/blog";

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-12 font-sans md:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm md:p-8">
          <div className="mb-7 text-center">
            <div className="mb-3 text-sm font-semibold text-[#B8915D]">
              加华月子餐后台
            </div>
            <h1 className="text-3xl font-bold text-[#1F4E4C]">后台登录</h1>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              请输入后台管理密码后继续访问 Blog 管理页面。
            </p>
          </div>

          {errorMessage && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {errorMessage}
            </div>
          )}

          <form action={adminLogin} className="space-y-5">
            <input type="hidden" name="from" value={from} />

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                后台密码
              </label>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F] focus:bg-white"
                placeholder="请输入后台密码"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-full bg-[#1F4E4C] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173D3B]"
            >
              登录后台
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm font-semibold text-[#1F4E4C] transition hover:text-[#D6B37F]"
            >
              返回网站首页
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
