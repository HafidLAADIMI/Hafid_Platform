import { NextResponse } from "next/server";
import List from "@/app/Backend/models/List";
import { auth } from "../../../../../auth";
import connectDb from "@/app/Backend/models/db";

export const PUT = async (request: Request) => {
  try {
    await connectDb();

    const { oldTitle,newList } = await request.json();
  

    const session = await auth();
    // if (!session) {
    //   return NextResponse.json({
    //     message: "you are not authenticated",
    //     status: 401,
    //   });
    // }

    if (!oldTitle || !newList) {
      return NextResponse.json({
        message: "you should provide a data and a the title of the movie",
        status: 403,
      });
    }
    const list = await List.findOneAndUpdate({ title: oldTitle }, newList, {
      new: true,
    });
    if (!list) {
      return NextResponse.json({
        message: "there is no movie with this title",
        status: 404,
      });
    }
    return NextResponse.json({
      message: "you  are successfuly updated the movie",
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
