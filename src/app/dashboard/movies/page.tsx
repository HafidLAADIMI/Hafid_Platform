"use client";
import React from "react";
import Search from "../../../../components/dashboard/Search";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface Movie {
  title: string;
  desc: string;
  genre: string;
  id: string;
  createdAt: string;
  isSeries: boolean;
}
function Page() {
  const apiUrl = process.env.AUTH_URL;
  const router = useRouter();
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getAllMovies`);
        setMovies(response.data.movie);
      } catch (error: any) {
        console.log(error);
      }
    };
    getMovies();
  }, [apiUrl]);
  const deleteMovie = async (title: string) => {
    try {
      await axios.delete(`${apiUrl}/api/deleteMovie`, { data: { title } });
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-2 mt-24 md:ml-[22vw] text-slate-300 p-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Search placeholder="Search for a list ..." />
        <Link href="/dashboard/movies/addMovie">
          <button className="h-10 w-16 rounded text-white bg-yellow-500 cursor-pointer">
            Add
          </button>
        </Link>
      </div>
      <table className="w-full rounded-sm bg-slate-800 border border-slate-700 border-solid">
        <thead>
          <tr className="bg-blue-500">
            <th className="border border-solid border-slate-700 px-4 py-2">
              Title
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Description
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Created At
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Genre
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Serie
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr
              key={movie.id}
              className=" bg-blue-600 border border-solid border-slate-700"
            >
              <td className="border border-solid border-slate-700 px-4 py-2">
                <div className="flex items-center gap-3">
                  <p>{movie.title}</p>
                </div>
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {movie.desc}
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {movie.createdAt}
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {movie.genre}
              </td>
              {movie.isSeries ? (
                <td className="border border-solid border-slate-700 px-4 py-2">
                  Serie
                </td>
              ) : (
                <td className="border border-solid border-slate-700 px-4 py-2">
                  Not a Serie
                </td>
              )}
              <td>
                <div className=" flex pl-5 flex-row gap-2">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/movies/${movie.title}`)
                    }
                    className="h-10 w-16 rounded cursor-pointer bg-green-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteMovie(movie.title)}
                    className="h-10 w-16 rounded cursor-pointer bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
