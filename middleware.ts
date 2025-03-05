import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // console.log("Request Pathname:", request.nextUrl.pathname);
  // console.log("Authentication Cookie:", request.cookies.get("privy-authenticated")?.value);

  const { pathname } = request.nextUrl;

  // List of restricted routes
  const blockList = ["/dashboard", "/admin", "/private"];

  const isRestricted = blockList.some((route) => pathname.startsWith(route));

  if (!isRestricted) {
    // console.log("Public route accessed or route not in block list.");
    return NextResponse.next();

  // Authentication check

  if (!isAuthenticated) {
    return NextResponse.redirect(url);

}

// Matcher configuration for middleware
export const config = {
  matcher: ["/:path*"], // Apply middleware to all routes
};
