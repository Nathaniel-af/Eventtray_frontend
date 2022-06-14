import React, { useEffect, useState } from "react";
import Moment from "moment";
import Nav from "./Nav";
import { events } from "../data";
import price from "../img/price.svg";
import share from "../img/share.svg";
import heart from "../img/heart.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Helmet from "react-helmet";
// import ReactMapGL from "react-map-gl";
import Otherdates from "./otherdates";
import { Checkcontxt } from "../context/Check";
export default function Eventdetail() {
  const { setTicket, setDetail } = Checkcontxt();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 32.34321,
    longitude: 17.73321,
    width: "100%",
    height: "100%",
    zoom: 10,
  });
  console.log(id);
  useEffect(() => {
    const callapi = async () => {
      try {
        const data1 = await axios.get(
          `${process.env.REACT_APP_API}user/event/list-published/?id=${id.slice(
            1
          )}`
        );

        const data2 = await axios.get(
          `${process.env.REACT_APP_API}user/event/ticket/list/?id=${id.slice(
            1
          )}`
        );
        setEvents({ data1, data2 });
        setLoading(false);
        setTicket(data2);
        setDetail(data1);
      } catch (error) {
        console.log(error);
      }
    };
    callapi();
  }, []);
  const [event, setEvents] = useState([]);
  console.log(event);

  return (
    <>
      <Helmet>
        <title>
          {loading ? "Event Tray" : event.data1.data.events.eventName}
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <div className="bg-[url(https://img.freepik.com/free-vector/business-startup-concept-with-rocket-bulb-design_1017-33470.jpg?w=740&t=st=1649255325~exp=1649255925~hmac=ae3796c7fbb886fc2e40d5fccdbf381d97d61aeb047dd4fe48fedd9d4747fb70)] bg-[length:1400px_400px] bg-no-repeat bg-opacity-[50%] h-auto overflow-y-visible  flex justify-center">
        <div className=" bg-white w-3/4 h-auto mt-10 ">
          <div className="flex bg-gray-50">
            <div className="flex-shrink-0">
              <img className="h-128" src={events[4].img} alt="" />
            </div>
            <div className="flex flex-col gap-10 px-14 py-10">
              <div className="text-gray-400 text-5xl">
                <p>
                  {loading
                    ? "loading.."
                    : moment(
                        new Date(event.data1.data.events.eventStartDate)
                      ).format("MMMM d, YYYY")}
                </p>
                {/* <p>24th</p> */}
              </div>
              <div className="mt-10">
                <p className="font-bold text-2xl">
                  {loading ? "loading.." : event.data1.data.events.eventName}
                </p>
                <div className="flex font-medium text-lg space-x-2">
                  <p>by</p>
                  <p className="text-amber-400">
                    {loading ? "loading.." : event.data1.data.events.organizer}
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 items-center ">
                <p className="text-gray-500">1 followers</p>
                <button className="border-2 border-amber-400 text-amber-400 p-2  rounded-lg ">
                  FOLLOW
                </button>
              </div>
              <div className="flex items-start mt-10">
                <img src={price} alt="" />
                <p className="font-medium text-4xl">
                  {loading ? "loading.." : event.data2.data.ticket[0].price}{" "}
                  birr
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 bg-white flex items-center justify-between px-20 h-20 py-2 ">
            <div className="flex ">
              <img className="h-8 w-10" src={share} alt="" />
              <img className="h-8 w-10 ml-14" src={heart} alt="" />
            </div>

            <Link to="/checkout">
              <button className="bg-green-500 text-white rounded-lg text-2xl font-semibold px-16 py-3  ">
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
                <p className="font-medium text-lg ">
                  Sun,{" "}
                  {loading
                    ? "loading.."
                    : moment(
                        new Date(event.data1.data.events.eventStartDate)
                      ).format("MMMM d, YYYY")}
                </p>
                <p className="font-medium mt-6 text-lg">
                  4:00 AM to 5:30 AM EAT
                </p>
              </div>
              <div>
                <p className="text-amber-500   text-xl leading-relaxed font-medium">
                  VENUE
                </p>
                <p className="font-medium text-xl">
                  {loading ? "loading.." : event.data1.data.events.venue}
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-10 border-b-2 ">
            <div className="h-auto  w-1/2 p-5">
              <p className="text-lg font-medium">About</p>
              <p>
                {loading
                  ? "loading.."
                  : event.data1.data.events.eventDescription}
              </p>
            </div>
            <span className="h-auto w-1 bg-gray-200"></span>
            <div className="h-auto w-1/2 flex flex-col gap-2 items-center  rounded-lg  p-5">
              <p className="text-lg font-medium mb-4">Tickets on other dates</p>
              {loading
                ? "loading.."
                : event.data2.data.ticket.map((data) => {
                    return <Otherdates ticket={data} />;
                  })}
            </div>
          </div>

          <div className="flex flex-col items-center p-16 justify-center gap-12 border-b-2 bg-gray-50">
            <div className="flex flex-col items-center gap-7">
              <img
                className="h-32 w-32 border-2 rounded-full"
                src="https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                alt=""
              />
              <p className="text-3xl">
                {loading ? "loading.." : event.data1.data.events.organizer}
              </p>
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
