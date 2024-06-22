import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import User from "@/app/Backend/models/User";
import connectDb from "@/app/Backend/models/db";
export const GET = async (request: Request) => {
  try {
    await connectDb();
    const session = await auth();
    if (!session) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    const user = await User.find();
    if (!user) {
      return NextResponse.json({
        message: "there is no user with this email",
        status: 404,
      });
    }
    return NextResponse.json({
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
