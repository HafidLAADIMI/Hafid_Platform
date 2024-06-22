import User from "@/app/Backend/models/User";
import { auth } from "../../../../../auth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connectDb from "@/app/Backend/models/db";
export const PUT = async (request: Request) => {
  try {
    await connectDb();
    const session = await auth();
    const { oldEmail, newUser } = await request.json();
    if (!session) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (!oldEmail || !newUser) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (!newUser) {
      return NextResponse.json({
        message: "you should provied an email and a password",
        status: 400,
      });
    }

    if (newUser.password) {
      newUser.password = await bcrypt.hash(newUser.password, 10);
    }
    await User.findOneAndUpdate({ email: oldEmail }, newUser, {
      new: true,
    });

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
