import React, { useState, useContext } from "react";
import Navigation from "../../components/navigation";
import CheckedInView from "../../views/CheckedInView";
import { PageContext } from "../../hooks/pageContext";

export default function CheckedIn() {
  const tabs = [
    { title: "Home", href: "/staffdisplay" },
    { title: "Food", href: "/menu" },
    { title: "Translators", href: "/translate" },
  ];

  const auth = useContext(PageContext);

  return (
    <div className="h-screen w-screen bg-black">
      <CheckedInView />
      <Navigation tabs={tabs} />
    </div>
  );
}
