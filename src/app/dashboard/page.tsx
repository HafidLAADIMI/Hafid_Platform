"use client";

import React, { useEffect, useState } from "react";
import CardDash from "../../../components/dashboard/CardDash";
import Table from "../../../components/dashboard/Table";
import Chart from "../../../components/dashboard/Chart";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface User {
  email: string;
  image: string;
  id: string;
  createdAt: string;
  isAdmin: boolean;
}

interface Movie {
  title: string;
  id: string;
  genre: string;
  createdAt: string;
}

interface List {
  title: string;
  id: string;
  content: string[];
  genre: string;
  createdAt: string;
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

function Page() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`/api/getAllUsers`);
        setUsers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
    const getMovies = async () => {
      try {
        const response = await axios.get(`/api/getAllMovies`);
        setMovies(response.data.movie);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
    const getLists = async () => {
      try {
        const response = await axios.get(`/api/getAllLists`);
        setLists(response.data.list);
      } catch (error) {
        console.log(error);
      }
    };
    getLists();
  }, []);

  const user = {
    title: "Users",
    number: users?.length,
    average: 2,
  };
  const movie = {
    title: "Movies",
    number: movies?.length,
    average: 3,
  };
  const list = {
    title: "Lists",
    number: lists?.length,
    average: 2,
  };

  const defaultUser: User = {
    email: "N/A",
    image: "",
    id: "N/A",
    createdAt: "N/A",
    isAdmin: false,
  };

  const defaultMovie: Movie = {
    title: "N/A",
    id: "N/A",
    genre: "N/A",
    createdAt: "N/A",
  };

  const defaultList: List = {
    title: "N/A",
    id: "N/A",
    content: [],
    genre: "N/A",
    createdAt: "N/A",
  };

  const lastUsers: LastUsers = {
    user1: users?.length >= 1 ? users[users.length - 1] : defaultUser,
    user2: users?.length >= 2 ? users[users.length - 2] : defaultUser,
  };

  const lastMovies: LastMovies = {
    movie1: movies?.length >= 1 ? movies[movies.length - 1] : defaultMovie,
    movie2: movies?.length >= 2 ? movies[movies.length - 2] : defaultMovie,
  };

  const lastLists: LastLists = {
    list1: lists?.length >= 1 ? lists[lists.length - 1] : defaultList,
    list2: lists?.length >= 2 ? lists[lists.length - 2] : defaultList,
  };

  const logo = "/mylogo.png";

  if (session) {
    return (
      <div className="flex flex-col w-screen md:ml-[22vw] md:items-start items-center gap-4 p-3">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <CardDash props={user} />
          <CardDash props={movie} />
          <CardDash props={list} />
        </div>
        <Table
          lastUsers={lastUsers}
          lastMovies={lastMovies}
          lastLists={lastLists}
        />
        <Chart />
      </div>
    );
  } else {
    return (
      <div className="bg-black items-center md:ml-[12vw] justify-center flex font-sans h-screen w-screen">
        <div className="flex flex-col backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid gap-2 items-center rounded-lg p-4  md:mt-0 md:mx-36 lg:mx-52 xl:mx-64">
          <Link href="/">
            <Image
              src={logo}
              height={300}
              width={400}
              alt="logo"
              className="h-[250px] w-[350px] object-contain hover:scale-105 transition ease-in duration-500 cursor-pointer"
            />
          </Link>
          <p className="break-words text-slate-300 whitespace-normal text-ellipsis">
            Welcome to{" "}
            <span className="text-blue-800 cursor-pointer">
              <Link href="/">Hafid Platform</Link>
            </span>
            , your premier destination for streaming the latest and greatest
            movies! We are thrilled to have you here. To get the most out of
            your experience, please sign in or create an account. By joining us,
            you will unlock access to our extensive library of films,
            personalized recommendations, and the ability to create your own
            watchlist. Do not miss out on the excitement—sign in if you are
            already a member, or sign up to start your cinematic adventure with
            Hafid Platform today!
          </p>
          <div className="flex flex-row gap-2">
            <button
              className="bg-slate-700 h-10 w-24 border-slate-600 border border-solid rounded-lg hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-300"
              type="submit"
            >
              <Link href="/auth">Login</Link>
            </button>
            <button
              className="bg-slate-700 h-10 w-24 border-slate-600 border border-solid rounded-lg hover:bg-black hover:scale-105 transition ease-in duration-300 text-slate-300"
              type="submit"
            >
              <Link href="/login">Register</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
