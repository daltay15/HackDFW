import { PageContext } from "../hooks/pageContext";
import React, { useContext } from "react";

export default function StaffView() {
  const auth = useContext(PageContext);

  return (
    <div className="flex justify-center items-center bg-gray-200 h-full">
      Staff home page
    </div>
  );
}
