import connectDb from "@/app/Backend/models/db";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import Movies from "@/app/Backend/models/Movies";
export const GET = async (request: Request) => {
  try {
    const session = await auth();
    // if (!session) {
    //   return NextResponse.json({
    //     message: "you are not authenticated",
    //     status: 401,
    //   });
    // }
    await connectDb();
    const movie = await Movies.find();
    if (!movie) {
      return NextResponse.json({
        message: "there is no movie with this title",
        status: 404,
      });
    }
    return NextResponse.json({
      movie,
      message: "there are the actual movies",
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
