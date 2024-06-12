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
    <div className=" backdrop-blur-sm bg-black shadow-sm shadow-white  flex flex-col gap-2 p-3 h-[306px] w-[200px] items-center justify-center">
      <Image
        onClick={() => router.push(`/animes/${item.mal_id}`)}
        height={800}
        width={800}
        alt={item.title}
        src={item.images.webp.image_url}
        className="h-[200px] w-[150px] cursor-pointer rounded-lg transition duration-200 ease-in hover:scale-105 "
      />
      <p className="text-xs">{item.title}</p>
      <button className="h-8 flex flex-row cursor-pointer items-center gap-2 bg-blue-500 px-3 rounded-lg hover:scale-105 hover:bg-blue-600 transition duration-200 ease-in ">
        <p>Rate</p>
        <small>{item.score}</small>
      </button>
    </div>
  );
}

export default CardAnime;
