import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import { Checkcontxt } from "../context/Check";
import moment from "moment";
// import { useAlert } from "react-alert";
function Checkout() {
  // const alert = useAlert();
  const { check } = useParams();
  const { ticket, details } = Checkcontxt();
  const [value, SetValue] = useState(1);
  console.log(ticket);
  const history = useNavigate();
  const goback = () => {
    history(-1);
  };
  console.log(check);
  console.log(details);

  let bigCities = ticket.data.ticket.filter((e) => e.id == check.slice(1));
  console.log(bigCities);
  return (
    <>
      <div className="flex px-10 bg-stone-700">
        <div className="flex flex-col h-screen w-3/4  bg-white">
          <div className="text-center border-b-2 border-gray-300 py-8 px-2">
            <MdChevronLeft
              className="text-white bg-gray-800 rounded-full cursor-pointer"
              size={24}
              onClick={goback}
            />
            <h2 className="font-semibold text-lg">{bigCities[0].eventName}</h2>
            <p className="text-gray-400">
              {moment(new Date(details.data.events.eventStartDate)).format(
                "MMMM d, YYYY"
              )}{" "}
            </p>
            <p className="text-gray-400">
              {" "}
              {` ${details.data.events.eventStartTime}-${details.data.events.eventEndTime}`}
            </p>
          </div>
          <div className="border-b-2 border-gray-300 py-10 flex justify-around">
            <span className="flex flex-col gap-1 font-light">
              <h2 className="font-semibold text-gray-700 text-base mb-3">
                {bigCities[0].eventName} <p className="inline">-</p>
                {moment(new Date(details.data.events.eventStartDate)).format(
                  "MMMM d"
                )}
              </h2>
              <p>${bigCities[0].price}</p>
              <p>Sales end on Jun {}</p>
              <p>Venue - {details.data.events.venue}</p>
              <p>
                {moment(new Date(details.data.events.eventStartDate)).format(
                  "MMMM d, YYYY"
                )}{" "}
              </p>
              <p>
                {" "}
                {` ${details.data.events.eventStartTime}-${details.data.events.eventEndTime}`}
              </p>
            </span>

            <select
              defaultValue={1}
              className="h-10 w-14 px-2 border-2 border-[#5995fd] bg-white rounded-md"
              name="amount"
              value={value}
              onChange={(e) => {
                SetValue(e.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <button
            className="bg-amber-600 w-1/3 p-5 self-center text-white mt-10 rounded-md"
            onClick={() => {
              /*  */
              // alert.show("Oh look, an alert!");
            }}
          >
            {" "}
            CHECK OUT
          </button>
        </div>
        <div className="flex flex-col w-1/3 h-screen bg-gray-200">
          <img
            className="h-60 object-fill"
            src={`https://eventtray-api.herokuapp.com${bigCities[0].image}`}
            alt=""
          />
          <div className="px-10 py-10 flex flex-col gap-3 ">
            <h2 className="font-semibold text-lg">Order Summary</h2>
            <div className="flex flex-col border-b-2 border-gray-400 py-5 gap-2    ">
              <span className="flex justify-between">
                <p>
                  {value} x {bigCities[0].eventName}
                </p>
                <p>${value * bigCities[0].price}</p>
              </span>
              <p>JUNE 4</p>
            </div>
            <div className="flex flex-col border-b-2 border-gray-400 py-5 gap-2 ">
              <span className="flex justify-between">
                <p>Subtotal</p>
                <p>${value * bigCities[0].price}</p>
              </span>
              <span className="flex justify-between">
                <p>Tax</p>
                <p>$ 0.00</p>
              </span>
            </div>
            <span className="flex justify-between font-semibold">
              <p>Total</p>
              <p>${value * bigCities[0].price}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
