import React from "react";
import { Ellipsis } from "react-css-spinners";
function loading() {
  return (
    <div className=" bg-black h-screen w-screen flex  justify-center items-center">
      <Ellipsis color="rgba(240,229,240,1)" size={86} />
    </div>
  );
}

export default loading;
