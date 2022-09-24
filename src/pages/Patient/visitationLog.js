import React, { useState } from "react";
import VisitationView from "../../views/VisitiationView";
import Navigation from "../../components/navigation";

export default function visitationLog() {
  const tabs = [
    { title: "Home", href: "/patientdisplay" },
    { title: "Outpatient", href: "/outpatientchecklist" },
    { title: "Visitation", href: "/visitationlog" },
  ];

  return (
    <div className="h-screen w-screen bg-black">
      <VisitationView />
      <Navigation tabs={tabs} />
    </div>
  );
}
