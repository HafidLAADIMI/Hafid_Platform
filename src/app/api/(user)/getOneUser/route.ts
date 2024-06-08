import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import User from "@/app/Backend/models/User";
import connectDb from "@/app/Backend/models/db";
export const POST = async (request: Request) => {
  try {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const session = await auth();
    if (!session || !email) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({
        message: "there is no user with this email",

        status: 404,
      });
    }
    return NextResponse.json({
      message: "the user exsits",
      data: user,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: error,
      status: 500,
    });
  }
};
