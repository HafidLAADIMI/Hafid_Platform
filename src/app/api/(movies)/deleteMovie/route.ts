import connectDb from "@/app/Backend/models/db";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import Movies from "@/app/Backend/models/Movies";
export const DELETE = async (request: Request) => {
  try {
    const {searchParams} = new URL (request.url);
    const title=searchParams.get('title');
    const session = await auth();
    if (!session) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (!title) {
      return NextResponse.json({
        message: "you should provide the title of the movie",
        status: 401,
      });
    }
    const movie = await Movies.findOneAndDelete({ title: title });
    if (!movie) {
      return NextResponse.json({
        message: "there is no movie with this title",
        status: 404,
      });
    }
    return NextResponse.json({
      message: "the movie was successfuly deleted",
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
