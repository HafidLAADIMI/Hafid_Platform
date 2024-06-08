"use client";
import React, { useState } from "react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
interface Props {
  session: Session | null;
}
function AuthFrom({ session }: Props) {
  const logo = "/mylogo.png";
  const bg = "/bgGold2.jpg";
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
    console.log(email, password);
    try {
      await signIn("credentials", { email, password, callbackUrl: "/movies" });
    } catch (error: any) {
      const errorMessage = error.message || "An error occurred";
      setError(errorMessage);
    }
  };
  const logout = async () => {
    await signOut();
  };
  const githubLogin = async () => {
    await signIn("github", { callbackUrl: "/movies" });
  };

  const body = "/bgbody2.avif";
  if (!session) {
    return (
      <div
        style={{
          backgroundImage: `url(${body}) `,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" flex h-screen flex-row w-screen justify-center items-center p-5 "
      >
        <form
          onSubmit={login}
          className="flex flex-col mt-[4%] backdrop-blur-sm bg-black/60  h-[80vh] w-[40vw] gap-12 items-center shadow-sm rounded-lg shadow-white max-sm:w-[90vw] max-sm:h-[60vh]  sm:w-[70vw] sm:h-[70vh] justify-center sm:gap-16 md:w-[60vw] lg:w-[50vw] xl:w-[40vw] xl:gap-12 "
        >
          <p>{error && error}</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="  text-slate-200 h-10 bg-amber-700 rounded-lg shadow-md items-center pl-4 outline-none "
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="  text-slate-200 h-10 bg-amber-700 rounded-lg shadow-md items-center pl-4 outline-none "
          />
          <div className="flex flex-row gap-2">
            <button
              className="bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200"
              type="submit"
            >
              <Link href="/login">Register</Link>
            </button>
          </div>
          <button
            className="bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200 flex flex-row items-center gap-1 pl-1"
            onSubmit={githubLogin}
          >
            <FaGithub className=" text-xl" />
            GitHub
          </button>
        </form>
      </div>
    );
  } else
    return (
      <div
      style={{
        backgroundImage: `url(${body}) `,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
        className=" backdrop-blur-sm bg-black/60 items-center justify-center flex font-sans h-screen w-screen "
      >
        <div className="flex flex-col backdrop-blur-sm bg-black/60 shadow-sm shadow-white h-[80vh] w-[40vw] gap-10 pt-3 pb-32 items-center rounded-lg max-sm:w-[90vw] max-sm:h-[60vh] sm:w-[70vw] sm:h-[60vh] md:w-[60vw] lg:w-[50vw] xl:w-[30vw] xl:h-[70vh]">
          <Link href="/">
            <Image
              src={logo}
              height={300}
              width={400}
              alt="logo"
              className="h-[32vh] w-[24vw] object-contain shadow-sm shadow-white hover:scale-105 transition ease-in duration-500 cursor-pointer max-sm:h-[15vh] max-sm:w-[40vw] sm:h-[18vh] sm:w-[40vw] md:w-[30vw] lg:w-[15vw]  "
            />
          </Link>
          <h1 className=" break-words text-ellipsis whitespace-normal ml-2">
            Are you sure you want to sign out of{" "}
            <span className="text-amber-500 cursor-pointer">
              {" "}
              <Link href="/">Hafid Platform</Link>{" "}
            </span>{" "}
            ? We hope you enjoyed your time watching movies with us. If you sign
            out, you’ll need to log back in to continue accessing your
            personalized recommendations and watchlist. See you again soon!
          </h1>

          <button
            onClick={logout}
            className="bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200"
            type="submit"
          >
            Sign out
          </button>
        </div>
      </div>
    );
}

export default AuthFrom;
