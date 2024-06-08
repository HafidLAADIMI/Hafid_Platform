"use client";
import { createContext, useState, useContext, Children } from "react";

// there is 3 steps to create a context api in nextjs 14 and react generaly

// first setp: create the context using the createContext hook from react
const TypeContext = createContext<any>("movie");

//  second step:is to create a provider that will pass the state over all the other component
export const TypeContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [type, setType] = useState<any>();
  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
};

// last step :is to create a function that we will call everytime we need to use this context, it will return useContext(TheCreatedContext)
 export const useTypeContext = ()=>useContext(TypeContext);

 
// =====> you should wrap the layout or the parent component with this provider to be able to share data accross other components
