"use client";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";


export default function Home() {
  const logo = "/mylogo.png";
  const aflam = "/mov1.jpg";
  const book1 = "/book1.jpg";
  const book2 = "/book4.jpeg";
  const book3 = "/book5.jpeg";
  const book4 = "/book6.jpeg";
  const anime = "/anim.avif";
  const slides = [book4, book2, book1, book3];
  // autotyping
  const [text] = useTypewriter({
    words: ["Movies", "Animes", "Books", ""],
    loop: 0,
  });

  return (
    <div
      className=" bg-black flex h-full flex-col 
    w-screen overflow-hidden justify-between relative items-center   "
    >
      <Navbar />
      <div className="backdrop-blur-sm bg-black/60 shadow-sm shadow-white mx flex flex-col mt-10 w-[90vw] items-center gap-3 py-4 lg:flex-row md:mx-20 md:mt-[13%] lg:mt-[11%] xl:mt-[10%] lg:mx-52 lg:px-4 rounded-lg">
        <Image
          src={logo}
          height={300}
          width={400}
          alt="logo"
          className="object-contain h-[300] w-[400] rounded-lg cursor-pointer hover:scale-105 transition ease-in duration-300 "
        />

        <div className=" flex m-4 text-wrap text-xl border-box overflow-hidden min-h-[150px]  text-amber-600 ">
          <p>
            {" "}
            Dive into the world of entertainment with Hafid Platform! Discover a
            universe of captivating stories and thrilling adventures waiting for
            you. Whether you are into!
            <span className="text-red-600">{text}</span> <Cursor />
          </p>
        </div>
      </div>

      <div className="backdrop-blur-sm bg-black/60 shadow-sm shadow-white mx flex flex-col mt-10 w-[90vw] items-center gap-3 py-4 lg:flex-row md:mx-20 lg:mx-52 lg:px-3 rounded-lg">
        <Image
          src={aflam}
          height={300}
          width={400}
          alt="logo"
          className="object-contain flex h-[300px] w-[400px] rounded-lg cursor-pointer hover:scale-105 transition ease-in duration-300 "
        />

        <div className=" flex flex-col m-4 text-wrap  border-box   ">
          <p className="text-xl text-amber-600  ">
            Immerse yourself in the enchanting world of cinema with our
            carefully curated collection of movies. From timeless classics to
            the latest blockbusters, our diverse selection caters to every taste
            and genre. Discover gripping narratives, stunning visuals, and
            unforgettable performances that will transport you to new worlds and
            evoke a range of emotions. Whether you are seeking heart-pounding
            action, heartwarming drama, or side-splitting comedy, our collection
            has something for everyone. Join us on a cinematic journey and
            unlock the magic of storytelling today!
          </p>
          <button className="bg-blue-600 h-7 w-14 rounded ml-4 mt-2 cursor-pointer shadow-md active:bg-blue-700 shadow-slate-600 transiton ease-in-out duration-500 hover:scale-105 text-xs ">
            See more{" "}
          </button>
        </div>
      </div>
      <div className="backdrop-blur-sm bg-black/60 shadow-sm shadow-white mx flex flex-col mt-10 w-[90vw] items-center gap-3 py-4 lg:flex-row md:mx-20 lg:mx-52 lg:px-4 rounded-lg">
        <Image
          src={anime}
          height={300}
          width={400}
          alt="logo"
          className="object-contain h-[300px] w-[400px]  rounded-lg cursor-pointer hover:scale-105 transition ease-in duration-300  "
        />

        <div className=" flex flex-col m-4 text-wrap  border-box   ">
          <p className="text-xl text-amber-600 ">
            Embark on an extraordinary adventure into the captivating world of
            anime with our meticulously curated collection. From iconic classics
            to the latest releases, our diverse selection encompasses a wide
            range of genres and styles, ensuring there is something for every
            anime enthusiast. Immerse yourself in gripping storylines,
            breathtaking animation, and memorable characters that will whisk you
            away to fantastical realms and stir your emotions. Whether you are
            craving exhilarating action, heartwarming romance, or mind-bending
            fantasy, our anime collection promises to delight and inspire. Join
            us on an anime odyssey and unlock the magic of storytelling today!
          </p>
          <button className="bg-blue-600 h-7 w-14 rounded ml-4 mt-2 cursor-pointer shadow-md active:bg-blue-700 shadow-slate-600 transiton ease-in-out duration-500 hover:scale-105 text-xs ">
            See more{" "}
          </button>
        </div>
      </div>

      <div className="backdrop-blur-sm bg-black/60 shadow-sm shadow-white mx flex flex-col mt-10 w-[90vw] items-center gap-3 py-4 lg:flex-row md:mx-20 lg:mx-52 lg:px-4 rounded-lg">
        <div className="flex justify-center max-w-[400px] items-center mx-4">
          <Carousel slides={slides} />
        </div>
        <div className="flex  m-4 text-wrap  border-box ">
          <p className="  text-xl text-amber-600 ">
            {" "}
            Explore our diverse collection of books, from classics to
            bestsellers. Lose yourself in captivating stories and inspiring
            characters. Whether you are into thrilling mysteries, heartwarming
            romance, or thought-provoking non-fiction, we have something for
            every reader. Embark on literary adventures that will transport you
            to different worlds and spark your imagination. Join us and discover
            the joy of reading today!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
