"use client";
import React, { useEffect, useState } from "react";
import Navmovies from "../../../components/movies/Navmovies";
import Featured from "../../../components/movies/Featured";
import ListItem from "../../../components/test/ListItems";
import { auth } from "../../../auth";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useTypeContext } from "@/typeContext";

function Page() {
  const { data: session } = useSession();
  const { type } = useTypeContext();
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [error, setError] = useState<any>();
  // fetching random list from the APIs
  useEffect(() => {
    const fetchRandomList = async () => {
      try {
        const response = await axios.get(
          `/api/getList${type ? "?type=" + type : ""}${
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
  }, []);
  const body = "/bgbody2.avif";
  const logo = "/mylogo.png";
  const bg = "/bgCool4.jpg";
  if (session)
    return (
      <div className=" bg-black backdrop-blur-sm relative  items-center font-sans w-screen flex flex-col gap-10 overflow-hidden">
        <Navmovies />
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
        <div className="flex flex-col backdrop-blur-sm bg-black/60 shadow-sm shadow-white gap-2 items-center rounded-lg p-4  m-10 md:mx-36 lg:mx-52 xl:mx-64">
          <Link href="/">
            <Image
              src={logo}
              height={300}
              width={400}
              alt="logo"
              className=" h-[250px] w-[350px]  object-contain hover:scale-105 transition ease-in duration-500 cursor-pointer   "
            />
          </Link>
          <p className=" break-words whitespace-normal text-ellipsis ">
            Welcome to{" "}
            <span className="text-amber-500 cursor-pointer">
              {" "}
              <Link href="/">Hafid Platform</Link>{" "}
            </span>{" "}
            , your premier destination for streaming the latest and greatest
            movies! We're thrilled to have you here. To get the most out of your
            experience, please sign in or create an account. By joining us,
            you'll unlock access to our extensive library of films, personalized
            recommendations, and the ability to create your own watchlist. Don't
            miss out on the excitement—sign in if you're already a member, or
            sign up to start your cinematic adventure with Hafid Platform today!
          </p>
          <div className="flex flex-row gap-2">
            <button
              className="bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200"
              type="submit"
            >
              <Link href="/auth">Login</Link>
            </button>
            <button
              className="bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200"
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
