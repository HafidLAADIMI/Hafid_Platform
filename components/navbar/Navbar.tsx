"use client";
import React from "react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="fixed top-2 right-2 z-20 md:hidden ">
        <FaBars
          className={`text-3xl text-white bg-black hover:scale-105 transition ease-in duration-150 hover:bg-white hover:text-black rounded-lg shadow-sm ${
            isClicked ? "hidden" : "block"
          }`}
          onClick={() => setIsClicked(true)}
        />
        <IoCloseSharp
          className={`text-3xl text-white bg-black hover:scale-105 transition ease-in duration-150 hover:bg-white hover:text-black rounded-lg shadow-sm ${
            isClicked ? "block" : "hidden"
          }`}
          onClick={() => setIsClicked(false)}
        />
      </div>

      <div
        style={{
          transform: isClicked ? "translateY(0)" : "translateY(-100%)",
        }}
        className={`backdrop-blur-sm bg-white/30 flex justify-between text-black w-screen h-20 items-center shadow-lg fixed top-0 p-4 pr-9 pl-9 z-10 transition-transform ease-in duration-500 max-sm:flex-col sm:flex-col max-sm:h-[70vh] max-sm:gap-5 max-sm:items-start sm:h-[70vh] sm:gap-5 sm:items-start md:hidden `}
      >
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/home"
        >
          Home
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/movies"
        >
          Movies
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/register"
        >
          Books
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/auth"
        >
          Animes
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/auth"
        >
          Login
        </Link>
      </div>
      <div
        className={`backdrop-blur-sm bg-white/30  flex-row justify-between text-black w-screen h-20 items-center shadow-lg fixed top-0 p-4 pr-9 pl-9 z-100 transition-transform ease-in duration-500 hidden md:flex z-20 `}
      >
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/home"
        >
          Home
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/movies"
        >
          Movies
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/register"
        >
          Books
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/auth"
        >
          Animes
        </Link>
        <Link
          className="tex rounded transition ease-in duration-200 bg-black text-white shadow-black shadow-md hover:bg-white hover:text-black hover:scale-105"
          href="/auth"
        >
          Login
        </Link>
      </div>
    </>
  );
}

export default Navbar;
