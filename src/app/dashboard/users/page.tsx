"use client";
import React, { useEffect } from "react";
import Search from "../../../../components/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface User {
  email: string;
  image: string;
  id: string;
  createdAt: string;
  isAdmin: boolean;
}

function Page() {
  const apiUrl = process.env.AUTH_URL;
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getAllUsers`);
        console.log(response.data);
        setUsers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [apiUrl]);
  const deleteUser = async (email: string) => {
    try {
      await axios.delete(`${apiUrl}/api/deleteUser`, { data: { email } });
    } catch (error) {
      console.log(error);
    }
  };
  const img = "/noavatar.jpg";
  return (
    <div className="flex flex-col gap-2 mt-24 md:ml-[22vw] text-slate-300 p-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Search placeholder="Search for a user ..." />
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
          {users?.map((user) => (
            <tr
              key={user.id}
              className=" bg-blue-600 border border-solid border-slate-700"
            >
              <td className="border border-solid border-slate-700 px-4 py-2">
                {user?.image ? (
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
              {user.isAdmin ? (
                <td className="border border-solid border-slate-700 px-4 py-2">
                  Admin
                </td>
              ) : (
                <td className="border border-solid border-slate-700 px-4 py-2">
                  Client
                </td>
              )}

              <td>
                <div className=" flex pl-5 flex-row gap-2">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/users/${user.email}`)
                    }
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
