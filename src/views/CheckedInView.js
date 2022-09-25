import { PageContext } from "../hooks/pageContext";
import React, { useContext } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function CheckedInView() {
  const auth = useContext(PageContext);

  return (
    <div className="flex justify-center items-center bg-gray-200 h-full flex-col">
      <div className="text-xl font-bold items-center justify-center flex text-center     pb-4">
        You have been checked into Room 22B!
      </div>
    </div>
  );
}
