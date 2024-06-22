"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
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
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/api/getAllMovies`);
        setMovies(response.data.movie);
        setFilteredMovies(response.data.movie);
      } catch (error: any) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const filterMovies = search
      ? movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
      : movies;

    setFilteredMovies(filterMovies);
  }, [search, movies]);

  const handleDeleteMovie = async (title: string) => {
    try {
      await axios.delete(`/api/deleteMovie`, { data: { title } });
      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.title !== title)
      );
    } catch (error: any) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-24 md:ml-[22vw] text-slate-300 p-6">
      <div className="flex flex-row justify-between items-center w-full mb-4">
        <div className="flex items-center bg-slate-800 rounded-lg">
          <input
            className="pl-3 text-slate-300 outline-none h-10 bg-slate-800 rounded-lg"
            placeholder="Search a movie ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-2xl text-slate-300 ml-2" />
        </div>
        <Link href="/dashboard/movies/addMovie">
          <button className="h-10 w-24 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">
            Add
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-slate-800 border border-slate-700 rounded-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Genre</th>
              <th className="px-4 py-2 text-left">Series</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies?.map((movie) => (
              <tr
                key={movie.id}
                className="border-b border-gray-200 hover:bg-slate-600 transition duration-200"
              >
                <td className="px-4 py-2">{movie.title}</td>
                <td className="px-4 py-2">{movie.desc}</td>
                <td className="px-4 py-2">{movie.createdAt}</td>
                <td className="px-4 py-2">{movie.genre}</td>
                <td className="px-4 py-2">{movie.isSeries ? "Series" : "Not a Series"}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        router.push(`/dashboard/movies/${movie.title}`)
                      }
                      className="h-10 w-20 rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteMovie(movie.title)}
                      className="h-10 w-20 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
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
    </div>
  );
}

export default Page;
