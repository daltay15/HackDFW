import React, { useState } from "react";
import MenuView from "../../views/MenuView";

export default function Menu() {
  return (
    <div className="h-screen w-screen bg-black">
    <MenuView/>
    <Navigation tabs={tabs}/>
    </div>
  );
}
