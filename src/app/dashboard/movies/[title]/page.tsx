"use client";

import React, { useState, useMemo, FormEvent } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  const oldTitle = decodeURIComponent(params.title as string);
  const [image, setImage] = useState<any>();
  const [video, setVideo] = useState<any>();
  const [trailer, setTrailer] = useState<any>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageTitle, setImageTitle] = useState<string>("");
  const [imageSmall, setImageSmall] = useState<string>("");
  const [year, setYear] = useState<number>(2003);
  const [limit, setLimit] = useState<number>(2020);
  const [genre, setGenre] = useState<string>("");
  const [isSerie, setIsSerie] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearMovieForm = () => {
    setImage(null);
    setVideo(null);
    setTrailer(null);
    setTitle("");
    setDescription("");
    setImageTitle("");
    setImageSmall("");
    setYear(2003);
    setLimit(2020);
    setGenre("");
    setIsSerie(false);
    setMessage("");
  };

  const newMovie = useMemo(
    () => ({
      title,
      desc: description,
      img: image,
      imgTitle: imageTitle,
      imgSm: imageSmall,
      trailer,
      video,
      year,
      limit,
      genre,
      isSeries: isSerie,
    }),
    [title, description, image, imageTitle, imageSmall, trailer, video, year, limit, genre, isSerie]
  );

  const updateMovie = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/updateMovie`, { oldTitle, newMovie }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("You have successfully updated the movie");
      clearMovieForm();
    } catch (error) {
      console.error("Error updating movie:", error);
      setMessage("There was an error updating the movie");
    }
  };

  return (
    <div className="flex flex-col items-center mt-24 gap-7 px-4">
      <form onSubmit={updateMovie} className="w-full max-w-md bg-slate-800/70 rounded-lg p-6 border border-slate-700">
        <label className="flex flex-col gap-2 items-start text-slate-300">
          Image
          <input
            className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />
        </label>

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="text"
          name="trailer"
          placeholder="Trailer URL"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="text"
          name="video"
          placeholder="Video URL"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="text"
          name="desc"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="text"
          name="imgTitle"
          placeholder="Image Title"
          value={imageTitle}
          onChange={(e) => setImageTitle(e.target.value)}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="text"
          name="imgSm"
          placeholder="Image Small"
          value={imageSmall}
          onChange={(e) => setImageSmall(e.target.value)}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="number"
          name="year"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="number"
          name="limit"
          placeholder="Limit"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        />

        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mb-4"
          type="text"
          name="genre"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <div className="flex items-center gap-3 text-slate-300">
          <input
            className="h-5 w-5"
            type="checkbox"
            name="serie"
            checked={isSerie}
            onChange={(e) => setIsSerie(e.target.checked)}
          />
          <label htmlFor="serie">Serie</label>
        </div>

        <button
          className="w-full h-12 bg-blue-800 text-slate-200 rounded-lg mt-6 hover:bg-blue-700 transition-colors border border-slate-700"
          type="submit"
        >
          Submit
        </button>

        {message && <p className="text-amber-600 my-2 text-center">{message}</p>}
      </form>
    </div>
  );
}

export default Page;
