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
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const defaultImage = "/noavatar.jpg";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`/api/getAllUsers`);
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filterUsers = search
      ? users.filter((user) =>
          user.email.toLowerCase().includes(search.toLowerCase())
        )
      : users;

    setFilteredUsers(filterUsers);
  }, [search, users]);

  const handleDeleteUser = async (email: string) => {
    try {
      await axios.delete(`/api/deleteUser`, { data: { email } });
      setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-24 md:ml-[22vw] text-slate-300 p-6">
      <div className="flex flex-row justify-between items-center w-full mb-4">
        <div className="flex items-center bg-slate-800 rounded-lg">
          <input
            className="pl-3 text-slate-300 outline-none h-10 bg-slate-800 rounded-lg"
            placeholder="Search a user ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-2xl text-slate-300 ml-2" />
        </div>
        <Link href="/dashboard/users/addUser">
          <button className="h-10 w-24 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition-colors">
            Add
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-slate-800 border border-slate-700 rounded-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Photo</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-slate-600 transition duration-200"
              >
                <td className="px-4 py-2">
                  <Image
                    height={40}
                    width={40}
                    alt="User Image"
                    src={user.image ? `/${user.image}` : defaultImage}
                    className="h-10 w-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.createdAt}</td>
                <td className="px-4 py-2">
                  <span
                    className={`py-1 px-3 rounded-sm ${
                      user.isAdmin ? "bg-red-600" : "bg-green-600"
                    }`}
                  >
                    {user.isAdmin ? "Admin" : "Client"}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        router.push(`/dashboard/users/${user.email}`)
                      }
                      className="h-10 w-20 rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.email)}
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
