import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import List from "@/app/Backend/models/List";
import connectDb from "@/app/Backend/models/db";
export const DELETE = async (request: Request) => {
  try {
    await connectDb();
    const session = await auth();
    const { title } = await request.json();

    if (!session) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (!title) {
      return NextResponse.json({
        message: "you should provied a title",
        status: 403,
      });
    }
    await List.findOneAndDelete({ title: title });
    return NextResponse.json({
      message: "the list was deleted successfuly",
      status: 200,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      message: error.toString(),
      status: 500,
    });
  }
};
