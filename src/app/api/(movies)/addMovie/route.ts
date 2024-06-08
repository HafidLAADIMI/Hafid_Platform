import { NextResponse } from "next/server";
import Movies from "@/app/Backend/models/Movies";
import { auth } from "../../../../../auth";
import connectDb from "@/app/Backend/models/db";

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    console.log(data)
    const session = await auth();
    await connectDb();
    if (!session) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (!data) {
      return NextResponse.json({
        message: "you should provied informations about the movie",
        status: 404,
      });
    }
    const movie = new Movies(data);
    await movie.save();

    return NextResponse.json({
      message: "you are successfuly added the new movie",
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
