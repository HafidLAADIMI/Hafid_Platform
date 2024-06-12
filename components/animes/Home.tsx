"use client";

import { useState, useEffect } from "react";
import React from "react";
import CardAnime from "../CardAnime";
import axios from "axios";

function Home() {
  const [season, setSeason] = useState([]);
  const [top, setTop] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  console.log({upcoming})

  useEffect(() => {
    const getSeasonNow = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
        
        setSeason(response.data.data);
      } catch (error) {
        console.error('Error fetching season now:', error);
      }
    };
    getSeasonNow();
  }, []);

  useEffect(() => {
    const getTopAnimes = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime");
      
        setTop(response.data.data);
      } catch (error) {
        console.error('Error fetching top animes:', error);
      }
    };
    getTopAnimes();
  }, []);

  useEffect(() => {
    const getUpcoming = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/seasons/upcoming");
     
        setUpcoming(response.data.data );
      } catch (error) {
        console.error('Error fetching upcoming seasons:', error);
      }
    };
    getUpcoming();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-2 md:mt-[10%] xl:mt-[8%] w-screen">
      <h1>Seasons Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-2">
        {season.map((item) => (
          <CardAnime key={1} item={item} />
        ))}
      </div>
      <h1>Top Animes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-2">
        {top.map((item) => (
          <CardAnime key={1} item={item} />
        ))}
      </div>
      <h1>Upcoming Seasons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-2">
        {upcoming.map((item) => (
          <CardAnime key={1} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
