import User from "@/app/Backend/models/User";
import { auth } from "../../../../../auth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connectDb from "@/app/Backend/models/db";
export const PUT = async (request: Request) => {
  try {
    await connectDb();
    const session = await auth();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const newEmail = searchParams.get("newEmail");
    const newPassword = searchParams.get("newPassword");

    if (!session || !email) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (!newPassword && !newEmail) {
      return NextResponse.json({
        message: "you should provied an email and a password",
        status: 400,
      });
    }
    const newData: { email?: string; password?: string } = {};
    if (newEmail) {
      newData.email = newEmail;
    }
    if (newPassword) {
      newData.password = await bcrypt.hash(newPassword, 10);
    }
    const newUser = await User.findOneAndUpdate({ email: email }, newData, {
      new: true,
    });
    if (!newUser) {
      return NextResponse.json({
        message: "user not found",
        status: 404,
      });
    }
    return NextResponse.json({
      message: "the data was successfuly updated",
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
