import React, { useState } from "react";

import Navigation from "../../components/navigation";
import PatientView from "../../views/PatientView";

export default function PatientDisplay() {

  const tabs = [
    { title: "Home", href: "/patientdisplay" },
    { title: "Outpatient", href: "/outpatientchecklist" },
    { title: "Visitation", href: "/visitationlog" },

  ];


  return (
    <div className="h-screen w-screen bg-black">
    <PatientView/>
    <Navigation tabs={tabs}/>
    </div>
  );
}
