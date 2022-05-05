import React, { useState, useContext } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import logo from "../img/logo.png";
import back from "../img/back_to.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// import { User } from "../context/Check";

export default function Otp() {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [otp, setOtp] = useState();
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [comfobj, setComfobj] = useState();
  // const { Logedin, setLog } = useContext(User);
  const setUpRecaptcha = useUserAuth();

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) return;
    try {
      await comfobj.confirm(otp);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  let handlesubmit = async () => {
    if (value === "" || value === undefined)
      return setError("please enter a valid Phone number");
    try {
      const response = await setUpRecaptcha(value);
      setComfobj(response);
      setFlag(!flag);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="flex h-screen w-screen shadow-lg justify-center bgpic bg-gray-100">
        <Link to="/">
          <img className="h-10 m-7 w-10" src={back} alt="back" />
        </Link>
        <div
          className={`m-auto flex flex-col gap-2 bg-white items-center shadow-md rounded-xl p-12 ${
            flag && "hidden"
          }`}
        >
          <p>{error}</p>
          <img className="h-20 " src={logo} alt="logo" />
          <h1 className="font-semibold text-lg">Sign in to EventTray </h1>
          <p className="font-light">
            Please enter your phone number and confirm code sent to you .
          </p>
          <form className="flex flex-col gap-3 items-center">
            <PhoneInput
              className="mt-7"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="ET"
              rules={{ required: true }}
            />
            <div id="recaptcha-container" />

            <button
              className="rounded-lg  text-white bg-amber-500 py-2 px-4"
              onClick={(e) => {
                e.preventDefault();
                return handlesubmit();
              }}
            >
              SEND
            </button>
          </form>
        </div>
        <div className={`container m-auto  ${flag ? "block" : "hidden"}`}>
          <div className="max-w-sm mx-auto border-2  rounded-md shadow-lg md:max-w-lg">
            <div className="w-full">
              <div className="bg-white h-80 py-10 rounded text-center">
                <h1 className="text-2xl font-bold">OTP Verification</h1>
                <div className="flex flex-col mt-4">
                  {" "}
                  <span>Enter the OTP you received at</span>{" "}
                  <span className="font-bold">{value}</span>{" "}
                </div>
                <div
                  id="otp"
                  className="flex flex-row justify-center text-center px-2 mt-5"
                >
                  {" "}
                  {/* <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="first"
                    maxLength="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setOtp(e.target.value);
                    }}
                  />{" "}
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="second"
                    maxLength="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setOtp((prev) => {
                        return `${prev}${e.target.value}`;
                      });
                      console.log(value);
                    }}
                  />{" "}
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="third"
                    maxLength="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setOtp((prev) => {
                        return `${prev}${e.target.value}`;
                      });
                    }}
                  />{" "}
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="fourth"
                    maxLength="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setOtp((prev) => {
                        return `${prev}${e.target.value}`;
                      });
                    }}
                  />{" "}
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="fifth"
                    maxLength="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setOtp((prev) => {
                        return `${prev}${e.target.value}`;
                      });
                    }}
                  />{" "}
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="sixth"
                    maxLength="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setOtp((prev) => {
                        const final = `${prev}${e.target.value}`;
                        return Number(final);
                      });
                      console.log(otp);
                      verifyOtp();
                    }}
                  />{" "} */}
                  <form>
                    <input
                      type="text"
                      onChange={(e) => {
                        e.preventDefault();
                        setOtp(e.target.value);
                      }}
                    />
                    <button onClick={verifyOtp}>verify</button>
                  </form>
                </div>
                <div className="flex justify-center text-center mt-5">
                  {" "}
                  <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                    <span className="font-bold">Resend OTP</span>
                    <i className="bx bx-caret-right ml-1"></i>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
