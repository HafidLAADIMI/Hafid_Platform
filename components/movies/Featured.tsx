"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { useTypeContext } from "@/typeContext";
import axios from "axios";
function Featured() {
  const bg = "/bgCool2.jpg";
  const { type } = useTypeContext();
  const [film, setFilm] = useState([]);
  const [error, setError] = useState<any>();
  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(`/api/getRandomMovie?type=${type}`);
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
  }, [type]);

  return (
    <div className="backdrop-blur-sm bg-black/60 shadow-sm shadow-white  h-[95vh] w-[90vw] relative pl-[5%] mt-[7%] flex flex-col gap-7  rounded-lg max-sm:mt-[14%] pt-3 overflow-hidden pr-[5%] max-sm:h-[80vh] sm:h-[82vh] md:h-[86vh]  md:mt-[16%] lg:mt-[13%] xl:mt-[10%] xl:h-[95vh]">
      <div className=" flex flex-row gap-10 m-4  text-xl p-4 w-72 selection: h-10 items-center ">
        <label className="text-3xl cursor-pointer hover:text-red-700 text-red-600 ">
          {type === "movie" ? "Movies" : "Serie"}
        </label>

        <select
          size={4}
          name="genre"
          id="genre"
          className="text-black cursor-pointer bg-blue-700  flex w-[34vw] z-10 "
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
     
        <Image
          src={film.img}
          height={500}
          width={500}
          alt="imge"
          className="rounded-lg contain-content hover:scale-105 cursor-pointer transition ease-in-out duration-150  "
        />
      

      <p
        className="text-wrapper text-xl
       max-w-[50%] sm:text-teal-400 md:text-yellow-300 lg:text-green-500 xl:text-red-600 2xl:text-purple-600  "
      >
        {film.desc}
      </p>
      <div className="flex flex-row gap-4">
        <button className=" pr-3 shadow-lg active:text-white active:bg-slate-700 active:border-1  rounded h-12 w-24 text-xl pl-2 transition ease-in-out duration-150  flex gap-3 flex-row items-center cursor-pointer hover:bg-slate-500 hover:text-white bg-white text-black">
          <FaRegCirclePlay className="text-3xl" />
          <label className="cursor-pointer">Play</label>
        </button>
        <button className=" pr-3 shadow-lg active:text-white active:bg-slate-700 active:border-1  rounded h-12 w-24 text-xl pl-2 transition ease-in-out duration-150  flex gap-3 flex-row items-center cursor-pointer hover:bg-slate-500 hover:text-white bg-white text-black">
          <FaInfoCircle className="text-3xl" />
          <label className="cursor-pointer">Info</label>
        </button>
      </div>
    </div>
  );
}

export default Featured;
