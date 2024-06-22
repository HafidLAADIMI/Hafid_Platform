"use client";

import { useState, useMemo, FormEvent } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
function Page() {
  const params = useParams();
  const oldEmail = decodeURIComponent(params.email as string);
  console.log(oldEmail);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result); // base64 string
    };
    fileReader.readAsDataURL(file);
  };

  const newUser = useMemo(
    () => ({
      email: email,
      password: password,
      image: image,
      isAdmin: isAdmin,
    }),
    [email, image, password, isAdmin]
  );
  const clearUserForm = () => {
    setEmail("");
    setPassword("");
    setImage("");
    setIsAdmin(false);
    setMessage("");
  };
  const updateUser = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/updateUser`, { oldEmail, newUser });
      console.log("user added");
      setMessage("you have successfuly added the user");
      clearUserForm();
    } catch (error: any) {
      setMessage("there was an error in adding the user");
    }
  };

  return (
    <div className="flex flex-col md:ml-[23vw] ml-[15%] rounded w-[75vw] mt-24 items-center gap-7 px-4 backdrop-blur-sm box-border bg-slate-800/70 border border-slate-700 border-solid">
      <form onSubmit={updateUser} className=" flex flex-col gap-7 mt-6 ">
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="email"
          name="email"
          placeholder="New Email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <input
          className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 "
          type="password"
          name="password"
          placeholder="New Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <label className="flex flex-col gap-2 items-center">
          New image
          <input
            className="flex h-[10vh] outline rounded-lg bg-slate-700 pl-5 pt-2"
            type="file"
            name="image"
            accept="image/*"
            placeholder="Image"
            onChange={handleImage}
          />
        </label>
        <label htmlFor="" className="flex flex-row gap-2 items-center">
          isAdmin
          <input
            className="h-5 w-5 "
            type="checkbox"
            name="isAdmin"
            placeholder="IsAdmin"
            onChange={(e: any) => setIsAdmin(e.target.checked)}
          />
        </label>

        <button
          className="w-full h-12 cursor-pointer rounded-lg bg-blue-800 text-slate-200 mb-4"
          type="submit"
        >
          submit
        </button>
        <p className="text-amber-600 my-2 ">{message}</p>
      </form>
    </div>
  );
}

export default Page;
