import Movies from "@/app/Backend/models/Movies";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import connectDb from "@/app/Backend/models/db";

export const GET = async (request: Request) => {
  let movie;
  try {
    await connectDb();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    console.log(type);
    if (type === "Serie") {
      movie = await Movies.aggregate([
        {
          $match: {
            isSeries: true,
          },
        },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movies.aggregate([
        {
          $match: {
            isSeries: false,
          },
        },
        {
          $sample: {
            size: 1,
          },
        },
      ]);
    }
    return NextResponse.json({
      movie,
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
