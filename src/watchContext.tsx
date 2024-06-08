"use client"
import { createContext,useContext } from "react";
import { useState } from "react";
const movieContext=createContext<any>(undefined);
export const MovieContextWrapper=({
    children,
  }: {
    children: React.ReactNode;
  }) =>{
    const [url,setUrl]=useState<any>();
    return(
        <movieContext.Provider value={{url,setUrl}}>
            {children}
        </movieContext.Provider>
    )
}
export const useMovieContext=()=>useContext(movieContext);