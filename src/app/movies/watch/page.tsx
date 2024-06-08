"use client"
import Link from "next/link";
import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useMovieContext } from "@/watchContext";
const Watch = () => {
  const {url}=useMovieContext();
  const trailer = {url};
  return (
    <div className="h-screen w-screen relative">
      <Link href='/movies' className="z-10 cursor-pointer flex flex-row text-2xl items-center">
        <IoArrowBackSharp className="text-2xl cursor-pointer"/>
        Back
      </Link>
      <video
        controls
        autoPlay={true}
        src={trailer}
        className=" absolute h-[96vh]  w-screen"
      />
    </div>
  );
};

export default Watch;
