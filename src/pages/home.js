import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <img
        className="mx-auto h-auto w-auto mb-[500px]"
        src="https://mma.prnewswire.com/media/1158375/Childrens_Health_Logo.jpg?p=facebook"
        alt="Children's Health Logo"
      />
      <div className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 border border-blue-700 rounded mt-[30px]">
        <button>Patient</button>
      </div>

      <div className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 border border-blue-700 rounded mt-[40px]">
        <Link to="stafflogin">
          <button>Staff</button>
        </Link>
      </div>
    </div>
  );
}
