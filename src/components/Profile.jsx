import React, { useState } from "react";

import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const prof = JSON.parse(localStorage.getItem("profile"));

  return (
    <>
      <Nav />
      <div className="bg-[url(https://i.imgur.com/hrSm5dw.png)] bg-[length:1920px_1080px]  w-full h-screen">
        <div>
          <div className="container flex justify-center py-20">
            <div class="p-3 bg-white rounded-xl max-w-lg h-80 flex flex-col justify-between hover:shadow-lg">
              <div class="flex justify-between w-full">
                <div className="bg-gradient-to-r from-amber-400 to-blue-500om-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-24 h-24 relative overflow-hidden">
                  <img
                    src={`https://eventtray-api.herokuapp.com${prof.user.profilePicture}`}
                    width="150"
                    className="rounded-full bg-white"
                  />
                </div>

                <div class="ml-2 gap-8">
                  <div class="p-3 flex flex-col">
                    <h3 class="text-2xl">
                      {`${prof.user.firstName} ${prof.user.lastName}`}
                    </h3>
                    <span className="p-2 rounded-md text-gray-400">
                      username : {prof.user.username}
                    </span>
                  </div>
                </div>
                <div class="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <div class="mr-3">
                    <span class="text-gray-400 block">Phone Number</span>
                    <span class="font-bold text-black text-xl">
                      {prof.user.phoneNumber}
                    </span>
                  </div>

                  <div>
                    <span class="text-gray-400 block">ID</span>
                    <span class="font-bold text-black text-xl">
                      {prof.user.id}
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-center mt-2 gap-2">
                <button
                  class="w-full h-12 rounded-md bg-blue-700 text-white text-md hover:shadow hover:bg-blue-800"
                  onClick={() => navigate("/editprofile")}
                >
                  EDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
