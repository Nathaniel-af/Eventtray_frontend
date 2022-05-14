import React, { useContext, useState } from "react";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
// import { User } from "../context/Check";
import home from "../img/home.svg";
import about from "../img/about.svg";
import chat from "../img/chat.svg";
import discover from "../img/discover.svg";
import ticket from "../img/ticket.svg";
import { useUserAuth } from "../context/UserAuthContext";
export default function Nav() {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(user);

  return (
    <>
      <nav className="bg-white sticky top-0 z-50  py-2">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center space-x-5">
              <a className="flex-shrink-0" href="/">
                <img className="h-12 w-9" src={logo} alt="Workflow" />
              </a>
              <Link to="/search">
                <button className="rounded-sm flex flex-nowrap  space-x-4 w-full py-1 px-4 bg-gray-200 text-gray-400 shadow text-base focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <svg
                    className="w-6 h-6 "
                    data-darkreader-inline-stroke=""
                    fill="none"
                    stroke="currentColor"
                    Style="--darkreader-inline-stroke:currentColor;"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p>Search Person , Organizer , Event</p>
                </button>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <div className="hidden font-inter gap-4 text-sm md:flex items-center">
                {user && (
                  <Link
                    className="text-gray-800   hover:text-gray-600  px-3 py-2"
                    to="/"
                  >
                    <img className="ml-2" src={ticket} alt="" />
                    Tickets
                  </Link>
                )}

                <Link
                  className="text-gray-800   hover:text-gray-600  px-3 py-2"
                  to="/"
                >
                  <img className="ml-1" src={home} alt="" />
                  Home
                </Link>
                {user && (
                  <Link
                    className="text-gray-800   hover:text-gray-600 p-3  "
                    to="/Chat" //Messenger
                  >
                    <img className="ml-1" src={chat} alt="" />
                    Chat
                  </Link>
                )}

                {user ? (
                  <Link
                    className="text-gray-800  hover:text-gray-600  px-3 py-2"
                    to="/feed" //Messenger
                  >
                    <img className="ml-2" src={discover} alt="" />
                    Discover
                  </Link>
                ) : (
                  <Link
                    className="text-gray-800  hover:text-gray-600  px-3 py-2"
                    to="/feed" //Messenger
                  >
                    <img className="ml-4" src={about} alt="" />
                    About Us
                  </Link>
                )}
              </div>

              {user ? (
                <div>
                  {" "}
                  <img
                    onClick={() => {
                      setFlag(!flag);
                    }}
                    alt="profil"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="mx-auto object-cover rounded-full h-14 w-14 border-2 border-amber-400"
                  />
                  <div
                    className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white  ring-1 ring-black ring-opacity-5 ${
                      flag ? "block" : "hidden"
                    }`}
                  >
                    <div
                      className="py-1 "
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div
                        className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900  "
                        role="menuitem"
                      >
                        <span className="">
                          <button>Settings</button>
                        </span>
                      </div>
                      <div
                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                        role="menuitem"
                      >
                        <span className="">
                          <button>Account</button>
                        </span>
                      </div>
                      <div
                        className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900  "
                        role="menuitem"
                      >
                        <span className="">
                          <button className="" onClick={handleLogout}>
                            Logout{" "}
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-5">
                  <Link to="/otp">
                    <button className="px-6 py-2 text-base font-semibold text-white bg-amber-500 rounded-full shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-amber-200">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
