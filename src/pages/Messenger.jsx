import React from "react";
import Nav from "../components/Nav";

function Messenger() {
  return (
    <>
      <Nav />

      <div className="mx-auto flex justify-center items-center w-full">
        <div className="mx-auto flex justify-center max-w-3xl md:mb-8 mt-4 bg-white rounded-lg items-center  md:p-0 p-8">
          <div className="h-full ">
            <div className="py-2 px-2">
              <div className="flex justify-between items-center py-2">
                <div className="mt-1 flex">
                  <div className="mr-2">
                    <img
                      src="https://avatars.githubusercontent.com/u/68494287?v=4"
                      alt="saman sayyar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-3 flex justify-start flex-col items-start">
                    <p className="text-gray-900 text-sm">samansayyar</p>
                    <p className="text-gray-600 text-xs">samansayyar</p>
                  </div>
                  <span className="text-xs mx-2">•</span>
                  <button className="text-indigo-500 text-sm capitalize flex justify-start items-start">
                    follow
                  </button>
                </div>
                <button
                  type="button"
                  className="relative p-2 focus:outline-none border-none bg-gray-100 rounded-full"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" w-full h-full">
              <img
                src="https://wallpaperaccess.com/full/345330.jpg"
                alt="saman"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="">
              {/* <!-- Comment --> */}
              <div className=" w-full absolute inset-0 bg-white">
                <div className="flex justify-start items-center py-2 px-4 border-b">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    ></path>
                  </svg>
                </div>
                <div className="p-2 mb-10">
                  {/* <!-- System Comment --> */}
                  <div className="flex justify-start flex-col space-y-3 items-start px-2 border-b border-gray-100">
                    <div className="relative mt-1 mb-3 pt-2 flex">
                      <div className="mr-2">
                        <img
                          src="https://avatars.githubusercontent.com/u/68494287?v=4"
                          alt="saman sayyar"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-2 w-full" x-data="{ replies : false }">
                        <p className="text-gray-600 md:text-sm text-xs w-full">
                          {/* <!-- Username User --> */}
                          <span className="font-normal text-gray-900">
                            samansayyar
                          </span>
                          {/* <!-- Username User -->
												You Can see? */}
                        </p>
                        <div className="flex space-x-4">
                          <div className="time mt-1 text-gray-400 text-xs">
                            <p>2d</p>
                          </div>
                          <button
                            type="button"
                            className="focus:outline-none time mt-1 text-gray-400 text-xs"
                          >
                            <p>replay</p>
                          </button>
                        </div>
                        <button
                          type="button"
                          className="focus:outline-none  mt-3 flex justify-center items-center"
                        >
                          <p className="text-xs text-center text-indigo-500 flex space-x-2">
                            <span>____ View replies (1)</span>{" "}
                            <svg
                              className="w-3 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </p>
                        </button>
                        <div className="flex justify-start flex-col space-y-3 items-start px-2 border-b border-gray-100">
                          <div className="relative mt-1 mb-3 pt-2 flex">
                            <div className="mr-2">
                              <img
                                src="https://avatars.githubusercontent.com/u/68494287?v=4"
                                alt="saman sayyar"
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            </div>
                            <div
                              className="ml-2 w-full"
                              x-data="{ replies : true }"
                            >
                              <p className="text-gray-600 md:text-sm text-xs w-full">
                                {/* <!-- Username User --> */}
                                <span className="font-normal text-gray-900">
                                  samansayyar
                                </span>
                                {/* <!-- Username User --> */}
                                You Can see?
                              </p>
                              <div className="flex space-x-4">
                                <div className="time mt-1 text-gray-400 text-xs">
                                  <p>2d</p>
                                </div>
                                <button
                                  type="button"
                                  className="focus:outline-none time mt-1 text-gray-400 text-xs"
                                >
                                  <p>replay</p>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start flex-col space-y-3 items-start px-2 border-b border-gray-100">
                    <div className="relative mt-1 mb-3 pt-2 flex">
                      <div className="mr-2">
                        <img
                          src="https://avatars.githubusercontent.com/u/68494287?v=4"
                          alt="saman sayyar"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-2 w-full">
                        <p className="text-gray-600 md:text-sm text-xs w-full">
                          {/* <!-- Username User --> */}
                          <span className="font-normal text-gray-900">
                            samansayyar
                          </span>
                          {/* <!-- Username User --> */}
                          You Can see?
                        </p>
                        <div className="time mt-1 text-gray-400 text-xs">
                          <p>2d</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- System Like and tools Feed --> */}
              <div className="flex justify-between items-start p-2 py-">
                <div className="flex space-x-2 items-center">
                  <button type="button" className="focus:outline-none Like">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" className="focus:outline-none">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" className="focus:outline-none ">
                    <svg
                      className="w-7 h-7 mb-1 ml-1 text-gray-600  z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex space-x-2 items-center">
                  <button type="button" className="focus:outline-none Like">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-2 flex flex-col space-y-3">
                <div className="w-full">
                  <p className="font-bold text-sm text-gray-700">234 likes</p>
                </div>
                <div className="w-full">
                  <p className="font-normal text-xs text-gray-500">
                    10 hours ago
                  </p>
                </div>
              </div>
              {/* <!-- End System Like and tools Feed --> */}
              <div className="z-50">
                <form>
                  <div className="flex justify-between border-t items-center w-full">
                    <div className="w-full ">
                      <input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="Add A Comment..."
                        className="w-full text-sm py-4 px-3 rounded-none focus:outline-none"
                      />
                    </div>
                    <div className="w-20">
                      <button className="border-none text-sm px-4 bg-white py-4 text-indigo-600 focus:outline-none">
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
