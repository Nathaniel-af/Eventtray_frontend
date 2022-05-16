import React from "react";
import { catagories } from "../data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export default function Cata() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    return (slider.scrollLeft = slider.scrollLeft - 500);
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    return (slider.scrollLeft = slider.scrollLeft + 500);
  };

  return (
    <div className="px-8 mt-16 text-2xl  text-white font-extrabold relative group  ">
      <p className="text-black">Catagories</p>
      <div
        id="slider"
        className="flex items-center h-64 mt-5 justify-between gap-5 w-[100%] overflow-x-scroll scroll-smooth scrollbar-hide "
      >
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-amber-400 text-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        {catagories.map((cata, id) => {
          return (
            <div
              key={id}
              className="h-60 min-w-[33%]  group-1 flex justify-around items-center rounded-2xl  bg-black "
            >
              <p>{cata.cat}</p>
              <img
                className="h-32 w-36 group-1-hover:scale-110"
                src={cata.img}
                alt=""
              />
            </div>
          );
        })}
        <MdChevronRight
          onClick={slideRight}
          className="bg-amber-400 text-white rounded-full absolute right-0  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
      </div>
    </div>
  );
}
