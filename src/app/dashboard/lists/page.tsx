"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

interface List {
  title: string;
  id: string;
  content: any[]; // Adjust content type if needed
  genre: string;
  createdAt: string;
}

function Page() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [lists, setLists] = useState<List[]>([]);
  const [filteredLists, setFilteredLists] = useState<List[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`/api/getAllLists`);
        setLists(response.data.list);
        setFilteredLists(response.data.list);
      } catch (error: any) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchLists();
  }, []);

  useEffect(() => {
    const filterLists = search
      ? lists.filter((list) =>
          list.title.toLowerCase().includes(search.toLowerCase())
        )
      : lists;

    setFilteredLists(filterLists);
  }, [search, lists]);

  const handleDeleteList = async (title: string) => {
    try {
      await axios.delete(`/api/deleteList`, { data: { title } });
      setLists((prevLists) =>
        prevLists.filter((list) => list.title !== title)
      );
    } catch (error: any) {
      console.error("Error deleting list:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-24 md:ml-[22vw] text-slate-300 p-6">
      <div className="flex flex-row justify-between items-center w-full mb-4">
        <div className="flex items-center bg-slate-800 rounded-lg">
          <input
            className="pl-3 text-slate-300 outline-none h-10 bg-slate-800 rounded-lg"
            placeholder="Search a list ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-2xl text-slate-300 ml-2" />
        </div>
        <Link href="/dashboard/lists/addList">
          <button className="h-10 w-24 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">
            Add
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-slate-800 border border-slate-700 rounded-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Genre</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Total Episodes</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLists?.map((list) => (
              <tr
                key={list.id}
                className="bg-blue-600 border border-slate-700"
              >
                <td className="px-4 py-2">{list.title}</td>
                <td className="px-4 py-2">{list.genre}</td>
                <td className="px-4 py-2">{list.createdAt}</td>
                <td className="px-4 py-2">{list.content.length}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        router.push(`/dashboard/lists/${list.title}`)
                      }
                      className="h-10 w-20 rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteList(list.title)}
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
