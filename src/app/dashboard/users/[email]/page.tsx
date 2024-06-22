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
    setImage(null); // Clear image state properly
    setIsAdmin(false);
    setMessage("");
  };

  const updateUser = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`/api/updateUser`, { oldEmail, newUser });
      console.log("User updated successfully");
      setMessage("You have successfully updated the user");
      clearUserForm();
    } catch (error: any) {
      console.error("Error updating user:", error);
      setMessage("There was an error in updating the user");
    }
  };

  return (
    <div className="flex flex-col items-center mt-24 gap-7 px-4">
      <form onSubmit={updateUser} className="w-full max-w-md bg-slate-800/70 rounded-lg p-6 border border-slate-700">
        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700"
          type="email"
          name="email"
          placeholder="New Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700 mt-4"
          type="password"
          name="password"
          placeholder="New Password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          required
        />
        <label className="flex flex-col gap-2 items-start mt-4 text-slate-300">
          Image
          <input
            className="w-full h-12 bg-slate-700 rounded-lg px-4 outline-none text-slate-300 border border-slate-700"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />
        </label>
        <label className="flex items-center gap-2 mt-4 text-slate-300">
          <input
            className="h-5 w-5"
            type="checkbox"
            name="isAdmin"
            checked={isAdmin}
            onChange={(e: any) => setIsAdmin(e.target.checked)}
          />
          <span>isAdmin</span>
        </label>

        <button
          className="w-full h-12 bg-blue-800 text-slate-200 rounded-lg mt-6 hover:bg-blue-700 transition-colors border border-slate-700"
          type="submit"
        >
          Submit
        </button>
        {message && <p className="text-amber-600 my-2 text-center">{message}</p>}
      </form>
    </div>
  );
}

export default Page;
