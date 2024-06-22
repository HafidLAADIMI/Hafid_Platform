import User from "@/app/Backend/models/User";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import connectDb from "@/app/Backend/models/db";
export const DELETE = async (request: Request) => {
  try {
    await connectDb();
    const session = await auth();
    const { email } = await request.json();

    if (!session || !email) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    await User.findOneAndDelete({ email: email });
    return NextResponse.json({
      message: "the user was successfuly deleted",
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: err,
      status: 500,
    });
  }
};
