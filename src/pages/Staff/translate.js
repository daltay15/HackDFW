import React, { useState } from "react";
import Navigation from "../../components/navigation";
import TranslateView from "../../views/TranslateView";


export default function Translate() {

  const tabs = [
    { title: "Home", href: "/staffdisplay" },
    { title: "Food", href: "/menu" },
    { title: "Translators", href: "/translate" },

  ];

  return (
    <div className="h-screen w-screen bg-black">
    <TranslateView/>
    <Navigation tabs={tabs}/>
    </div>
  );
}
