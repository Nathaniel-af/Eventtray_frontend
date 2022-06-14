import React, { useEffect, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLating,
} from "react-places-autocomplete";

import { useNavigate } from "react-router-dom";
import { events } from "../data";

import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle, AiOutlineHeart } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

export default function Trending() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Eventdetail");
    window.scrollTo(0, 0);
  }
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}user/event/list-published/`
      );
      setPosts(res.data.events);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  console.log(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const paginateLeft = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleselect = async (value) => {};

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl mb-4 font-extrabold tracking-tight text-gray-900">
          Events
        </h2>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          paginateLeft={paginateLeft}
          currentPage={currentPage}
        />
        <Posts posts={currentPosts} loading={loading} />

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {events.map((data) => (
            <div
              key={data.id}
              className="group hover:shadow-2xl shadow-black"
              onClick={handleClick}
            >
              <div className=" w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:h-80 lg:aspect-none ">
                <img
                  src={data.img}
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
                      {data.Event}
                    </a>
                  </h3>
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  <MdOutlineLocationOn
                    className="text-amber-400 inline mr-2"
                    size={24}
                  />
                  {data.location}
                </span>
                <span className="text-sm text-gray-700 font-medium">
                  <FaRegCalendarAlt
                    className="text-amber-400 inline mr-2"
                    size={20}
                  />
                  {data.time}
                </span>
                <span className="text-sm text-gray-700 font-medium">
                  <AiOutlineDollarCircle
                    className="text-amber-400 inline mr-2"
                    size={20}
                  />

                  {data.price}
                </span>
                <span className="px-1">
                  <p className="text-sm font-semibold text-gray-800">
                    {data.org}
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
        {/* <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleselect}>
                          I
    </PlacesAutocomplete> */}
      </div>
    </div>
  );
}
