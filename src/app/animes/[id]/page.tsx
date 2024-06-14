"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Episode from "../../../../components/animes/Episode";

interface AnimeInfo {
  images: {
    webp: {
      image_url: string;
    };
  };
  title: string;
  year: number;
  score: number;
  genres: {
    name: string;
  }[];
  type: string;
  episodes: number;
  synopsis: string;
  rank: number;
  trailer: {
    embed_url: string;
  };
}
function Page() {
  const router = useRouter();
  const path = useParams();
  const id = path.id as string;
  const [info, setInfo] = useState<AnimeInfo>();
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        setInfo(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          router.push("/animes");
        } else {
          console.error(error);
        }
      }
    };

    getInfo();
  }, [id, router]);

  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const getEpisode = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/episodes`
        );
        setEpisode(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getEpisode();
  }, [id]);

  return (
    <div className=" flex flex-col justify-center items-center gap-2 px-3 pb-3 mt-24 text-slate-300  ">
      {info?.images.webp.image_url && (
        <Link href="/animes">
          <Image
            height={200}
            width={300}
            alt="img"
            src={info?.images.webp.image_url}
            className="h-[300px] w-[400px] cursor-pointer object-contain rounded-xl md:h-[400px] md:w-[500px]"
          />
        </Link>
      )}
      <div className="flex flex-col gap-3 py-3 px-3 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid rounded-lg ">
        <h1 className="text-red-600 text-xl"> {info?.title}</h1>
        <p className="text-red-600 text-xl">
          Year : <span className="text-yellow-400 text-xl">{info?.year}</span>
        </p>
        <button className="h-9 w-20 flex flex-row cursor-pointer items-center gap-1 bg-blue-500 px-3 rounded-lg hover:scale-105 hover:bg-blue-600 transition duration-200 ease-in shadow-sm shadow-white ">
          <p>Rate</p>
          <small>{info?.score}</small>
        </button>
        <p className="text-red-600 flex text-xl gap-2 flex-row">
          {info?.genres[0]?.name}
        </p>
        <p className="text-red-600 text-xl">
          Type : <span className="text-yellow-400 text-xl">{info?.type}</span>
        </p>
        <p className="text-red-600 text-xl">
          Episodes :{" "}
          <span className="text-yellow-400 text-xl">{info?.episodes}</span>
        </p>
        <p>
          <span className="text-yellow-400 text-xl">Description </span> :
          {info?.synopsis}
        </p>
        <p className="text-red-600 text-xl">
          Rank : <span className="text-yellow-400 text-xl">{info?.rank}</span>
        </p>
        {info?.trailer.embed_url && (
          <button className="h-12 w-28 text-black hover:text-slate-300 bg-amber-500 transition ease-in duration-200 hover:bg-transparent shadow-sm shadow-white rounded-lg ">
            <Link href={info?.trailer.embed_url}>Play Trailer</Link>
          </button>
        )}
      </div>
      {episode && info?.images.webp.image_url && (
        <div className="grid w-screen grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-2">
          {episode.map((item) => (
            <Episode key={1} item={item} img={info?.images.webp.image_url} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
