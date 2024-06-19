import { NextResponse } from "next/server";

export const middleware = (request) => {
  const user = true;
  const cookies = request.cookies.get("token");
  console.log(cookies);
  const cookie = "my-token";
  //   if (request.nextUrl.pathname.startsWith("/Service")) {
  //     return NextResponse.redirect(new URL("/About", request.url));
  //   }
  //   if (!user) {
  //     return NextResponse.redirect(new URL("/Login", request.url));
  //   }
  //   return NextResponse.next();
  if (!cookies || cookies.value !== cookie) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
  return NextResponse.next();
};
export const config = {
  matcher: ["/dashboard", "/Service"],
};
