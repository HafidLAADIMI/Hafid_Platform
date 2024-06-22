"use client"
import React from 'react'
import Home from '../../../components/animes/Home'
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
function Page() {
  const logo = "/mylogo.png";
  const { data: session } = useSession();
  if(session) return (
    <div className='flex flex-col gap-4'>
        <Home/>
    </div>
  )
  return (
    <div
      style={{}}
      className="  bg-black items-center justify-center flex font-sans h-screen w-screen "
    >
      <div className="flex flex-col backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid  gap-2 items-center rounded-lg p-4  mt-24 md:mx-36 lg:mx-52 xl:mx-64">
        <Link href="/">
          <Image
            src={logo}
            height={300}
            width={400}
            alt="logo"
            className=" h-[250px] w-[350px]  object-contain hover:scale-105 transition ease-in duration-500 cursor-pointer   "
          />
        </Link>
        <p className=" break-words text-slate-300 whitespace-normal text-ellipsis ">
          Welcome to{" "}
          <span className=" text-blue-800 cursor-pointer">
            {" "}
            <Link href="/">Hafid Platform</Link>{" "}
          </span>{" "}
          , your premier destination for streaming the latest and greatest
          movies! We are thrilled to have you here. To get the most out of
          your experience, please sign in or create an account. By joining us,
          you will unlock access to our extensive library of films,
          personalized recommendations, and the ability to create your own
          watchlist. Do not miss out on the excitement—sign in if you are
          already a member, or sign up to start your cinematic adventure with
          Hafid Platform today!
        </p>
        <div className="flex flex-row gap-2">
          <button
            className="bg-slate-700 h-10 w-24 border-slate-600 border border-solid rounded-lg  hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-300"
            type="submit"
          >
            <Link href="/auth">Login</Link>
          </button>
          <button
            className="bg-slate-700 h-10 w-24 border-slate-600 border border-solid rounded-lg  hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-300"
            type="submit"
          >
            <Link href="/login">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page