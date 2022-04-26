import React from "react";
import data from "../data";
import price from "../img/price.svg";
import location from "../img/location.svg";

export default function Trending() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Trending
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {data.map((data) => (
            <div key={data.id} className="group hover:shadow-lg relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:h-80 lg:aspect-none">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2 py-2 pl-5">
                <div>
                  <h3 className="text-sm font-bold text-gray-800 uppercase">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {data.Event}
                    </a>
                  </h3>
                </div>

                <p className="text-sm font-medium text-gray-700">{data.org}</p>
                <p className="text-sm font-medium   ">
                  <img
                    className="h-6 w-6 inline-block"
                    src={location}
                    alt="price"
                  />
                  {data.location}
                </p>

                <p className="text-sm font-medium ">
                  <p>
                    <img
                      className="h-6 w-6 inline-block"
                      src={price}
                      alt="price"
                    />
                    {data.price}
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
