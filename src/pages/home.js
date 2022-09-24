import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <img src="https://mma.prnewswire.com/media/1158375/Childrens_Health_Logo.jpg?p=facebook"></img>
      <div className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 border border-blue-700 rounded mt-[30px]">
        <button>Patient</button>

        <div className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 border border-blue-700 rounded mt-[40px]">
          <button>Staff</button>
        </div>
      </div>
    </div>
  );
}
