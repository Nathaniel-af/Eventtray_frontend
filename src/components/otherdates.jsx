import React from "react";
import { Link } from "react-router-dom";

export default function Otherdates({ ticket }) {
  return (
    <div className="flex justify-between w-full py-3 px-5 rounded-2xl  border-2">
      <div>
        <p>{ticket.ticketName}</p>
      </div>
      <Link to={`/checkout:${ticket.id}`}>
        {" "}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xl py-4 px-8 rounded-lg ">
          {ticket.price}
        </button>
      </Link>
    </div>
  );
}
