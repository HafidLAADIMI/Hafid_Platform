import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useCallback, useEffect, useRef, useMemo, useState } from "react";
interface type{
  img:any,
  i:any,
}
function Carousel({ slides }) {
  const timeRef = useRef(null);
  const [index, setIndex] = useState(0);
  const prev = () => {
    if (index === 0) setIndex(slides.length - 1);
    else setIndex(index - 1);
  };
  const next = useCallback(() => {
    if (index === slides.length -1) setIndex(0);
    else setIndex(index + 1);
  }, [slides, index]);
  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      next();
    }, 1000);
    return () => clearTimeout(timeRef.current);
  }, [next]);

  return (
    <div className=" overflow-hidden relative ">
      <div
        className=" flex transition-transform ease-in-out duration-150 rounded-lg hover:rounded-lg "
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((img,i) => (
          <Image height={500} width={500} key={i} alt="img" src={img} className="rounded-lg hover:rounded-lg hover:scale-105 transition ease-in-out duration-150 cursor-pointer w-[40vw]  bg-cover max-sm:w-[75vw] max-sm:h-[25vh] sm:w-[49vw] sm:h-[25vh] md:pt-0 md:h-[35vh] md:w-[59vw] lg:h-[42vh] lg:w-[100vw] xl:h-[45vh] xl:w-[53vw] object-contain " />
        ))}
      </div>
        <div className=" bottom-0 ml-[47%] absolute z-1 flex justify-center flex-row gap-3 max-sm:ml-[35%]  sm:ml-[35%] md:ml-[40%]">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`  h-2 w-2 rounded-full ${
                i == index ? "bg-white" : " bg-slate-500"
              }`}
            >
              {" "}
            </div>
          ))}
        </div>
      <div className=" absolute top-[50%] rounded-full text-black bg-white left-[10%] cursor-pointer hover:bg-slate-400 transition ease-in-out duration-100">
        <FaChevronLeft onClick={prev} className="size-6" />
      </div>
      <div className=" absolute top-[50%] bg-white text-black rounded-full right-[10%] hover:bg-slate-400 transition ease-out duration-100">
        <FaChevronRight onClick={next} className="size-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default Carousel;
