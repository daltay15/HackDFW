import React, { useState } from "react";
import MenuView from "../../views/MenuView";
import Navigation from "../../components/navigation";

export default function Menu() {
  const tabs = [
    { title: "Home", href: "/staffdisplay" },
    { title: "Food", href: "/menu" },
    { title: "Translators", href: "/translate" },

  ];
  return (
    <div className="h-screen w-screen bg-black">
    <MenuView/>
    <Navigation tabs={tabs}/>
    </div>
  );
}
