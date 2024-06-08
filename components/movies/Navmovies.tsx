"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { useTypeContext } from "@/typeContext";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
function Navmovies() {
  const { setType } = useTypeContext();
  const logo = "/logo.svg";
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(true);

  const [navbar, setNavbar] = useState(false);

  const clickLogo = () => {
    setIsClicked(isClicked ? false : true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-screen z-50 ">
      <div className="fixed  right-[%] z-20 md:hidden top-2  ">
        <FaBars
          className={`text-3xl text-white bg-black hover:scale-105 transition ease-in duration-150 hover:bg-white hover:text-black rounded-lg shadow-sm ${
            navbar ? "hidden" : "block"
          }`}
          onClick={() => setNavbar(true)}
        />
        <IoCloseSharp
          className={`text-3xl text-white bg-black hover:scale-105 transition ease-in duration-150 hover:bg-white hover:text-black rounded-lg shadow-sm ${
            navbar ? "block" : "hidden"
          }`}
          onClick={() => setNavbar(false)}
        />
      </div>
      {/* Desktop navbar */}
      <div className="backdrop-blur-sm bg-white/30 top-1 hidden flex-row justify-between items-center w-screen pr-4 fixed z-30 shadow-sm  md:flex ">
        <Link href="/">
          <Image
            height={500}
            width={500}
            src={logo}
            alt="mess"
            className="h-[12vh] w-[10vw] bg-cover cursor-pointer hover:scale-105 transition ease-in-out duration-150"
          />
        </Link>
        <ul
          className={`h-[12vh] flex w-[90vw] flex-row justify-between items-center pr-4 pl-4`}
        >
          <Link
            className="cursor-pointer shadow-black shadow-md rounded-lg hover:scale-105 bg-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150"
            href="#"
            onClick={() => {
              setType("serie");
            }}
          >
            Series
          </Link>
          <Link
            className="cursor-pointer shadow-black shadow-md rounded-lg hover:scale-105 bg-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150"
            href="#"
            onClick={() => {
              setType("movie");
            }}
          >
            Movies
          </Link>
          <div className="flex items-center flex-row gap-1.5">
            <input
              className="outline-none border-2 transition ease-in-out duration-150 hover:scale-105 text-black border-black rounded-lg pl-2 p-1"
              placeholder="search"
            />
            <FaSearch className={`cursor-pointer hover:scale-105 size-6 `} />
          </div>
          <Link
            className="cursor-pointer shadow-black shadow-md rounded-lg hover:scale-105 bg-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150"
            href="#"
          >
            MyListe
          </Link>
          <div className="relative  w-16 ">
            <Link href="#">
              <RxAvatar
                className="size-8 cursor-pointer rounded-lg hover:scale-105 bg-black shadow-md shadow-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150bg-black "
                onClick={clickLogo}
              />
            </Link>
            <div
              className={`absolute mt-2 pt-2  mr-11 items-center text-white flex flex-col bg-black h-14 w-16 transition ease-linear duration-150 cursor-pointer ${
                isClicked ? "hidden" : "block"
              }`}
            >
              <Link href="/">
                <MdOutlineLogout className="cursor-pointer text-3xl" />
              </Link>
            </div>
          </div>
        </ul>
      </div>

      {/* Mobile navbar */}
      <div
        style={{ transform: navbar ? "translateY(0)" : "translateY(-100%)" }}
        className="backdrop-blur-sm bg-white/30 top-0 flex flex-col justify-between  w-screen pr-4 fixed z-10 shadow-sm md:hidden h-[65vh] items-start pb-3 transition ease-in duration-500"
      >
        <Link href="/">
          <Image
            height={900}
            width={900}
            src={logo}
            alt="logo"
            className="h-[25vh] w-[30vw]  bg-cover cursor-pointer hover:scale-105 transition ease-in-out duration-150"
          />
        </Link>
        <ul
          className={`h-[50vh] flex w-[90vw] flex-col justify-between  pr-4 pl-4 items-start`}
        >
          <div className="flex items-center flex-row gap-1">
            <input
              className="outline-none flex border-2 transition ease-in-out w-[30vw] duration-150 hover:scale-105 text-black border-black rounded-lg pl-2 p-1"
              placeholder="search"
            />
            <FaSearch className={`cursor-pointer hover:scale-105 size-6 `} />
          </div>
          <Link
            className="cursor-pointer shadow-black shadow-md rounded-lg hover:scale-105 bg-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150"
            href="#"
            onClick={() => {
              setType("serie");
            }}
          >
            Series
          </Link>
          <Link
            className="cursor-pointer shadow-black shadow-md rounded-lg hover:scale-105 bg-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150"
            href="#"
            onClick={() => {
              setType("movie");
            }}
          >
            Movies
          </Link>
          <Link
            className="cursor-pointer shadow-black shadow-md rounded-lg hover:scale-105 bg-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150"
            href="#"
          >
            MyListe
          </Link>
          <div className="relative  w-16 ">
            <Link href="#">
              <RxAvatar
                className="size-8 cursor-pointer rounded-lg hover:scale-105 bg-black shadow-md shadow-black hover:rounded-lg text-white hover:bg-white hover:text-black transition ease-in-out duration-150bg-black "
                onClick={clickLogo}
              />
            </Link>
            <div
              className={`absolute mt-2 pt-2  mr-11 items-center text-white flex flex-col bg-black h-14 w-16 transition ease-linear duration-150 cursor-pointer ${
                isClicked ? "hidden" : "block"
              }`}
            >
              <Link href="/">
                <MdOutlineLogout className="cursor-pointer text-3xl" />
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navmovies;
