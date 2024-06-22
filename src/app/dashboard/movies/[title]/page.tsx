"use client";
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
  const handleTrailer = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTrailer(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleVideo = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setVideo(reader.result);
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
    setYear(0);
    setLimit(0);
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
    [
      title,
      description,
      image,
      imageTitle,
      imageSmall,
      trailer,
      video,
      year,
      limit,
      genre,
      isSerie,
    ]
  );
  console.log(newMovie);
  const updateMovie = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/updateMovie`, { oldTitle, newMovie });
      console.log("movie added");
      setMessage("you have successfuly updated the movie");
      clearMovieForm();
    } catch (error: any) {
      console.log(error);
      setMessage("There was an error updating the movie");
    }
  };
  return (
    <div className="flex flex-col ml-[15%] md:ml-[23vw] rounded w-[75vw] mt-24 items-center gap-7 px-4 backdrop-blur-sm box-border bg-slate-800/70 border border-slate-700 border-solid">
      <form onSubmit={updateMovie} className="flex flex-col gap-7 w-full">
        <label className="flex flex-col gap-2 items-center">
          New image
          <input
            className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-3 pt-5"
            type="file"
            name="image"
            accept="image/*"
            placeholder="Image"
            onChange={handleImage}
          />
        </label>
        {/* <label className="flex flex-col items-center gap-2">
          trailer
          <input
            className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-3 pt-5 "
            type="file"
            name="trailer"
            accept="video/*"
            placeholder="Trailer"
            onChange={handleTrailer}
          />
        </label> */}
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="text"
          name="trailer"
          placeholder="New trailer"
          onChange={(e: any) => {
            setTrailer(e.target.value);
          }}
        />

        {/* <label className="flex flex-col items-center gap-2">
          video
          <input
            className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-3 pt-5 "
            type="file"
            name="video"
            accept="video/*"
            placeholder="Video"
            onChange={handleVideo}
          />
        </label> */}
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="text"
          name="video"
          placeholder="New video"
          onChange={(e: any) => {
            setVideo(e.target.value);
          }}
        />

        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="text"
          name="title"
          placeholder="New Title"
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="text"
          name="desc"
          placeholder="New Description"
          onChange={(e: any) => {
            setDescription(e.target.value);
          }}
        />
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="text"
          name="imgTitle"
          placeholder="New imgTitle"
          onChange={(e: any) => {
            setImageTitle(e.target.value);
          }}
        />
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="text"
          name="imgSm"
          placeholder="New imgSM"
          onChange={(e: any) => {
            setImageSmall(e.target.value);
          }}
        />

        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 pr-5"
          type="number"
          name="Year"
          placeholder="New Year"
          onChange={(e: any) => {
            setYear(e.target.value);
          }}
        />
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 pr-5"
          type="number"
          name="New limit"
          placeholder="Limit"
          onChange={(e: any) => {
            setLimit(e.target.value);
          }}
        />
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="text"
          name="genre"
          placeholder="New Genre"
          onChange={(e: any) => {
            setGenre(e.target.value);
          }}
        />
        <div className="flex flex-row gap-3 items-center justify-center h-[10vh] outline rounded-lg bg-slate-700 pl-5 pr-5 ">
          <label> Serie </label>
          <input
            className="h-5 w-5"
            type="checkbox"
            name="serie"
            placeholder="Serie"
            onChange={(e: any) => {
              setIsSerie(e.target.checked);
            }}
          />
        </div>

        <button
          className="w-full h-12 cursor-pointer rounded-lg bg-blue-800 text-slate-200 mb-4"
          type="submit"
        >
          submit
        </button>
        <p className="text-amber-600 my-2">{message}</p>
      </form>
    </div>
  );
}

export default Page;
