import React from "react";
import Nav from "./Nav";
import { events } from "../data";
import price from "../img/price.svg";
import share from "../img/share.svg";
import heart from "../img/heart.svg";
import { Link } from "react-router-dom";
export default function Eventdetail() {
  return (
    <>
      <Nav />
      <div className="relative h-auto bg-gray-300">
        <img
          className="  w-full  object-cover h-96 opacity-70"
          src={events[4].img}
          alt=""
        />
        <div className="absolute top-10 right-40 bg-white w-3/4 h-screen ">
          <div className="flex bg-gray-50">
            <div className="flex-shrink-0">
              <img className="h-128" src={events[4].img} alt="" />
            </div>
            <div className="flex flex-col gap-10 px-14 py-10">
              <div className="text-gray-400 text-5xl">
                <p>April</p>
                <p>24th</p>
              </div>
              <div className="mt-10">
                <p className="font-bold text-2xl">Mind set for Startups</p>
                <div className="flex font-medium text-lg space-x-2">
                  <p>by</p>
                  <p className="text-amber-400">Ak Events</p>
                </div>
              </div>
              <div className="flex space-x-4 items-center ">
                <p className="text-gray-500">14711 followers</p>
                <button className="border-2 border-amber-400 text-amber-400 p-2  rounded-lg ">
                  FOLLOW
                </button>
              </div>
              <div className="flex items-start mt-10">
                <img src={price} alt="" />
                <p className="font-medium text-4xl">150 birr</p>
              </div>
            </div>
          </div>
          <div className="border-b-2 flex items-center justify-between px-20 h-24">
            <div className="flex ">
              <img className="h-8 w-10" src={share} alt="" />
              <img className="h-8 w-10 ml-14" src={heart} alt="" />
            </div>

            <Link to="/checkout">
              <button className="bg-green-500 text-white rounded-lg text-3xl font-semibold px-24 py-3">
                BUY
              </button>
            </Link>
          </div>
          <div className="flex py-10 px-5 border-b-2">
            <div className="h-96  w-3/4 bg-gray-600"></div>
            <div className="w-96 h-40 flex p-8 flex-col gap-32 items-center justify-between">
              <div>
                <p className="text-amber-500 text-xl leading-relaxed font-medium">
                  Date and time
                </p>
                <p className="font-medium text-lg ">Sun, April 24, 2022</p>
                <p className="font-medium mt-6 text-lg">
                  4:00 AM to 5:30 AM EAT
                </p>
              </div>
              <div>
                <p className="text-amber-500   text-xl leading-relaxed font-medium">
                  Location
                </p>
                <p className="font-medium text-xl">SEMEN Mountains</p>
              </div>
            </div>
          </div>

          <div className="flex p-10 border-b-2 ">
            <div className="h-128  w-1/2 p-5">
              <p className="text-lg font-medium">About</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                velit doloremque doloribus expedita culpa et. Rem, obcaecati
                nesciunt asperiores dolor praesentium dolorem labore illo magni
                ad numquam aliquid debitis expedita. Explicabo magni quo nihil
                nostrum at minus libero est, obcaecati repellat adipisci quas
                pariatur ullam voluptatum maxime. Saepe, nobis ad, fuga
                repudiandae excepturi consequuntur eveniet dolorum, eum magni
                modi quos? Perspiciatis ipsa deserunt, error obcaecati soluta
                similique perferendis maxime veniam cupiditate dolore iure quo
                corrupti distinctio velit libero exercitationem excepturi
                consequatur voluptates fugiat iste dolorem minima nostrum nam
                quaerat. Illum? Odit harum ad repellat eius ut commodi ipsam
                fugit rerum consequuntur quod, quae, dolores enim? Temporibus
                atque voluptatibus pariatur similique, impedit veritatis maxime
                ipsa qui, ipsam, delectus unde enim culpa. Voluptas ex illo eius
                id aut iure quisquam eaque deleniti sed autem, maiores possimus
                ratione dignissimos numquam, quasi ullam recusandae ipsa
                laudantium ab laboriosam distinctio at est adipisci. Corrupti,
                eligendi.{/*  */}
              </p>
            </div>
            <span className="h-128 w-1 bg-gray-200"></span>
            <div className="h-128 w-1/2 flex flex-col gap-2 items-center  rounded-lg  p-5">
              <p className="text-lg font-medium mb-4">Tickets on other dates</p>
              <div className="flex justify-between w-full py-3 px-5 rounded-2xl  border-2">
                <div>
                  <p>SAT</p>
                  <p className="text-gray-500">22/5/22</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xl py-4 px-8 rounded-xl ">
                  150
                </button>
              </div>
              <div className="flex justify-between w-full py-3 px-5 rounded-2xl  border-2">
                <div>
                  <p>SAT</p>
                  <p className="text-gray-500">22/5/22</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xl py-4 px-8 rounded-lg ">
                  150
                </button>
              </div>
              <div className="flex justify-between w-full py-3 px-5 rounded-2xl  border-2">
                <div>
                  <p>SAT</p>
                  <p className="text-gray-500">22/5/22</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xl py-4 px-8 rounded-lg ">
                  150
                </button>
              </div>
              <div className="flex justify-between w-full py-3 px-5 rounded-2xl  border-2">
                <div>
                  <p>SAT</p>
                  <p className="text-gray-500">22/5/22</p>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xl py-4 px-8 rounded-lg ">
                  150
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center p-16 justify-center gap-12 border-b-2 bg-gray-50">
            <div className="flex flex-col items-center gap-7">
              <img
                className="h-32 w-32 border-2 rounded-full"
                src="https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt=""
              />
              <p className="text-3xl">Astra shine EVENTS</p>
            </div>
            <div className="flex gap-32">
              <button className="border-2 border-amber-400 text-amber-400 p-2  rounded-lg ">
                FOLLOW
              </button>
              <button className=" bg-amber-400 text-white p-2  rounded-lg ">
                CONTACT
              </button>
            </div>
          </div>
          <div className="p-10">
            <p className="font-medium  text-lg">
              Other Events By this organizer{" "}
            </p>
            <div className="flex justify-between mt-10">
              <div className="h-80 w-72 rounded-lg bg-gray-400"></div>
              <div className="h-80 w-72 rounded-lg bg-gray-400"></div>
              <div className="h-80 w-72 rounded-lg bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
