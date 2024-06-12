"use client"
import { createContext,useContext } from "react";
import { useState } from "react";
const searchAnimeContext=createContext<any>(undefined);
export const SearchAnimeContextWrapper=({
    children,
  }: {
    children: React.ReactNode;
  }) =>{
    const [searchAnime,setSearchAnime]=useState<any>();
    return(
        <searchAnimeContext.Provider value={{searchAnime,setSearchAnime}}>
            {children}
        </searchAnimeContext.Provider>
    )
}
export const useSearchAnimeContext=()=>useContext(searchAnimeContext);