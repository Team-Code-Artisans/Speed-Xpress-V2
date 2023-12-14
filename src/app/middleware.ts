import { useAuth } from "@/hooks/useAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const { user } = useAuth();
console.log("user:", user);

const protectedRoutes = ["/login"];

export default function middleware(req: NextRequest) {
  if (!user && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
