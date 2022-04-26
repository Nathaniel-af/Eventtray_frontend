import React, { useState, useContext } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import logo from "../img/logo.png";
import back from "../img/back_to.svg";
import { Link, useNavigate } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import { User } from "../context/Check";

export default function Otp() {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const { Logedin, setLog } = useContext(User);
  let handlesubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <div className="flex h-screen w-screen shadow-lg justify-center bgpic bg-gray-100">
        <img className="h-10 m-7 w-10" src={back} alt="back" />
        <div className="m-auto flex flex-col gap-2 bg-white items-center shadow-md rounded-xl p-12">
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
              <button
                className="rounded-lg  text-white bg-amber-500 py-2 px-4"
                onClick={(e) => {
                  e.preventDefault();
                  setLog(true);
                  navigate("/");
                }}
              >
                SEND
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
