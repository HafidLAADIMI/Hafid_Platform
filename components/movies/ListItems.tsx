"use client";
import React, { useState } from "react";
import Items from "../movies/Items";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
interface Item {
  id: number;
  title: string;
  desc: string;
  img: string;
  video: string;
}

interface List {
  content: Item[];
}

interface ListItemsProps {
  list: List;
}
function ListItems({ list }: ListItemsProps) {
  const items = list.content;
  const [index, setIndex] = useState(0);
  const itemsPerView = Math.floor(window.innerWidth / 288); // Adjust this based on item width
  const maxIndex = items.length - itemsPerView;

  const prev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : maxIndex));
  };

  return (
    <div className="relative ml-0 mr-2 pr-3 w-[96vw] items-center justify-center mb-[5vh] mt-[5vh] ">
      <div className="flex relative flex-row ml-5 mr-5 gap-4 pl-2 pr-2 h-32 w-[230vw] transition ease-out duration-150 overflow-hidden ">
        {items.map((item, idx) => (
          <Items key={idx} items={item} index={index} />
        ))}
      </div>
      <div
        className={`flex text-4xl absolute top-0 bottom-0 h-full cursor-pointer transition ease-in duration-150 bg-white opacity-50 text-black hover:opacity-75 items-center left-0 z-10 ${
          index === 0 ? "invisible" : ""
        }`}
        onClick={prev}
      >
        <MdOutlineArrowBackIosNew />
      </div>
      <div
        className={`flex text-4xl top-0 bottom-0 cursor-pointer transition ease-in duration-150 bg-white opacity-50 text-black hover:opacity-75 right-0 items-center absolute h-full z-10 ${
          index === maxIndex ? "invisible" : ""
        }`}
        onClick={next}
      >
        <MdOutlineArrowForwardIos />
      </div>
    </div>
  );
}

export default ListItems;
