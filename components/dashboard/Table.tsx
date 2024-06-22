"use client";
import Image from "next/image";
import React from "react";

interface User {
  email: string;
  createdAt: string;
  isAdmin: boolean;
}
interface Movie {
  title: string;
  createdAt: string;
  genre: string;
}
interface List {
  title: string;
  createdAt: string;
  genre: string;
}
interface LastUsers {
  user1: User;
  user2: User;
}
interface LastMovies {
  movie1: Movie;
  movie2: Movie;
}
interface LastLists {
  list1: List;
  list2: List;
}
interface PropsItems {
  lastUsers: LastUsers;
  lastMovies: LastMovies;
  lastLists: LastLists;
}

function Table({ lastUsers, lastMovies, lastLists }: PropsItems) {
  return (
    <div className="w-full rounded-sm flex flex-col gap-6 bg-slate-800 items-center border border-slate-700 border-solid p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Latest Updates</h2>
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse bg-slate-700">
          <thead className="bg-blue-500 text-white">
            <tr className="border-b border-gray-200">
              <th className="py-2 px-4 text-left">Email | Title</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* users */}
            {[
              lastUsers.user1,
              lastUsers.user2,
            ].map((user, index) => (
              <tr
                key={index}
                className="my-4 border-b border-gray-200 hover:bg-slate-600 transition duration-200"
              >
                <td className="py-2 px-4">{user.email}</td>
                <td className={`py-2 px-4 rounded-sm ${user.isAdmin ? "bg-red-600" : "bg-green-600"}`}>
                  {user.isAdmin ? "Admin" : "Client"}
                </td>
                <td className="py-2 px-4">{user.createdAt}</td>
              </tr>
            ))}
            {/* movies */}
            {[
              lastMovies.movie1,
              lastMovies.movie2,
            ].map((movie, index) => (
              <tr
                key={index}
                className="my-4 border-b border-gray-200 hover:bg-slate-600 transition duration-200"
              >
                <td className="py-2 px-4">{movie.title}</td>
                <td className="py-2 px-4 bg-green-600 rounded-sm">{movie.genre}</td>
                <td className="py-2 px-4">{movie.createdAt}</td>
              </tr>
            ))}
            {/* lists */}
            {[
              lastLists.list1,
              lastLists.list2,
            ].map((list, index) => (
              <tr
                key={index}
                className="my-4 border-b border-gray-200 hover:bg-slate-600 transition duration-200"
              >
                <td className="py-2 px-4">{list.title}</td>
                <td className="py-2 px-4 bg-yellow-600 rounded-sm">{list.genre}</td>
                <td className="py-2 px-4">{list.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
