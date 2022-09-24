import React, { useState } from "react";
import Navigation from "../../components/navigation";
import StaffView from "../../views/StaffView";


export default function StaffDisplay() {

  const tabs = [
    { title: "Home", href: "/staffdisplay" },
    { title: "Food", href: "/menu" },
    { title: "Translators", href: "/translate" },
  ];

  return (
    <div className="h-screen w-screen bg-black">
    <StaffView/>
    <Navigation tabs={tabs}/>
    </div>
  );
}
