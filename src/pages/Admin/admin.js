import React, { useState } from "react";
import AdminView from "../../views/admin/AdminView";
import { ToastContainer, toast } from "react-toastify";

export default function Admin() {
  const tabs = [
    { title: "Home", href: "/patientdisplay" },
    { title: "Outpatient", href: "/outpatientchecklist" },
    { title: "Visitation", href: "/visitationlog" },
  ];

  return (
    <div className="h-screen w-screen bg-black">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AdminView />
    </div>
  );
}
