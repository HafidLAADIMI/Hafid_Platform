"use client";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import movies from "./images/movie.jpg";
import pic2 from "./images/pic2.jpeg";
import Navbar from "../../components/navbar/Navbar";

// fade

import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Home page",
  description: "the home page of Hafid Platform",
  metadataBase: new URL("http://loclahost:3000"),
};

export default function Home() {
  const logo = "/mylogo.png";
  const aflam = "/mov1.jpg";
  const book1 = "/book1.jpg";
  const book2 = "/book4.jpeg";
  const book3 = "/book5.jpeg";
  const book4 = "/book6.jpeg";
  const animes = "/anim.avif";
  const bg = "/bgR.jpg";
  const bg1 = "/bg.jpg";
  const body = "/bgbody2.avif";
  const slides = [book4, book2, book1, book3];
  // autotyping
  const [text] = useTypewriter({
    words: ["Movies", "Animes", "Books", ""],
    loop: {},
  });

  return (
    <div
      style={{
        backgroundImage: `url(${body}) `,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" flex h-full flex-col bg-contain
    w-screen overflow-hidden justify-between relative items-center   "
    >
      <Navbar />
      <div className="backdrop-blur-sm bg-black/60 shadow-sm shadow-white flex items-center justify-between gap-1 rounded-lg max-sm:flex-col max-sm:mt-[24%] max-sm:h-[55vh] max-sm:w-[90vw] max-sm:pt-3 max-sm:pl-2 max-sm:pb-3   sm:flex-col sm:mt-[15%] sm:h-[45vh] sm:w-[80vw] sm:pt-3 sm:pl-2 sm:pb-16 md:mt-[13%] md:flex-row md:h-[70vh] md:w-[68vw] lg:mt-[10%] lg:h-[80vh] lg:w-[83vw] xl:w-[90vw] 2xl:gap-3 2xl:pl-4">
        <h1 className=" text-ellipsis overflow-hidden break-words whitespace-normal max-sm:text-xl sm:text-xl  text-amber-600 md:text-xl lg:text-2xl  xl:text-4xl  2xl:text-5xl">
          Dive into the world of entertainment with Hafid Platform! Discover a
          universe of captivating stories and thrilling adventures waiting for
          you. Whether you're into!
          <span className="text-red-600">{text}</span> <Cursor />
        </h1>

        <Image
          className="hover:scale-105 transition ease-in-out duration-500 rounded shadow-2xl cursor-pointer  max-sm:h-[14vh] max-sm:w-[50vw] max-sm:mt-3 sm:h-[20vh] sm:w-[38vw] sm:mt-4 md:mr-3 md:h-[30vh] md:w-[42vw] lg:h-[45vh] lg:w-[43vw] xl:mr-4 xl:h-[46vh] xl:w-[48vw] 2xl:h-[47vh] 2xl:w-[49vw] object-contain "
          src={logo}
          height={900}
          width={900}
          alt="img"
        />
      </div>

      <div className=" backdrop-blur-sm bg-black/60 shadow-sm shadow-white flex flex-row items-center mt-[5%] gap-1  rounded-lg  max-sm:flex-col max-sm:mt-[15%] max-sm:h-[57vh] max-sm:w-[90vw] max-sm:pt-3 max-sm:pl-2 max-sm:pb-1   sm:flex-col sm:mt-[15%] sm:h-[77vh] sm:w-[80vw] sm:pt-3 sm:pl-2 sm:pb-1 md:h-[79vh] md:w-[68vw] md:gap-5  lg:w-[83vw] lg:h-[82vh] lg:pt-2 lg:flex-row lg:pl-4 xl:w-[90vw] ">
        <Image
          width={400}
          height={384}
          alt="img"
          className=" rounded-lg object-contain shadow-2xl transition ease-in-out duration-500 cursor-pointer hover:scale-105 max-sm:h-[20vh] max-sm:w-[48vw] sm:h-[30vh] sm:w-[38vw] md:h-[35vh] md:w-[30vw] xl:w-[35vw] xl:h-[38vh] "
          src={aflam}
        />

        <div className=" h-[60vh] ml-[2%] mt-[4px]  pr-4 lg:pt-0 xl:pt-14 2xl:pt-20 ">
          <p className=" text-ellipsis overflow-hidden break-words whitespace-normal text-amber-600 max-sm:text-xs sm:text-[15px] md:text-[15px] lg:text-xl xl:text-[24px] 2xl:text-3xl">
            Immerse yourself in the enchanting world of cinema with our
            carefully curated collection of movies. From timeless classics to
            the latest blockbusters, our diverse selection caters to every taste
            and genre. Discover gripping narratives, stunning visuals, and
            unforgettable performances that will transport you to new worlds and
            evoke a range of emotions. Whether you're seeking heart-pounding
            action, heartwarming drama, or side-splitting comedy, our collection
            has something for everyone. Join us on a cinematic journey and
            unlock the magic of storytelling today!
          </p>
          <button className=" bg-blue-600 h-10 w-20 rounded ml-4 mt-2 cursor-pointer shadow-md active:bg-blue-700 shadow-slate-600 transiton ease-in-out duration-500 hover:scale-105 max-sm:h-7 max-sm:w-12 max-sm:text-[10px] sm:h-5 sm:w-10 sm:text-[8px] md:h-6 md:w-11 md:text-[9px] xl:h-8 xl:w-14 xl:text-[11px]">
            <Link href="/movies"> See More</Link>
          </button>
        </div>
      </div>

      <div className=" backdrop-blur-sm bg-black/60 shadow-sm shadow-white flex flex-row items-center mt-[5%] gap-1  rounded-lg  max-sm:flex-col max-sm:mt-[15%] max-sm:h-[87vh] max-sm:w-[90vw] max-sm:pt-3 max-sm:pl-2 max-sm:pb-1  sm:flex-col sm:mt-[15%] sm:h-[87vh] sm:w-[80vw] sm:pt-3 sm:pl-2 sm:pb-1 md:h-[83vh] md:w-[68vw] md:gap-5  lg:w-[83vw] lg:h-[110vh] lg:pt-0 lg:flex-row lg:pl-4 xl:w-[90vw] object-contain ">
        <Image
          width={400}
          height={360}
          alt="img"
          className=" rounded-lg bg-cover shadow-2xl transition ease-in-out duration-500 cursor-pointer hover:scale-105  max-sm:h-[20vh] max-sm:w-[50vw] sm:h-[30vh] sm:w-[30vw] md:h-[35vh] md:w-[30vw] xl:w-[35vw] xl:h-[38vh] object-contain "
          src={animes}
        />
        <div className="  h-[60vh] ml-[2%] mt-[-1px]  pr-4 lg:pt-0 xl:pt-14 2xl:pt-20 ">
          <p className=" text-ellipsis overflow-hidden break-words whitespace-normal text-amber-600 max-sm:text-[15px] sm:text-[15px] md:text-[15px] lg:text-[20px] lg:text-xl xl:text-[25px]  2xl:text-3xl  ">
            Embark on an extraordinary adventure into the captivating world of
            anime with our meticulously curated collection. From iconic classics
            to the latest releases, our diverse selection encompasses a wide
            range of genres and styles, ensuring there's something for every
            anime enthusiast. Immerse yourself in gripping storylines,
            breathtaking animation, and memorable characters that will whisk you
            away to fantastical realms and stir your emotions. Whether you're
            craving exhilarating action, heartwarming romance, or mind-bending
            fantasy, our anime collection promises to delight and inspire. Join
            us on an anime odyssey and unlock the magic of storytelling today!
          </p>
          <button className=" bg-blue-600 h-10 w-20 rounded ml-4 mt-2 cursor-pointer shadow-md active:bg-blue-700 shadow-slate-600 transiton ease-in-out duration-500 hover:scale-105 max-sm:h-5 max-sm:w-10 max-sm:text-[8px] sm:h-5 sm:w-10 sm:text-[8px] md:h-6 md:w-11 md:text-[9px] xl:h-8 xl:w-14 xl:text-[11px]">
            See More
          </button>
        </div>{" "}
      </div>

      <div className=" backdrop-blur-sm bg-black/60 shadow-sm shadow-white flex flex-row items-center mt-[5%] gap-1  rounded-lg  max-sm:flex-col max-sm:mt-[15%] max-sm:h-[67vh] max-sm:w-[90vw] max-sm:pt-3 max-sm:pl-2 max-sm:pb-1  sm:flex-col sm:mt-[15%] sm:h-[87vh] sm:w-[80vw] sm:pt-3 sm:pl-2 sm:pb-1 md:h-[83vh] md:w-[68vw] md:gap-10  lg:w-[83vw] lg:h-[100vh] lg:pt-0 lg:flex-row lg:pl-4 xl:w-[90vw]">
        <div className="w-[25vw] h-[30vh]  ml-5 shadow-2xl shadow-black hover:scale-105 hover:rounded-lg rounded-lg max-sm:h-[25vh] max-sm:w-[50vw] sm:h-[30vh]  sm:w-[40vw] md:h-[30vh]  md:w-[44vw] lg:w-[35vw] lg:h-[37vh] lg:mb-[6%]  xl:h-[36vh] xl:w-[30vw]   2xl:mb-[4%]">
          <Carousel slides={slides} />
        </div>
        <div className="h-[60vh] w-[30%] ml-[2%] max-sm:w-[90%] max-sm:h-[40vh]   sm:w-[90%] sm:h-[40vh] lg:w-[50%] xl:h-[60vh] xl:mt-[5%]">
          <p className="  text-2xl  text-amber-600  max-sm:text-xs sm:text-2xl md:text-2xl xl:text-3xl xl:mb-[13%]">
            {" "}
            "Explore our diverse collection of books, from classics to
            bestsellers. Lose yourself in captivating stories and inspiring
            characters. Whether you're into thrilling mysteries, heartwarming
            romance, or thought-provoking non-fiction, we have something for
            every reader. Embark on literary adventures that will transport you
            to different worlds and spark your imagination. Join us and discover
            the joy of reading today!"
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
