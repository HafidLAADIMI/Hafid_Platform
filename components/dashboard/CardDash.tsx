import React from "react";
import { SiVirustotal } from "react-icons/si";

interface Item {
  title: string;
  number: number;
  average: number;
}

interface ItemProps {
  props: Item;
}

function CardDash({ props }: ItemProps) {
  return (
    <div className="flex flex-col gap-2 justify-center h-[22vh] w-[80vw] md:w-[26vw] lg:w-[20vw] rounded-lg bg-slate-800 items-center border border-slate-700 hover:bg-slate-700 transition ease-in duration-200 cursor-pointer p-4">
      <div className="flex flex-row items-center gap-2 justify-between w-full text-white">
        <SiVirustotal size={24} />
        <span className="text-lg font-semibold">{props.title}</span>
      </div>
      <p className="text-4xl font-bold text-blue-500">{props.number}</p>
      <p className="text-sm">
        <span className="text-green-500 font-semibold">{props.average}</span> per month
      </p>
    </div>
  );
}

export default CardDash;
