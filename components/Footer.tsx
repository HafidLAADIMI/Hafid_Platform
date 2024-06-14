import Link from "next/link";
import React from "react";
import { FaGithub, FaCopyright, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="backdrop-blur-sm box-border bg-slate-800/70 border border-slate-700 border-solid flex flex-col items-center mt-12 gap-8 p-6 w-full text-slate-300 rounded-lg">
      <div className="flex flex-row gap-8">
        <Link href="https://wa.me/212669393996">
          <FaWhatsapp className="text-3xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
        </Link>
        <Link href="https://github.com/HafidLAADIMI">
          {" "}
          <FaGithub className="text-3xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
        </Link>
        <Link href="https://www.linkedin.com/in/hafid-laadimi-814b27258/">
          <FaLinkedin className="text-3xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
        </Link>
      </div>
      <div className="text-center text-xl text-slate-300 flex flex-col gap-4">
        <p>
          We value your feedback! Share your thoughts and suggestions to help us
          improve our platform and better serve you.
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center mt-4">
        <Link
          href="/contact"
          className=" ctext-sky-700 hover:text-black transition ease-in-out duration-150"
        >
          Contact us
        </Link>
        <FaCopyright className="text-xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
        <p className="text-slate-300 cursor-pointer hover:text-black transition ease-in-out duration-150">
          All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
