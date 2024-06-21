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
    <div className="flex flex-col gap-2 top-20 h-[20vh] w-[26vw] rounded-lg  bg-slate-800 items-center border border-slate-700 border-solid hover:bg-slate-700 transition ease-in duration-200 cursor-pointer ">
      <div className="flex flex-row items-center gap-2 justify-between  ">
        <SiVirustotal />
        Total : {props.title}
      </div>
      <p className="text-2xl text-blue-600">{props.number}</p>
      <p>
        <span className="text-green-600">{props.average}</span> per month
      </p>
    </div>
  );
}

export default CardDash;
