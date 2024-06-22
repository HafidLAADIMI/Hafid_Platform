"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

interface User {
  email: string;
  image: string;
  id: string;
  createdAt: string;
  isAdmin: boolean;
}

function Page() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const img = "/noavatar.jpg";

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`/api/getAllUsers`);
        setUsers(response.data.data);
        setFilteredUsers(response.data.data); // Initialize filteredUsers
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = users.filter((user) =>
        user.email.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users); // Reset to original users list if search is empty
    }
  }, [search, users]);

  const deleteUser = async (email: string) => {
    try {
      await axios.delete(`/api/deleteUser`, { data: { email } });
      setUsers(users.filter((user) => user.email !== email)); // Update local state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-24 md:ml-[22vw] text-slate-300 p-4">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-2 text-slate-300 bg-slate-800 rounded-lg items-center pr-2">
          <input
            className="flex pl-3 text-slate-300 outline-none h-10 bg-slate-800 rounded-lg"
            placeholder="Search a user ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-2xl text-slate-300" />
        </div>
        <Link href="/dashboard/users/addUser">
          <button className="h-10 w-16 rounded text-white bg-yellow-500 cursor-pointer">
            Add
          </button>
        </Link>
      </div>
      <table className="w-full rounded-sm bg-slate-800 border border-slate-700 border-solid">
        <thead>
          <tr className="bg-blue-500">
            <th className="border border-solid border-slate-700 px-4 py-2">
              Photo
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Email
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Created At
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Role
            </th>
            <th className="border border-solid border-slate-700 px-4 py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((user) => (
            <tr
              key={user.id}
              className="bg-blue-600 border border-solid border-slate-700"
            >
              <td className="border border-solid border-slate-700 px-4 py-2">
                {user.image ? (
                  <div className="flex items-center gap-3">
                    <Image
                      height={300}
                      width={300}
                      alt="img"
                      src={`/${user.image}`}
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Image
                      height={300}
                      width={300}
                      alt="img"
                      src={img}
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  </div>
                )}
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {user.email}
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {user.createdAt}
              </td>
              <td className="border border-solid border-slate-700 px-4 py-2">
                {user.isAdmin ? "Admin" : "Client"}
              </td>
              <td>
                <div className="flex pl-5 flex-row gap-2">
                  <button
                    onClick={() => router.push(`/dashboard/users/${user.email}`)}
                    className="h-10 w-16 rounded cursor-pointer bg-green-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteUser(user.email)}
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
