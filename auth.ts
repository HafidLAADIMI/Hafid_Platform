import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import userSchema from "./src/app/Backend/models/User";
import connectDb from "@/app/Backend/models/db";
import bcrypt from "bcryptjs";

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
          credentials.password,
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
const config = {
  providers: [credentialsConfig, GitHub],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
