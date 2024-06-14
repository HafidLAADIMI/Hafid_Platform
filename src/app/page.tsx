"use client";
import Image from "next/image";

import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Home() {
  const logo = "/mylogo.png";
  const aflam = "/mov1.jpg";
  const book1 = "/book1.jpg";
  const book2 = "/book4.jpeg";
  const book3 = "/book5.jpeg";
  const book4 = "/book6.jpeg";
  const film1 = "/film1.jpg";
  const film2 = "/film5.jpg";
  const film3 = "/film6.jpg";
  const film4 = "/film7.jpg";
  const film5 = "/film8.jpg";
  const film6 = "/film9.jpg";
  const animes1 = "/anime2.jpg";
  const animes2 = "/anime5.jpg";
  const animes3 = "/anime6.jpg";
  const animes4 = "/anime7.jpg";
  const anime = "/anim.avif";
  const slides = [book4, book2, book1, book3];
  const animes = [animes1, animes2, animes3, animes4];
  const movies = [film1, film2, film3, film4, film5, film6];

  // autotyping

  return (
    <div
      className=" bg-black flex h-full flex-col 
    w-screen overflow-hidden justify-between relative items-center   "
    >
      
      <div className="backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid  flex flex-col mt-[25%] w-[90vw] items-center gap-7 py-7  md:mx-20 md:mt-[13%] lg:mt-[11%] xl:mt-[10%] lg:flex-row lg:gap-10 lg:mx-52 lg:px-4 rounded-lg">
        <div className="max-h-[300px] flex items-center justify-center max-w-[400px] lg:h-[500px]  overflow-hidden">
          <Image
            src={logo}
            height={300}
            width={300}
            alt="logo"
            className="object-contain  rounded-lg cursor-pointer hover:scale-105 transition ease-in duration-300 "
          />
        </div>
        <div className="flex flex-col gap-4 p-3 items-center lg:w-[50vw] lg:gap-10 ">
          <p className="overflow-hidden text-slate-300 text-xl"> Dive into the world of</p>
          <div className="flex flex-row gap-2 box-border px-3">
            <div className="flex flex-col gap-2 max-h-[110px] md:max-h-[160px] items-center bg-slate-700 border border-solid border-slate-600 ">
              <div className="h-[90px] w-[100px] md:h-[140px] md:w-[160px] overflow-hidden ">
                <Link href="/movies">
                  <Image
                    src={aflam}
                    height={300}
                    width={400}
                    alt="logo"
                    className="object-containrounded-lg cursor-pointer hover:scale-105 transition ease-in duration-300 "
                  />
                </Link>
              </div>
              <span className="text-amber-600 ">Movie</span>
            </div>
            <div className="flex flex-col gap-2 max-h-[110px] md:max-h-[160px]  items-center bg-slate-700 border border-solid border-slate-600 ">
              <div className="h-[90px] w-[100px] md:h-[140px] md:w-[160px] overflow-hidden ">
                <Link href="/animes">
                  <Image
                    src={anime}
                    height={300}
                    width={400}
                    alt="logo"
                    className="object-containrounded-lg cursor-pointer hover:scale-105 transition ease-in duration-300 "
                  />
                </Link>
              </div>
              <span className="text-amber-600 ">Animes</span>
            </div>
            <div className="flex flex-col gap-2 max-h-[110px] md:max-h-[160px]  items-center bg-slate-700 border border-solid border-slate-600 ">
              <div className="h-[90px] w-[100px] md:h-[140px] md:w-[160px] overflow-hidden ">
                <Link href="/books">
                  <Image
                    src={book1}
                    height={300}
                    width={400}
                    alt="logo"
                    className="object-containrounded-lg cursor-pointer hover:scale-105 transition ease-in duration-300 "
                  />
                </Link>
              </div>
              <span className="text-amber-600 ">Books</span>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-sm box-border bg-slate-800/70 border border-slate-700 border-solid   flex flex-col mt-10 w-[90vw] items-center gap-3 py-4 lg:flex-row md:mx-20 lg:mx-52 lg:px-4 rounded-lg">
        <div className="flex justify-center max-w-[390px] items-center mx-4">
          <Carousel slides={movies} />
        </div>
        <div className="flex flex-col m-4 text-wrap  border-box ">
          <p className="  text-xl text-slate-300 ">
            {" "}
            Dive into our curated movie collection, featuring timeless classics
            and the latest blockbusters. With gripping stories, stunning
            visuals, and unforgettable performances across all genres, there is
            something for everyone. Join us on a cinematic journey and
            experience the magic of storytelling!
          </p>
          <button className="bg-blue-600 h-7 w-14 rounded ml-4 mt-2 cursor-pointer shadow-md active:bg-blue-700 shadow-slate-600 transiton ease-in-out duration-500 hover:scale-105 text-xs ">
            <Link href="/movies">See more </Link>
          </button>
        </div>
      </div>
      <div className="backdrop-blur-sm box-border bg-slate-800/70 border border-slate-700 border-solid   flex flex-col mt-10 w-[90vw] items-center gap-3 py-4 lg:flex-row md:mx-20 lg:mx-52 lg:px-4 rounded-lg">
        <div className="flex justify-center max-w-[390px] items-center mx-4">
          <Carousel slides={animes} />
        </div>
        <div className="flex flex-col m-4 text-wrap  border-box ">
          <p className="  text-xl text-slate-300 ">
            {" "}
            Explore our curated anime collection, featuring iconic classics and
            the latest releases. Enjoy gripping stories, stunning animation, and
            memorable characters across all genres. Join us and experience the
            magic of anime storytelling today!
          </p>
          <button className="bg-blue-600 h-7 w-14 rounded ml-4 mt-2 cursor-pointer shadow-md active:bg-blue-700 shadow-slate-600 transiton ease-in-out duration-500 hover:scale-105 text-xs ">
            <Link href="/animes">See more </Link>
          </button>
        </div>
      </div>
      <div className="backdrop-blur-sm box-border bg-slate-800/70 border border-slate-700 border-solid   flex flex-col mt-10 w-[90vw] items-center gap-3 py-4 lg:flex-row md:mx-20 lg:mx-52 lg:px-4 rounded-lg">
        <div className="flex justify-center max-w-[390px] items-center mx-4">
          <Carousel slides={slides} />
        </div>
        <div className="flex flex-col m-4 text-wrap  border-box ">
          <p className="  text-xl text-slate-300 ">
            {" "}
            Explore our diverse book collection, from classics to bestsellers.
            Enjoy captivating stories and inspiring characters across all
            genres. Join us and discover the joy of reading today!
          </p>
          <button className="bg-blue-600 h-7 w-14 rounded ml-4 mt-2 cursor-pointer shadow-md active:bg-blue-700 shadow-slate-600 transiton ease-in-out duration-500 hover:scale-105 text-xs ">
            <Link href="/books">See more </Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
