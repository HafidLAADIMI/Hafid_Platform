"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
 const metadata: Metadata = {
  title: 'Login',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('http://localhost:3000/login'),
};
function page() {
  const bg = "/bgGold1.jpg";
  const [error, setError] = useState("");
  const router = useRouter();
  //   here we check if the email gave it by the user is valid or not
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  //   this function will passed as an handler to the for using the onSubmit listener
  const registerUser = async (e: any) => {
    e.preventDefault(); //here we prevent the default behavior of the button

    // below we just get the value of the password and email paassed it by the user
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    try {
      // the email's validation logic , you copy it and pase it hhhh
      if (!isValidEmail(email)) {
        setError("email is not valid");
        return;
      }
      //   the password's validation , it is too easy
      if (!password || password.length < 9) {
        setError("password is not valid");
        return;
      }

      //   here we are going to link the backend and the frontend using fetch built in Next js
      const data = await fetch(
        "api/register" /*here you should pass the endpoint (URL of the backend) , just follow the order of the folders that u have created */,
        {
          method: "POST", //this one determine the type of the request , it will be a post request because we pass data to the backend
          headers: {
            "Content-Type": "application/json", //this communuly used
          },
          // here we pass the data that is email and password , as json to the backend
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      //   here we are going to check the status of the request
      if (data.status == 400) {
        setError("this email already exist");
        return;
      }
      //   if everything is good , we are going to redirect the path to the login page
      if (data.status == 200) {
        router.push("/auth");
      }
    } catch (error) {
      setError("try again");
      console.log(error);
    }
  };
  const body = "/bgbody2.avif";
  return (
    <div
    style={{
      backgroundImage: `url(${body}) `,
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
      className=" flex h-screen flex-row w-screen justify-center items-center p-5 "
    >
      <form
        onSubmit={registerUser}
        className="flex flex-col mt-[4%] backdrop-blur-sm bg-black/60  h-[80vh] w-[40vw] gap-12 items-center shadow-sm rounded-lg shadow-white max-sm:w-[90vw] max-sm:h-[60vh]  sm:w-[70vw] sm:h-[70vh] justify-center sm:gap-16 md:w-[60vw] lg:w-[50vw] xl:w-[40vw] xl:gap-12 "
        >
        <p>{error && error}</p>
        <input type="email" placeholder="Email" required className="  text-slate-200 flex h-10  bg-amber-700 rounded-lg shadow-md items-center pl-4 outline-none  " />
        <input type="password" placeholder="password" required className=" text-slate-200
         h-10 bg-amber-700 rounded-lg shadow-md items-center pl-4 outline-none " />
        <button type="submit" className=" bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200">Register</button>
        <button className="bg-amber-700 h-10 w-24 rounded-lg shadow-md hover:bg-amber-800 hover:scale-105 transition ease-in duration-300 active:bg-amber-900 text-slate-200"><Link href="/login">Back</Link></button>
      </form>
    </div>
  );
}

export default page;
