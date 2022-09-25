import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const greetingTime = require("greeting-time");
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[url('../public/bg.png')] bg-cover">
      <div className="z-[1] w-full flex items-center justify-center flex-col bg-white">
        <img
          className="mx-auto md:w-[25%] mb-0"
          src="logo.png"
          alt="Children's Health Logo"
        />

        <div className="w-full text-center font-bold mb-8 md:text-2xl">
          {greetingTime(new Date())}, who will you be logging in as today?
        </div>

        <div className="mx-4 md:w-[25%]">
          <div className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-20 border border-red-700 rounded mb-16">
            <Link to="/patientlogin">
              <button>Patient</button>
            </Link>
          </div>

          <div className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-20 border border-red-700 rounded mb-16">
            <Link to="stafflogin">
              <button>Staff</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
