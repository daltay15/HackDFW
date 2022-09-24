import React, { useState } from "react";
import Navigation from "../../components/navigation";


export default function StaffDisplay() {

  const tabs = [
    { title: "Home", href: "/" },
    { title: "Translate", href: "/" },
    { title: "Food", href: "/" },

  ];

  return (
    <div className="h-screen w-screen bg-black">
    <div className="flex justify-center items-center bg-gray-200 h-full">
      Staff home page
      
    </div>
    <Navigation tabs={tabs}/>
    </div>
  );
}
