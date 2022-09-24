import React, { useState } from "react";

import Navigation from "../../components/navigation";

export default function PatientDisplay() {

  const tabs = [
    { title: "Home", href: "/patitnetdisplay" },
    { title: "Food", href: "/menu" },
    { title: "Translators", href: "/translate" },

  ];


  return (
    <div className="h-screen w-screen bg-black">
    <div className="flex justify-center items-center bg-gray-200 h-full">
      Patient home page
      
    </div>
    <Navigation tabs={tabs}/>
    </div>
  );
}
