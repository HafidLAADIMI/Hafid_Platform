"use client";
import React from "react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const logo = "/logo.svg";
  const [isClicked, setIsClicked] = useState(false);
  const closeNavbar=()=>setIsClicked(false)
  return (
    <>
      <div
        style={{
          transform: isClicked ? "translateX(0)" : "translateX(100%)",
        }}
        className={`backdrop-blur-sm box-border bg-slate-400/70 border border-slate-700 border-solid flex justify-between w-screen h-auto items-center shadow-lg fixed  top-20 p-4 pr-9 pl-9 z-50 transition-transform ease-in duration-500 max-sm:flex-col sm:flex-col max-sm:h-[50vh] max-sm:gap-5 max-sm:items-start sm:h-[50vh] sm:gap-5 sm:items-start md:hidden `}
      >
        <Link
          className=" transition ease-in duration-200 border border-solid border-slate-700   text-black shadow-black shadow-sm hover:bg-white hover:text-black hover:scale-105"
          href="/movies"
          onClick={closeNavbar}
        >
          Movies
        </Link>
        <Link
          className="transition ease-in duration-200  border border-solid border-slate-700 text-black    shadow-black shadow-sm hover:bg-white hover:text-black hover:scale-105"
          href="/books"
          onClick={closeNavbar}
        >
          Books
        </Link>
        <Link
          className=" transition ease-in duration-200  border border-solid border-slate-700 text-black  shadow-black shadow-sm hover:bg-white hover:text-black hover:scale-105"
          href="/animes"
          onClick={closeNavbar}
        >
          Animes
        </Link>
      </div>
      <div
        className={` bg-black box-border  border border-slate-700 border-solid  flex-row justify-between  w-screen h-20 items-center shadow-lg fixed top-0 p-4 pr-9 pl-9 z-100 transition-transform ease-in duration-500 flex z-20 `}
      >
        <Link
          className=" items-center justify-center border border-solid border-slate-700 transition ease-in duration-200  text-slate-300 shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105 flex md:hidden h-9 w-14 active:bg-slate-700  "
          href="/auth"
          onClick={closeNavbar}
        >
          Login
        </Link>
        <Link href="/">
          <Image
            height={500}
            width={500}
            src={logo}
            alt="mess"
            className=" h-[60px] w-[100px] object-contain   md:w-[8vw] bg-slate-300 text-slate-300 md:object-contain cursor-pointer hover:scale-105 transition ease-in-out duration-500 rounded-full "
            onClick={closeNavbar}
          />
        </Link>
        <div className=" z-20 md:hidden ">
          <FaBars
            className={`text-3xl text-slate-300 border border-solid border-slate-700  hover:scale-105 transition ease-in duration-150 hover:bg-white hover:text-black hover:rounded-lg shadow-sm ${
              isClicked ? "hidden" : "block"
            }`}
            onClick={() => setIsClicked(true)}
          />
          <IoCloseSharp
            className={`text-3xl text-slate-300 border border-solid border-slate-700 hover:scale-105 transition ease-in duration-150 hover:bg-white hover:text-black hover:rounded-lg shadow-sm ${
              isClicked ? "block" : "hidden"
            }`}
            onClick={() => setIsClicked(false)}
          />
        </div>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-slate-300 shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105 hidden md:flex "
          href="/movies"
        >
          Movies
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-slate-300 shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105 hidden md:flex "
          href="/register"
        >
          Books
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-slate-300 shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105 hidden md:flex "
          href="/animes"
        >
          Animes
        </Link>
        <Link
          className=" items-center justify-center border border-solid border-slate-700  transition ease-in duration-200  text-slate-300 shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105 hidden md:flex h-9 w-14  "
          href="/auth"
  
        >
          Login
        </Link>
      </div>
    </>
  );
}

export default Navbar;
