"use client"
import React, { FormEvent, useMemo } from "react";
import axios from "axios";
import { useState } from "react";
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

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
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
      title: title,
      desc: description,
      img: image,
      imgTitle: imageTitle,
      imgSm: imageSmall,
      trailer: trailer,
      video: video,
      year: year,
      limit: limit,
      genre: genre,
      isSeries: isSerie,
    }),
    [title, description, image, imageTitle, imageSmall, trailer, video, year, limit, genre, isSerie]
  );

  const updateMovie = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/updateMovie`, { oldTitle, newMovie });
      console.log("movie updated");
      setMessage("You have successfully updated the movie");
      clearMovieForm();
    } catch (error: any) {
      console.error("Error updating movie:", error);
      setMessage("There was an error updating the movie");
    }
  };

  return (
    <div className="flex flex-col md:mx-auto md:w-2/3 rounded-lg mt-12 p-6 bg-gray-800 bg-opacity-80 border border-gray-700">
      <form onSubmit={updateMovie} className="flex flex-col gap-6">
        <label className="flex flex-col">
          <span className="text-gray-300">New Image</span>
          <input
            className="mt-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />
        </label>

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="text"
          name="trailer"
          placeholder="New Trailer"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="text"
          name="video"
          placeholder="New Video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="text"
          name="title"
          placeholder="New Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="text"
          name="desc"
          placeholder="New Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="text"
          name="imgTitle"
          placeholder="New Image Title"
          value={imageTitle}
          onChange={(e) => setImageTitle(e.target.value)}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="text"
          name="imgSm"
          placeholder="New Small Image"
          value={imageSmall}
          onChange={(e) => setImageSmall(e.target.value)}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="number"
          name="year"
          placeholder="New Year"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="number"
          name="limit"
          placeholder="New Limit"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        />

        <input
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
          type="text"
          name="genre"
          placeholder="New Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <div className="flex items-center">
          <label className="flex items-center gap-2 text-gray-300">
            <input
              className="h-5 w-5"
              type="checkbox"
              name="serie"
              checked={isSerie}
              onChange={(e) => setIsSerie(e.target.checked)}
            />
            <span>Is Serie</span>
          </label>
        </div>

        <button
          className="px-6 py-3 rounded-lg bg-blue-800 text-gray-200 hover:bg-blue-700 focus:outline-none"
          type="submit"
        >
          Submit
        </button>

        <p className="text-yellow-400 my-2">{message}</p>
      </form>
    </div>
  );
}

export default Page;
