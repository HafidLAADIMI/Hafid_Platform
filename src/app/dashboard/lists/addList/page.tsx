"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";

function ListPage() {
  const [listTitle, setListTitle] = useState<string>("");
  const [listType, setListType] = useState<string>("");
  const [listGenre, setListGenre] = useState<string>("");
  const [movies, setMovies] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");

  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieDescription, setMovieDescription] = useState<string>("");
  const [movieImage, setMovieImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [movieTrailer, setMovieTrailer] = useState<string | ArrayBuffer | null>(
    null
  );
  const [movieVideo, setMovieVideo] = useState<string | ArrayBuffer | null>(
    null
  );
  const [movieYear, setMovieYear] = useState<number>(2003);
  const [movieLimit, setMovieLimit] = useState<number>(2020);
  const [movieGenre, setMovieGenre] = useState<string>("");
  const [movieIsSeries, setMovieIsSeries] = useState<boolean>(false);

  const handleFile =
    (setFile: (file: string | ArrayBuffer | null) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
      };
      if (file) reader.readAsDataURL(file);
    };

  const clearMovieForm = () => {
    setMovieTitle("");
    setMovieDescription("");
    setMovieImage(null);
    setMovieTrailer(null);
    setMovieVideo(null);
    setMovieYear(2003);
    setMovieLimit(2020);
    setMovieGenre("");
    setMovieIsSeries(false);
  };

  const addMovieToList = (e: FormEvent) => {
    e.preventDefault();
    const newMovie = {
      title: movieTitle,
      desc: movieDescription,
      img: movieImage,
      trailer: movieTrailer,
      video: movieVideo,
      year: movieYear,
      limit: movieLimit,
      genre: movieGenre,
      isSeries: movieIsSeries,
    };
    setMovies([...movies, newMovie]);

    clearMovieForm();
  };

  const clearListForm = () => {
    setListTitle("");
    setListType("");
    setListGenre("");
    setMovies([]);
  };

  const addList = async (e: FormEvent) => {
    e.preventDefault();
    const newList = {
      title: listTitle,
      type: listType,
      genre: listGenre,
      content: movies,
    };
    try {
      await axios.post("/api/addList", newList, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("List added");
      setMessage("You have successfully added the list");
      clearListForm();
    } catch (error: any) {
      console.error(error);
      setMessage("There was an error adding the list");
    }
  };

  return (
    <div className="flex flex-col md:ml-[23vw] rounded w-[75vw] mt-24 items-center gap-7 px-4 backdrop-blur-sm box-border bg-slate-800/70 border border-slate-700 border-solid">
      <form onSubmit={addMovieToList} className="flex flex-col gap-7 w-full">
        <h2 className="text-xl font-bold text-white">Add Movie to List</h2>
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          name="movieTitle"
          placeholder="Movie Title"
          value={movieTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieTitle(e.target.value)
          }
          required
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          name="movieDescription"
          placeholder="Movie Description"
          value={movieDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieDescription(e.target.value)
          }
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="file"
          name="movieImage"
          accept="image/*"
          onChange={handleFile(setMovieImage)}
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          placeholder="trailer"
          name="movieTrailer"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieTrailer(e.target.value)
          }
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          name="movieVideo"
          placeholder="video"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieVideo(e.target.value)
          }
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="number"
          name="movieYear"
          placeholder="Movie Year"
          value={movieYear}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieYear(Number(e.target.value))
          }
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="number"
          name="movieLimit"
          placeholder="Movie Limit"
          value={movieLimit}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieLimit(Number(e.target.value))
          }
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          name="movieGenre"
          placeholder="Movie Genre"
          value={movieGenre}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieGenre(e.target.value)
          }
        />
        <div className="flex flex-row gap-3 items-center justify-center outline rounded-lg bg-slate-700 p-2 text-white">
          <label>Is Series</label>
          <input
            className="h-5 w-5"
            type="checkbox"
            name="movieIsSeries"
            checked={movieIsSeries}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMovieIsSeries(e.target.checked)
            }
          />
        </div>
        <button
          className="w-full h-12 cursor-pointer rounded-lg bg-blue-800 text-slate-200 mb-4"
          type="submit"
        >
          Add Movie to List
        </button>
      </form>
      <form onSubmit={addList} className="flex flex-col gap-7 w-full">
        <h2 className="text-xl font-bold text-white">Create List</h2>
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          name="listTitle"
          placeholder="List Title"
          value={listTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setListTitle(e.target.value)
          }
          required
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          name="listType"
          placeholder="List Type"
          value={listType}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setListType(e.target.value)
          }
        />
        <input
          className="outline rounded-lg bg-slate-700 p-2 text-white"
          type="text"
          name="listGenre"
          placeholder="List Genre"
          value={listGenre}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setListGenre(e.target.value)
          }
        />
        <button
          className="w-full h-12 cursor-pointer rounded-lg bg-blue-800 text-slate-200 mb-4"
          type="submit"
        >
          Submit List
        </button>
        <p className="text-amber-600 my-2">{message}</p>
      </form>
      <div className="w-full">
        <h2 className="text-xl font-bold text-white">Movies in List</h2>
        {movies.map((movie, index) => (
          <div key={index} className="bg-slate-700 p-4 rounded-lg mb-2">
            <h3 className="text-white">{movie.title}</h3>
            <p className="text-gray-300">{movie.desc}</p>
            {/* Display other movie details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListPage;
