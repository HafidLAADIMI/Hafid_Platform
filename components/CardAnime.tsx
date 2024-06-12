"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
interface AnimeItem {
  mal_id: number;
  title: string;
  score: number;
  images: {
    webp: {
      image_url: string;
    };
  };
}

interface CardAnimeProps {
  item: AnimeItem;
}
function CardAnime({ item }: CardAnimeProps) {
  const router = useRouter();
  return (
    <div className=" backdrop-blur-sm bg-black shadow-sm shadow-white  flex flex-col gap-2 p-3 h-[206px] w-[150px] md:h-[306px] md:w-[200px] items-center justify-center">
      <div className=" flex rounded-lg items-center  h-[100px] w-[80px] md:h-[200px] md:w-[150px]  overflow-hidden">
        <Image
          onClick={() => router.push(`/animes/${item.mal_id}`)}
          height={800}
          width={800}
          alt={item.title}
          src={item.images.webp.image_url}
          className=" h-[100px] w-[80px] md:h-[200px] md:w-[150px] cursor-pointer object-contain rounded-lg transition duration-200 ease-in hover:scale-105 transform "
        />
      </div>
      <p className="text-[10px] text-ellipsis whitespace-normal overflow-hidden">
        {item.title}
      </p>
      <button className="h-8 flex flex-row cursor-pointer items-center gap-2 bg-blue-500 px-3 rounded-lg hover:scale-105 hover:bg-blue-600 transition duration-200 ease-in ">
        <p>Rate</p>
        <small>{item.score}</small>
      </button>
    </div>
  );
}

export default CardAnime;
