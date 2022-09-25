import { PageContext } from "../hooks/pageContext";
import React, { useContext } from "react";

export default function StaffView() {
  const auth = useContext(PageContext);

  //Redirect to the staff login page if the user is not logged in
  console.log(auth);
  if (auth[0] == "" || auth[0].username === "" || auth[0].isDoctor === false) {
    window.location.href = "/stafflogin";
  }

  return (
    <div className="flex justify-center items-center bg-gray-200 h-full">
      Staff home page
    </div>
  );
}
