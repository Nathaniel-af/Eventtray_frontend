import React from "react";

function Checkout() {
  return (
    <>
      <div className="flex px-10 bg-stone-700">
        <div className="flex flex-col h-screen w-3/4  bg-white">
          <div className="text-center border-b-2 border-gray-300 py-8">
            <h2 className="font-semibold text-lg">
              Event Title Lorem ipsum, dolor sit amet consectetur adipisicing
              elit
            </h2>
            <p className="text-gray-400">
              sat ,Jun 4 , 2022 5:00 PM - 10:00 PM
            </p>
          </div>
          <div className="border-b-2 border-gray-300 py-10 flex justify-around">
            <span className="flex flex-col gap-1 font-light">
              <h2 className="font-semibold text-gray-700 text-base mb-3">
                Event Name JUNE 4
              </h2>
              <p>$55.00 + $4.23</p>
              <p>Sales end on Jun 3,2022</p>
              <p>Venue - Bole</p>
              <p>Jun 4,2022 5:00 PM - 10:00 PM</p>
            </span>

            <select
              className="h-10 w-14 px-2 border-2 border-[#5995fd] bg-white rounded-md"
              name="amount"
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
          <button className="bg-amber-600 w-1/3 p-5 self-center text-white mt-10 rounded-md">
            {" "}
            CHECK OUT
          </button>
        </div>
        <div className="flex flex-col w-1/3 h-screen bg-gray-200">
          <img
            className="h-60 object-fill"
            src="https://img.freepik.com/free-vector/business-startup-concept-with-rocket-bulb-design_1017-33470.jpg?w=740&t=st=1649255325~exp=1649255925~hmac=ae3796c7fbb886fc2e40d5fccdbf381d97d61aeb047dd4fe48fedd9d4747fb70"
            alt=""
          />
          <div className="px-10 py-10 flex flex-col gap-3 ">
            <h2 className="font-semibold text-lg">Order Summary</h2>
            <div className="flex flex-col border-b-2 border-gray-400 py-5 gap-2    ">
              <span className="flex justify-between">
                <p>1 x Event name</p>
                <p>$55.00</p>
              </span>
              <p>JUNE 4</p>
            </div>
            <div className="flex flex-col border-b-2 border-gray-400 py-5 gap-2 ">
              <span className="flex justify-between">
                <p>Subtotal</p>
                <p>$55.00</p>
              </span>
              <span className="flex justify-between">
                <p>Fees</p>
                <p>$4.23</p>
              </span>
            </div>
            <span className="flex justify-between font-semibold">
              <p>Total</p>
              <p>$59.23</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
