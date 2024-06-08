import userSchema from "../../../Backend/models/User";
import connectDb from "../../../Backend/models/db";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";


// here we are going to build an API that will handle the data from the frontend and save it to MongoDB
//  it is a POST request 
export const POST = async (request: any) => {
  const { email, password } = await request.json();//here we get the data from the frontend

//   here the logic comes
  try {
    await connectDb();
    // we check if the email and the password then we verify if the user already registred , if not we will
    // hash the password using bcrypt then save it to the database
    if (email && password) {
      const existingUser = await userSchema.findOne({ email });
      if (existingUser) {
        return NextResponse.json({
          status: 404,
          message: "the user exist before",
        });
      } else {
        const passwordHashed = await bcrypt.hash(password, 10);

        await new userSchema({
          email: email,
          password: passwordHashed,
        }).save();
        return NextResponse.json({
          status: 200,
          message: "the user added successfuly",
        });
      }
    } else {
      return NextResponse.json({
        status: 404,
        message: "email and password are required",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 403,
      message: error,
    });
  }
};


