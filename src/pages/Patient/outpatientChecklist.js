import React, { useState } from "react";
import OutpatientView from "../../views/OutpatientView";
import Navigation from "../../components/navigation";

export default function OutpatientChecklist() {
  const tabs = [
    { title: "Visitation", href: "/patientdisplay" },
    { title: "Outpatient", href: "/outpatientchecklist" },
  ];

  return (
    <div className="h-screen w-screen bg-black">
      <OutpatientView />
      <Navigation tabs={tabs} />
    </div>
  );
}
