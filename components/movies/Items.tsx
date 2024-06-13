"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { useMovieContext } from "@/watchContext";
interface Item {
  id: number;
  title: string;
  desc: string;
  img: string;
  video: string;
}

interface ItemsProps {
  index: number;
  items: Item;
}
function Items({ index, items }:ItemsProps) {
  const { setUrl } = useMovieContext();
  setUrl(items.video);
  const trailer = items.video;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex relative flex-row gap-4 transition ease-out duration-150 w-72 `}
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <Image
        alt="img"
        height={160} // Adjust height as needed
        width={288} // Same width as the video
        src={items.img}
        className="max-sm:object-cover sm:object-cover md:object-contain cursor-pointer hover:scale-105 transition ease-out duration-150"
      />

      {isHovered && (
        <div
          className={`absolute z-10 flex flex-col gap-2 bg-slate-100 text-black pl-2 h-56 mb-4 w-68 transition-opacity ease-out duration-150 items-center cursor-pointer ${
            isHovered ? "opacity-100 delay-150" : "opacity-0"
          }`}
        >
          <div>
            <video
              src={trailer}
              autoPlay
              loop
              muted
              className="h-16 w-60 object-cover"
            />
          </div>
          <div className="flex max-w-72 max-h-16 flex-col">
            <div className="flex flex-row gap-2 items-center">
              <Link href="/movies/watch">
                <CiPlay1 />
              </Link>
              <AiOutlineLike />
              <AiOutlineDislike />
            </div>
            <p className="text-sm">{items.title}</p>
            <p className="text-xs text-gray-600">{items.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Items;