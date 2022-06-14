import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle, AiOutlineHeart } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Posts({ posts, loading }) {
  const navigate = useNavigate();
  function handleClick() {}

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
      {posts.map((data) => (
        <div
          key={data.id}
          className="group hover:shadow-2xl shadow-black"
          onClick={() => {
            navigate(`/Eventdetail/:${data.id}`);
            window.scrollTo(0, 0);
          }}
        >
          <div className=" w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:h-80 lg:aspect-none ">
            <img
              src={`https://eventtray-api.herokuapp.com/${data.image}`}
              alt=""
              className="w-full h-full object-center object-cover lg:w-full lg:h-full  "
            />
          </div>

          <div className="mt-4 flex flex-col gap-2 py-2 pl-5 relative">
            <AiOutlineHeart
              className="rounded-full bg-white p-1 absolute top-[-30px] right-5  text-gray-800 shadow-md hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                navigate("/search");
              }}
              size={32}
            />
            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase">
                <a href="#">
                  <span aria-hidden="true" className="" />
                  {data.eventName}
                </a>
              </h3>
            </div>
            <span className="text-sm text-gray-700 font-medium">
              <MdOutlineLocationOn
                className="text-amber-400 inline mr-2"
                size={24}
              />
              {data.venue}
            </span>
            <span className="text-sm text-gray-700 font-medium">
              <FaRegCalendarAlt
                className="text-amber-400 inline mr-2"
                size={20}
              />
              {data.eventStartDate}
            </span>
            <span className="text-sm text-gray-700 font-medium">
              <AiOutlineDollarCircle
                className="text-amber-400 inline mr-2"
                size={20}
              />
              120
            </span>
            <span className="px-1">
              <p className="text-sm font-semibold text-gray-800">
                {data.organizer}
              </p>
              <IoIosPerson className="inline text-gray-800 mr-2" />
              <p className="inline text-sm font-semibold text-gray-800">
                1.4k followers
              </p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
