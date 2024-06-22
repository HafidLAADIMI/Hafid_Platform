"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

interface List {
  title: string;
  id: string;
  content: [];
  genre: string;
  createdAt: string;
}

function Page() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [lists, setLists] = useState<List[]>([]);
  const [filteredLists, setFilteredLists] = useState<List[]>([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const response = await axios.get(`/api/getAllLists`);
        setLists(response.data.list);
        setFilteredLists(response.data.list); // Initialize filteredLists
      } catch (error: any) {
        console.log(error);
      }
    };
    getLists();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = lists.filter((list) =>
        list.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredLists(filtered);
    } else {
      setFilteredLists(lists); // Reset to original lists if search is empty
    }
  }, [search, lists]);

  const deleteSerie = async (title: string) => {
    try {
      await axios.delete(`/api/deleteList`, { data: { title } });
      setLists(lists.filter((list) => list.title !== title)); // Update local state
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-24 md:ml-[22vw] text-slate-300 p-4">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-2 text-slate-300 bg-slate-800 rounded-lg items-center pr-2">
          <input
            className="flex pl-3 text-slate-300 outline-none h-10 bg-slate-800 rounded-lg"
            placeholder="Search a list ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-2xl text-slate-300" />
        </div>
        <Link href="/dashboard/lists/addList">
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
              Genre
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Created At
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Total Episodes
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredLists?.map((list) => (
            <tr key={list.id} className="bg-blue-600 border border-solid border-slate-700">
              <td className="border border-solid border-slate-700 px-4 py-2">
                <div className="flex items-center gap-3">
                  <p>{list.title}</p>
                </div>
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                <p>{list.genre}</p>
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {list.createdAt}
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {list.content.length}
              </td>
              <td>
                <div className="flex pl-5 flex-row gap-2">
                  <button
                    onClick={() => router.push(`/dashboard/lists/${list.title}`)}
                    className="h-10 w-16 rounded cursor-pointer bg-green-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteSerie(list.title)}
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
