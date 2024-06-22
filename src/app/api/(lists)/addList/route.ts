import List from "@/app/Backend/models/List";
import { auth } from "../../../../../auth";
import { NextResponse } from "next/server";
import connectDb from "@/app/Backend/models/db";
export const POST = async (request: Request) => {
  try {
    await connectDb();
    const session = await auth();
    const data = await request.json();
    if (!session) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (!data) {
      return NextResponse.json({
        message: "you should provide a data",
        status: 402,
      });
    }
    const list = new List(data);
    await list.save();
    return NextResponse.json({
      message: "the list was added successfuly",
      status: 200,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      messge: error.toString(),
      status: 500,
    });
  }
};
