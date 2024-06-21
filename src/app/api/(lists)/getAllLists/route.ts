import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import List from "@/app/Backend/models/List";
import connectDb from "@/app/Backend/models/db";
export const GET = async (request: Request) => {
  try {
    await connectDb();
    // const session = await auth();
    // if (!session) {
    //   return NextResponse.json({
    //     message: "you are not authenticated",
    //     status: 401,
    //   });
    // }
    const list = await List.find();
    if (!list) {
      return NextResponse.json({
        message: "there is no list ",
        status: 404,
      });
    }
    return NextResponse.json({
      list,
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
