import React from "react";
import { catagories } from "../data";

export default function Cata() {
  return (
    <div className="px-8 mt-16 text-2xl  text-white font-extrabold ">
      <p className="text-black">Catagories</p>
      <div className="flex h-64 mt-5 justify-between gap-10 w-[100%] overflow-x-scroll scroll-smooth scrollbar-hide">
        {catagories.map((cata, id) => {
          return (
            <div
              key={id}
              className="h-60 min-w-[33%] group flex justify-around items-center rounded-2xl  bg-black "
            >
              <p>{cata.cat}</p>
              <img
                className="h-32 w-36 group-hover:scale-110"
                src={cata.img}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
