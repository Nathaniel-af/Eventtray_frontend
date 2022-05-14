import React, { useState } from "react";
import vector from "../img/Vector.png";
import logo from "../img/logobig.png";
import { Link } from "react-router-dom";
function CreateAccount() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="max-h-screen w-full bg-white flex justify-between">
        <div className="w-1/3 max-h-screen ">
          <div className="flex flex-col items-end py-2 ">
            <img className=" h-24 self-start ml-32" src={logo} alt="" />
            <div className="flex flex-col gap-8 mt-2 ">
              <h2 className="self-center text-gray-400 text-xl font-semibold">
                Create account
              </h2>
              <input
                className="bg-gray-300 h-10 w-80 rounded-2xl p-5 outline-[#98afd6]"
                type="text"
                placeholder="User Name"
              />
              <input
                className="bg-gray-300 h-10 rounded-2xl p-5 outline-[#98afd6]"
                type="text"
                placeholder="First Name"
              />
              <input
                className="bg-gray-300 h-10 rounded-2xl p-5 outline-[#98afd6]"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="bg-gray-300 h-10 rounded-2xl p-5 outline-[#98afd6]"
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="bg-gray-300 h-10 rounded-2xl p-5 outline-[#98afd6]"
                type="text"
                placeholder=" "
              />
              <button className="bg-[#5995fd] h-10 w-40 self-center rounded-2xl text-white ">
                SIGN UP
              </button>
              <Link className="self-center" to="/otp">
                already have account ? Login
              </Link>
            </div>
          </div>
        </div>
        <div className="max-h-screen">
          <img className="h-screen" src={vector} alt="" />
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
