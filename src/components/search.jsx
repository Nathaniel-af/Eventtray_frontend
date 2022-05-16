import React, { useState } from "react";
import search from "../img/search.png";
import { BsSearch } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";

function Search() {
  const [value, setValue] = useState();
  const [location, setLocation] = useState();

  return (
    <>
      <div className="flex ">
        <div className={`w-3/4 flex flex-col gap-5 p-10 `}>
          <div>
            <input
              className={`w-80 h-12 border-b-2  border-gray-500 p-5 outline-none text-lg ${
                value && "border-[#5995fd]"
              } `}
              placeholder="Search Anything"
              type="search"
              name="search"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <BsSearch
              className={`text-gray-500 text-2xl inline-block ${
                value && "text-[#5995fd]"
              } `}
            />
          </div>
          <div>
            <input
              className={` w-40 h-12 border-b-2 border-gray-500 p-5 outline-none  text-lg ${
                value && "border-[#5995fd]"
              }`}
              placeholder="ADAMA"
              type="search"
              name="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <TiLocation className="text-2xl text-gray-500 inline-block" />
          </div>

          <div className="text-[#5995fd] flex space-x-2">
            <button className=" bg-gray-100 rounded-full p-2 ">Online</button>
            <button className=" bg-gray-100 rounded-full p-2 ">Today</button>
            <button className=" bg-gray-100 rounded-full p-2 ">
              This weekend
            </button>
            <button className=" bg-gray-100 rounded-full p-2 ">Free</button>
            <button className=" bg-gray-100 rounded-full p-2 ">Music</button>
            <button className=" bg-gray-100 rounded-full p-2 ">
              Food and drink
            </button>
          </div>
          {/*  */}
        </div>
        <img className={`h-screen ${value && "hidden"}`} src={search} alt="" />
      </div>
    </>
  );
}

export default Search;
