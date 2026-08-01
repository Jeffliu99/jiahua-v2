import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE_NAME = "jiahua_admin_auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const sessionToken = process.env.ADMIN_SESSION_TOKEN;
  const cookieToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

  if (!sessionToken || cookieToken !== sessionToken) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
