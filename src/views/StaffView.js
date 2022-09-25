import { PageContext } from "../hooks/pageContext";
import React, { useContext } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function StaffView() {
  const auth = useContext(PageContext);

  //Redirect to the staff login page if the user is not logged in
  console.log(auth);
  if (auth[0] == "" || auth[0].username === "" || auth[0].isDoctor === false) {
    window.location.href = "/stafflogin";
  }

  return (
    <div className="flex justify-start items-center bg-gray-200 h-full flex-col pt-36">
      <div className="text-xl font-bold items-center justify-center flex text-center whitespace-pre pb-4">
        Welcome {auth[0].username}! {"\n"}Scan Below To Check In To {"\n"} Room
        22B
      </div>
      <QRCodeSVG className="pb-4" value={window.location.href + "/checkedin"} />
      <a href="/checkedin" className="font-bold text-blue-600 underline">
        Check In Without QR Code
      </a>
    </div>
  );
}
