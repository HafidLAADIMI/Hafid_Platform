import Image from "next/image";
import React from "react";

interface user {
  email: string;
  createdAt: string;
  isAdmin: boolean;
}
interface movie {
  title: string;
  createdAt: string;
  genre: string;
}
interface list {
  title: string;
  createdAt: string;
  genre: string;
}
interface LastUsers {
  user1: user;
  user2: user;
}
interface LastMovies {
  movie1: movie;
  movie2: movie;
}
interface LastLists {
  list1: list;
  list2: list;
}
interface PropsItems {
  lastUsers: LastUsers;
  lastMovies: LastMovies;
  lastLists: LastLists;
}

function Table({ lastUsers, lastMovies, lastLists }: PropsItems) {
  return (
    <div className="w-[80vw] rounded-sm flex flex-col gap-2 bg-slate-800 items-center border border-slate-700 border-solid justify-center">
      <h2>Latset updates</h2>
      <table className="w-full border-collapse bg-blue-600 ">
        <thead className="bg-blue-500 text-white">
          <tr className=" border-b border-gray-200">
            <th className="py-2 px-4">Email | Title</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody className="pl-3">
          {/* users */}
          <tr className="my-4 border-b border-gray-200 pl-2">
            <td className="items-center justify-center">
              <p>{lastUsers.user1.email}</p>
            </td>
            {lastUsers.user1.isAdmin ? (
              <td className=" bg-red-600   rounded-sm py-2 px-4">Admin</td>
            ) : (
              <td className=" bg-red-600   rounded-sm py-2 px-4">Client</td>
            )}
            <td className="py-2 px-4">{lastUsers.user1.createdAt}</td>
          </tr>
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <p>{lastUsers.user2.email}</p>
            </td>
            {lastUsers.user2.isAdmin ? (
              <td className=" bg-red-600   rounded-sm py-2 px-4">Admin</td>
            ) : (
              <td className=" bg-red-600   rounded-sm py-2 px-4">Client</td>
            )}
            <td className="py-2 px-4">{lastUsers.user2.createdAt}</td>
          </tr>
          {/* movies */}
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <p>{lastMovies.movie1.title}</p>
            </td>
            <td className=" bg-green-600   rounded-sm py-2 px-4">
              {lastMovies.movie1.genre}
            </td>
            <td className="py-2 px-4">{lastMovies.movie1.createdAt}</td>
          </tr>
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <p>{lastMovies.movie2.title}</p>
            </td>
            <td className=" bg-green-600   rounded-sm py-2 px-4">
              {lastMovies.movie2.genre}
            </td>
            <td className="py-2 px-4">{lastMovies.movie2.createdAt}</td>
          </tr>
          {/* lists */}
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <p>{lastLists.list1.title}</p>
            </td>
            <td className=" bg-yellow-600   rounded-sm py-2 px-4">
              {lastLists.list1.title}
            </td>
            <td className="py-2 px-4">{lastLists.list1.createdAt}</td>
          </tr>
          <tr className="my-4 border-b border-gray-200">
            <td className="items-center justify-center">
              <p>{lastLists.list2.title}</p>
            </td>
            <td className=" bg-yellow-600   rounded-sm py-2 px-4">
              {lastLists.list2.title}
            </td>
            <td className="py-2 px-4">{lastLists.list2.createdAt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
