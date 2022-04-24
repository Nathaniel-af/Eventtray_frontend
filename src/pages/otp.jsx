import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
export default function Otp() {
  const [value, setValue] = useState();
  let handlesubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <div className="flex h-screen w-screen shadow-lg justify-center bgpic bg-gray-100">
        <img src={ArrowCircleLeftIcon} alt="back" />
        <div className="m-auto flex flex-col gap-2 bg-white items-center shadow-md rounded-md p-12">
          <img className="h-20 " src={logo} alt="logo" />
          <h1 className="font-semibold text-lg">Sign in to EventTray </h1>
          <p className="font-light">
            Please enter your phone number and confirm code sent to you .
          </p>
          <form
            className="flex flex-col gap-3 items-center"
            onSubmit={handlesubmit}
          >
            <PhoneInput
              className="mt-7"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="ET"
              rules={{ required: true }}
            />
            <Link to="/submit">
              <button className="rounded-lg  text-white bg-amber-500 py-2 px-4">
                SEND
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
