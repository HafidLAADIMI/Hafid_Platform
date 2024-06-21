"use client";
import React, { useState } from "react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa6";

interface Props {
  session: Session | null;
}
function AuthFrom({ session }: Props) {
  const logo = "/mylogo.png";
  const [error, setError] = useState("");

  //  verify if the email is valid
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const login = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await signIn("credentials", { email, password, redirectTo: "/movies" });
    } catch (error: any) {
      const errorMessage = error.message || "An error occurred";
      setError(errorMessage);
    }
  };
  const logout = async () => {
    await signOut();
  };
  const githubLogin = async () => {
    await signIn("github", { redirectTo: "/movies" });
  };
  const googleLogin = async () => {
    await signIn("google", { redirectTo: "/movies" });
  };

  if (!session) {
    return (
      <div className=" bg-black flex h-screen flex-row w-screen justify-center items-center  ">
        <form
          onSubmit={login}
          className="flex flex-col mt-24 backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid   gap-12 items-center shadow-sm rounded-lg  mx-4 pb-3 "
        >
          <p>{error && error}</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="  text-slate-200 h-10 bg-slate-700 border-slate-600 border border-solid0 rounded-lg shadow-md items-center pl-4 outline-none mx-3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="  text-slate-200 bg-slate-700 h-10 rounded-lg shadow-md border-slate-600 border border-soliditems-center pl-4 outline-none mx-3"
          />
          <div className="flex flex-row gap-2">
            <button
              className="rounded-lg shadow-md border-slate-600 border border-solid h-10 w-24  hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
              type="submit"
            >
              Login
            </button>
            <button
              className=" border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
              type="submit"
            >
              <Link href="/login">Register</Link>
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <button
              className=" border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200 flex flex-row items-center gap-1 pl-1"
              onClick={githubLogin}
                name="action"
                type="button"
              value="github"
            >
              <FaGithub className=" text-xl " />
              GitHub
            </button>
            <button
              className=" border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200 flex flex-row items-center gap-1 pl-1"
              onClick={googleLogin}
              name="action"
              type="button"
              value="google"
            >
              <FaGoogle className=" text-xl " />
              Google
            </button>
          </div>
        </form>
      </div>
    );
  } else
    return (
      <div className="bg-black items-center justify-center  flex font-sans h-screen w-screen ">
        <div className="flex flex-col mt-24 backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid  justify-center items-center mx-10 py-3 md:mx-24 lg:mx-56 xl:mx-64 gap-5 rounded-lg">
          <Link href="/">
            <Image
              src={logo}
              height={300}
              width={400}
              alt="logo"
              className=" object-contain  hover:scale-105 transition ease-in duration-500 cursor-pointer h-[290px] w-[390px] rounded-lg "
            />
          </Link>
          <h1 className=" break-words text-ellipsis text-slate-300 whitespace-normal ml-2">
            Are you sure you want to sign out of{" "}
            <span className=" text-blue-900 cursor-pointer">
              {" "}
              <Link href="/">Hafid Platform</Link>{" "}
            </span>{" "}
            ? We hope you enjoyed your time watching movies with us. If you sign
            out, you will need to log back in to continue accessing your
            personalized recommendations and watchlist. See you again soon!
          </h1>

          <div className="flex flex-row gap-2">
            <button
              onClick={logout}
              className="  border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
              type="submit"
            >
              Sign out
            </button>

            <button
              className="  border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
              type="submit"
            >
              <Link href="/">Home</Link>
            </button>
          </div>
        </div>
      </div>
    );
}

export default AuthFrom;
