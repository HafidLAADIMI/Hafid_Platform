"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineLocalMovies, MdOutlineSpaceDashboard } from "react-icons/md";
import { VscListSelection, VscSignOut } from "react-icons/vsc";
import { useSessionContext } from "@/sessionContext";
import Image from "next/image";
function OtherMobile() {
  const img='/noavatar.jpg'
  const [isClicked, setIsClicked] = useState(false);
 const {session}=useSessionContext();
  const logout = async () => {
    setIsClicked(false)
    await signOut();
  };
  return (
    <div className="flex flex-col w-0 z-40 bg-black fixed top-20 bg-transparent md:hidden">
      <div className=" fixed z-20 md:hidden ">
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

      {/* Mobile version */}
      <div
        style={{
          transform: isClicked ? "translateX(0)" : "translateX(-100%)",
        }}
        className=" md:hidden flex flex-col  transition-transform ease-in duration-300  overflow-auto bg-black border border-slate-700 border-solid    w-screen  items-start gap-4 py-4 "
      >
        <div
          className={`  flex flex-col md:flex-row w-full md:gap-5 items-center `}
        >
          {session?.user?.image?(

            <Image src={session?.user?.image} height={100} width={100} alt="img"  onClick={()=>setIsClicked(false)} className=" h-16 w-16 rounded-full" />
          ):(
            <Image src={img} height={100} width={100} alt="img"  onClick={()=>setIsClicked(false)} className=" h-16 w-16 rounded-full" />
          )
          }
          <div className="flex flex-col  ">
             {session?.user?.name ?(
               <p>{session?.user?.name}</p>
             ):(
              <p>{session?.user?.email}</p>
             )
            }
          </div>
        </div>
        <div className="flex pt-6 flex-col  h-[60vh] items-start gap-2 pb-2 w-full">
          <p>pages</p>
          <div className="flex pt-6 pl-4 flex-col bg-slate-900 h-[60vh] items-start gap-20 pb-2 w-full border border-slate-700 border-solid">
            <Link
             onClick={()=>setIsClicked(false)}
              href="/dashboard"
              className="flex flex-row gap-4 h-9 rounded-lg items-center w-[45%] hover:bg-slate-400 hover:text-black transition ease-in duration-300 "
            >
              <MdOutlineSpaceDashboard className="text-2xl" />
              <p>Dashboard</p>
            </Link>
            <Link
              onClick={()=>setIsClicked(false)}
              href="/dashboard/users"
              className="flex flex-row gap-4 h-9 rounded-lg items-center w-[45%] hover:bg-slate-400 hover:text-black transition ease-in duration-300 "
            >
              <HiOutlineUsers className="text-2xl" />
              <p>Users</p>
            </Link>
            <Link
              onClick={()=>setIsClicked(false)}
              href="/dashboard/movies"
              className="flex flex-row gap-4 h-9 rounded-lg items-center w-[45%] hover:bg-slate-400 hover:text-black transition ease-in duration-300"
            >
              <MdOutlineLocalMovies className="text-2xl" />
              <p>Movies</p>
            </Link>
            <Link
              onClick={()=>setIsClicked(false)}
              href="/dashboard/lists"
              className="flex flex-row gap-4 h-9 rounded-lg items-center w-[45%] hover:bg-slate-400 hover:text-black transition ease-in duration-300"
            >
              <VscListSelection className="text-2xl" />
              <p>Lists</p>
            </Link>
          </div>
          <div 
            onClick={logout}
          className=" flex flex-row gap-4 rounded-lg items-center  hover:bg-slate-400 hover:text-black transition ease-in duration-300 cursor-pointer mt-4 mb-2">
            <VscSignOut className="text-2xl" />
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherMobile;
