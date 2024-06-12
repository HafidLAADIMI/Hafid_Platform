import Image from "next/image";
import Link from "next/link";
import React from "react";
interface itemEpisode {
  title: string;
  score: number;
  url: string;
}
interface EpisodeItem {
  item: itemEpisode;
  img: string;
}
function Episode({ item, img }: EpisodeItem) {
  return (
    <div className=" backdrop-blur-sm bg-black shadow-sm shadow-white  flex flex-col gap-2 p-3 h-[320px] w-[200px] items-center justify-center">
      <Image
        height={800}
        width={800}
        alt="episodes"
        src={img}
        className="h-[200px] w-[150px] cursor-pointer rounded-lg transition duration-200 ease-in hover:scale-105 "
      />
      <p className="text-xs text-ellipsis whitespace-normal overflow-hidden">{item.title}</p>
      <button className="h-8 flex flex-row cursor-pointer items-center gap-2 bg-blue-500 px-3 rounded-lg hover:scale-105 hover:bg-blue-600 transition duration-200 ease-in ">
        <p>Rate</p>
        <small>{item.score}</small>
      </button>
      {item.url && (
        <button className="h-8 flex  cursor-pointer items-center  bg-blue-500 px-3 rounded-lg hover:scale-105 hover:bg-blue-600 transition duration-200 ease-in ">
          <Link href={item.url}>Watch</Link>
        </button>
      )}
    </div>
  );
}

export default Episode;
