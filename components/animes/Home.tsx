"use client";

import { useState, useEffect } from "react";
import React from "react";
import CardAnime from "../CardAnime";
import axios from "axios";
import { useSearchAnimeContext } from "@/searchAnimeContext";
interface AnimeItem {
  mal_id: number;
  title: string;
  score: number;
  images: {
    webp: {
      image_url: string;
    };
  };
}
function Home() {
  const [season, setSeason] = useState<AnimeItem[]>([])
  const [top, setTop] = useState<AnimeItem[]>([]);
  const [upcoming, setUpcoming] = useState<AnimeItem[]>([]);
  const {searchAnime}=useSearchAnimeContext();


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
  useEffect(() => {
    if (searchAnime) {
      const filteredSeason = season?.filter((item)  => item.title.toLowerCase().includes(searchAnime.toLowerCase()));
      setSeason(filteredSeason);
      const filteredTop = top.filter((item) => item.title.toLowerCase().includes(searchAnime.toLowerCase()));
      setTop(filteredTop);
      const filteredUpcoming = upcoming.filter((item) => item.title.toLowerCase().includes(searchAnime.toLowerCase()));
      setUpcoming(filteredUpcoming);
    } else {
      // If searchAnime is empty, revert to the original unfiltered data
      const getSeasonNow = async () => {
        try {
          const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
          setSeason(response.data.data);
        } catch (error) {
          console.error('Error fetching season now:', error);
        }
      };
      getSeasonNow();
  
      const getTopAnimes = async () => {
        try {
          const response = await axios.get("https://api.jikan.moe/v4/top/anime");
          setTop(response.data.data);
        } catch (error) {
          console.error('Error fetching top animes:', error);
        }
      };
      getTopAnimes();
  
      const getUpcoming = async () => {
        try {
          const response = await axios.get("https://api.jikan.moe/v4/seasons/upcoming");
          setUpcoming(response.data.data);
        } catch (error) {
          console.error('Error fetching upcoming seasons:', error);
        }
      };
      getUpcoming();
    }
  }, [searchAnime,season ,top,upcoming]);
  

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-2 md:mt-[14%] xl:mt-[10%] w-screen">
      <h1>Seasons Now</h1>
      <div className="grid w-screen grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-2">
        {season.map((item) => (
          <CardAnime key={1} item={item} />
        ))}
      </div>
      <h1>Top Animes</h1>
      <div className="grid w-screen grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-2">
        {top.map((item) => (
          <CardAnime key={1} item={item} />
        ))}
      </div>
      <h1>Upcoming Seasons</h1>
      <div className="grid w-screen grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-2">
        {upcoming.map((item) => (
          <CardAnime key={1} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
