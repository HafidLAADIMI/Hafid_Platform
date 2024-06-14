"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { useTypeContext } from "@/typeContext";
import axios from "axios";
interface Film {
  img: string;
  desc: string;
}
function Featured() {
  const { type } = useTypeContext();
  const [film, setFilm] = useState<Film | null>(null);
  const [error, setError] = useState<any>();
  const apiUrl = process.env.AUTH_URL;
  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getRandomMovie?type=${type}`);
        if (response) {
          setFilm(response.data.movie[0]);
        } else {
          setError("there is no response");
        }
      } catch (error: any) {
        console.error(error);
        setError(error);
      }
    };
    fetchRandomMovie();
  }, [type,apiUrl]);

  return (
    <div className="backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid mt-24 flex flex-col mx-10 gap-3 items-center justify-center py-4 w-[90vw] md:items-start md:mx-16 lg:mx-52 md:pl-10 md:w-[70vw]  md:mt-24">
      <div className=" flex flex-row items-center ">
        <label className="text-3xl cursor-pointer hover:text-red-700 text-red-600 ">
          {type === "movie" ? "Movies" : "Serie"}
        </label>

        <select
          size={4}
          name="genre"
          id="genre"
          className="text-black cursor-pointer bg-blue-700  flex w"
        >
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
        <div className="h-[290px] w-[390px] lg:h-[380px] lg:w-[490px] overflow-hidden">
      {film?.img && (

        <Image
          src={film?.img}
          height={500}
          width={500}
          alt="imge"
          className="rounded-lg object-contain hover:scale-105 cursor-pointer transition ease-in-out duration-300 h-[300px] w-[400px] lg:h-[400px] lg:w-[500px] mx-4 md:mx-7"
          />
          )}
          </div>
      <p
        className="text-wrapper text-slate-300 text-xl
        "
      >
        {film?.desc}
      </p>
      <div className="flex flex-row gap-3 ">
        <button className=" pr-3 shadow-lg active:text-white active:bg-slate-700 active:border-1  rounded p-3 transition ease-in-out duration-200 gap-3 flex flex-row items-center cursor-pointer hover:bg-slate-500 hover:text-white bg-white text-black">
          <FaRegCirclePlay className="text-2xl" />
          <label className="cursor-pointer">Play</label>
        </button>
        <button className="  shadow-lg active:text-white active:bg-slate-700 active:border-1  rounded p-3  transition ease-in-out duration-200  flex gap-3 flex-row items-center cursor-pointer hover:bg-slate-500 hover:text-white bg-white text-black">
          <FaInfoCircle className="text-2xl" />
          <label className="cursor-pointer">Info</label>
        </button>
      </div>
    </div>
  );
}

export default Featured;
