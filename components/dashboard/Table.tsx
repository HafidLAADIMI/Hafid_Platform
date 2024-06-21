import Image from "next/image";
import React from "react";

function Table() {
  const img = "/naruto.jpg";
  return (
    <div className="w-[80vw] rounded-sm flex flex-col gap-2 bg-slate-800 items-center border border-slate-700 border-solid justify-center">
      <h2>Latset updates</h2>
      <table className="w-full border-collapse bg-blue-600">
        <thead className="bg-blue-500 text-white">
          <tr className=" border-b border-gray-200">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <div className=" flex flex-row gap-3 py-2 items-center">
                <Image
                  height={100}
                  width={100}
                  alt="img"
                  src={img}
                  className="h-10 w-10 rounded-full"
                />
                <p>Hafid</p>
              </div>
            </td>

            <td className=" bg-red-600   rounded-sm py-2 px-4">logged</td>
            <td className="py-2 px-4">01-02-2024</td>
          </tr>
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <div className=" flex flex-row gap-3 py-2 items-center">
                <Image
                  height={100}
                  width={100}
                  alt="img"
                  src={img}
                  className="h-10 w-10 rounded-full"
                />
                <p>Hafid</p>
              </div>
            </td>
            <td className=" bg-green-600   rounded-sm py-2 px-4">logged</td>
            <td className="py-2 px-4">01-02-2024</td>
          </tr>
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <div className=" flex flex-row gap-3 py-2 items-center">
                <Image
                  height={100}
                  width={100}
                  alt="img"
                  src={img}
                  className="h-10 w-10 rounded-full"
                />
                <p>Hafid</p>
              </div>
            </td>
            <td className=" bg-yellow-600   rounded-sm py-2 px-4">logged</td>
            <td className="py-2 px-4">01-02-2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
