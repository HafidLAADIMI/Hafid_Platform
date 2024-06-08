import { NextResponse } from "next/server";
import User from "@/app/Backend/models/User";
import connectDb from "@/app/Backend/models/db";
// in this api we are going to aggregate using the database , mongodb to manage the user registration
export const GET = async () => {
  try {
    await connectDb();
    const data = await User.aggregate([
      {
        $project: {
          month: {
            $month: "$createdAt",
          },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    return NextResponse.json({
      data,
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
