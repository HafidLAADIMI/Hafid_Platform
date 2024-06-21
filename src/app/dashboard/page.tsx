"use client";
import React from "react";
import CardDash from "../../../components/dashboard/CardDash";
import Table from "../../../components/dashboard/Table";
import { useState, useEffect } from "react";
import Chart from "../../../components/dashboard/Chart";
import axios from "axios";
function Page() {
  const apiUrl = process.env.AUTH_URL;
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getAllUsers`);
        setUsers(response.data.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    getUsers();
    const getMovies = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getAllMovies`);
        setMovies(response.data.movie);
      } catch (error: any) {
        console.log(error);
      }
    };
    getMovies();
    const getLists = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getAllLists`);
        setLists(response.data.list);
      } catch (error: any) {
        console.log(error);
      }
    };
    getLists();
  }, [apiUrl]);
  const user = {
    title: "Users",
    number: users.length,
    average: 2,
  };
  const movie = {
    title: "Movies",
    number: movies.length,
    average: 3,
  };
  const list = {
    title: "Lists",
    number: lists.length,
    average: 2,
  };
  const lastUsers = {
    user1: users[users.length - 1] || {},
    user2: users[users.length - 2] || {},
  };

  const lastMovies = {
    movie1: movies[movies.length - 1] || {},
    movie2: movies[movies.length - 2] || {},
  };
  console.log(movies[movies.length - 1]);
  const lastLists = {
    list1: lists[lists.length - 1] || {},
    list2: lists[lists.length - 2] || {},
  };

  return (
    <div className="flex flex-col w-screen md:ml-[22vw] md:items-start  items-center gap-4 p-3  ">
      <div className="flex flex-row items-center justify-center gap-2">
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
}

export default Page;
