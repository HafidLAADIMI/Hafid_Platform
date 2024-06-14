"use client";
import React, { useEffect, useState } from "react";
import Featured from "../../../components/movies/Featured";
import ListItem from "../../../components/movies/ListItems";

import Link from "next/link";
import Image from "next/image";

import { useSession } from "next-auth/react";
import axios from "axios";
import { useTypeContext } from "@/typeContext";
import { FaSearch } from "react-icons/fa";

function Page() {
  const { data: session } = useSession();
  const { type } = useTypeContext();
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [error, setError] = useState<any>();
  const apiUrl = process.env.AUTH_URL;
  // fetching random list from the APIs
  useEffect(() => {
    const fetchRandomList = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/getList${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`
        );
        if (response) {
          setLists(response.data.list);
          console.log(response.data.list);
        } else {
          setError("there is no response");
        }
      } catch (error: any) {
        console.error(error);
        setError(error);
      }
    };
    fetchRandomList();
  }, [genre, type,apiUrl]);

  const logo = "/mylogo.png";

  if (session)
    return (
      <div className=" bg-black backdrop-blur-sm relative  items-center font-sans w-screen flex flex-col gap-10 overflow-hidden">
        <div className="flex items-center flex-row gap-1.5">
          <input
            className="outline-none border-2 transition ease-in-out duration-150 hover:scale-105 text-black border-black rounded-lg pl-2 p-1"
            placeholder="search"
          />
          <FaSearch
            className={`cursor-pointer hover:scale-105 size-6 text-slate-300 `}
          />
        </div>
        <Featured />
        {lists.map((list, i) => (
          <ListItem key={i} list={list} />
        ))}
      </div>
    );
  else
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
            <p>{error}</p>
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

export default Page;
