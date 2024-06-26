"use client";

import { FaUser } from "react-icons/fa";
import { MdOutlineLocalMovies, MdOutlineSpaceDashboard } from "react-icons/md";
import { VscListSelection, VscSignOut } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi2";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { auth } from "../auth";
import { useSessionContext } from "@/sessionContext";
import Image from "next/image";
function Other() {
  const img = "/noavatar.jpg";
  const { session } = useSessionContext();
  const logout = async () => {
    await signOut();
  };
  return (
    <div className="fixed overflow-auto z-40 h-screen mt-20 bg-black border-r border-slate-700 text-slate-300">
      {/* Desktop version */}
      <div className="hidden md:flex flex-col h-full w-[22vw] p-4">
        <div className="flex flex-col items-center mb-6">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              height={100}
              width={100}
              alt="img"
              className=" h-16 w-16 rounded-full"
            />
          ) : (
            <Image
              src={img}
              height={100}
              width={100}
              alt="img"
              className=" h-16 w-16 rounded-full"
            />
          )}
          <div className="flex flex-col  ">
            {session?.user?.name ? (
              <p>{session?.user?.name}</p>
            ) : (
              <p>{session?.user?.email}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <p className="text-sm uppercase font-bold">Pages</p>
          <div className="flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400 hover:text-black transition ease-in duration-300"
            >
              <MdOutlineSpaceDashboard className="text-2xl" />
              <p className="text-lg">Dashboard</p>
            </Link>
            <Link
              href="/dashboard/users"
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400 hover:text-black transition ease-in duration-300"
            >
              <HiOutlineUsers className="text-2xl" />
              <p className="text-lg">Users</p>
            </Link>
            <Link
              href="/dashboard/movies"
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400 hover:text-black transition ease-in duration-300"
            >
              <MdOutlineLocalMovies className="text-2xl" />
              <p className="text-lg">Movies</p>
            </Link>
            <Link
              href="/dashboard/lists"
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400 hover:text-black transition ease-in duration-300"
            >
              <VscListSelection className="text-2xl" />
              <p className="text-lg">Lists</p>
            </Link>
          </div>
          <div
            className="mt-auto flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400 hover:text-black transition ease-in duration-300 cursor-pointer"
            onClick={logout}
          >
            <VscSignOut className="text-2xl" />
            <p className="text-lg">Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;
