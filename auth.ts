import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import userSchema from "./src/app/Backend/models/User";
import connectDb from "@/app/Backend/models/db";
import bcrypt from "bcryptjs";
interface credentials{
   email:string,
  password:string
}
const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    try {
      await connectDb();
      const existUser = await userSchema.findOne({
        email: credentials.email,
      });

      if (existUser) {
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          existUser.password
        );

        if (isPasswordCorrect) {
          return existUser;
        } else {
          throw new Error("the password is incorrect");
        }
      }
    } catch (error) {
      throw new Error("invalid information");
    }
  },
});

pages: {
  signIn: "/auth";
  signOut: "/auth";
}
session: {
  strategy: "jwt"
}
const config = {
  providers: [credentialsConfig, GitHub,Google],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
