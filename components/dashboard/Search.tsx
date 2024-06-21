import React from "react";
import { FaSearch } from "react-icons/fa";
interface PlaceholderProps {
  placeholder: string;
}
function Search({ placeholder }: PlaceholderProps) {
  return (
    <div className="flex flex-row gap-2 text-slate-300  bg-slate-800 rounded-lg items-center pr-2 ">
      <input
        className="flex pl-3 text-slate-300 outline-none h-10  bg-slate-800  rounded-lg "
        placeholder={placeholder}
      />
      <FaSearch className="text-2xl  text-slate-300" />
    </div>
  );
}

export default Search;
