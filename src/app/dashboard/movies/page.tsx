"use client";

import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

interface Movie {
  title: string;
  desc: string;
  genre: string;
  id: string;
  createdAt: string;
  isSeries: boolean;
}

function Page() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`/api/getAllMovies`);
        setMovies(response.data.movie);
        setFilteredMovies(response.data.movie); // Initialize filteredMovies
      } catch (error: any) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = movies.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies); // Reset to original movies list if search is empty
    }
  }, [search, movies]);

  const deleteMovie = async (title: string) => {
    try {
      await axios.delete(`/api/deleteMovie`, { data: { title } });
      setMovies(movies.filter((movie) => movie.title !== title)); // Update local state
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-24 md:ml-[22vw] text-slate-300 p-4 md:pr-6 pr-12">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-2 text-slate-300 bg-slate-800 rounded-lg items-center pr-2">
          <input
            className="flex pl-3 text-slate-300 outline-none h-10 bg-slate-800 rounded-lg"
            placeholder="Search a movie ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-2xl text-slate-300" />
        </div>

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
          {filteredMovies?.map((movie) => (
            <tr
              key={movie.id}
              className="bg-blue-600 border border-solid border-slate-700"
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
              <td className="border border-solid border-slate-700 px-4 py-2">
                {movie.isSeries ? "Serie" : "Not a Serie"}
              </td>
              <td>
                <div className="flex pl-5 flex-row gap-2">
                  <button
                    onClick={() => router.push(`/dashboard/movies/${movie.title}`)}
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
