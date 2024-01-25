import { NextResponse } from "next/server";

export const POST = async () => {
  const response = new NextResponse(
    JSON.stringify({
      success: true,
      message: "Logout successfully",
    })
  );

  response.cookies.set("access_token", "", {
    expires: new Date(Date.now()),
  });

  return response;
};
