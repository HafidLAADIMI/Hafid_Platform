import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import connectDb from "@/app/Backend/models/db";
import List from "@/app/Backend/models/List";

export const GET = async (request: Request,{params}:any) => {
  let list;
  try {
    await connectDb();
    const {searchParams}= new URL(request.url);   
    const type=searchParams.get('type');
    const genre=searchParams.get('genre');
    const session = await auth();
    if (!session) {
      return NextResponse.json({
        message: "you are not authenticated",
        status: 401,
      });
    }
    if (type) {
      if (genre) {
        list = await List.aggregate([
          {
            $match: {
              type: type,
              genre: genre,
            },
          },
          {
            $sample: {
              size: 2,
            },
          },
        ]);
      } else {
        list = await List.aggregate([
          {
            $match: {
              type: type,
            },
          },
          {
            $sample: {
              size: 2,
            },
          },
        ]);
      }
    } else {
      list = await List.aggregate([
        {
          $sample: {
            size: 2,
          },
        },
      ]);
    }
    console.log(list);
    return NextResponse.json({
      list,
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
