"use client"
import { createContext,useContext } from "react";
import { useState } from "react";
const sessionContext=createContext<any>(undefined);
export const SessionContextWrapper=({
    children,
  }: {
    children: React.ReactNode;
  }) =>{
    const [session,setSession]=useState<any>();
    return(
        <sessionContext.Provider value={{session,setSession}}>
            {children}
        </sessionContext.Provider>
    )
}
export const useSessionContext=()=>useContext(sessionContext);