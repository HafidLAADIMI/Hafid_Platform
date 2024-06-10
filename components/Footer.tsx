import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaCopyright,
  FaLinkedin,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="backdrop-blur-sm bg-white/30 shadow-sm shadow-white flex flex-col items-center mt-12 gap-8 p-6 w-full text-amber-600 rounded-lg">
      <div className="flex flex-row gap-8">
        <FaFacebook className="text-3xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
        <FaInstagram className="text-3xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
        <FaGithub className="text-3xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
        <FaLinkedin className="text-3xl cursor-pointer hover:bg-red-600 hover:text-black rounded-lg transition ease-in-out duration-150" />
      </div>
      <div className="text-center text-xl flex flex-col gap-4">
        <p>
          We value your feedback! Share your thoughts and suggestions to help us
          improve our platform and better serve you.
        </p>
        <p>
          Join our newsletter to receive the latest news, promotions, and
          recommendations straight to your inbox.
        </p>
        <p>
          Explore more of our platform: browse our catalog, learn about our
          mission, or join our community!
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
        <p className="text-amber-600 cursor-pointer hover:text-black transition ease-in-out duration-150">
          All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
