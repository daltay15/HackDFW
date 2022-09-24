import { useLocation } from "react-router-dom";

export default function LinkItem({ href, title }) {
  const location = useLocation();
  console.log(location.pathname);
  const isActive = location.pathname == href;

  return (
    <div className={`grow h-full flex items-center justify-center border-t border-gray-400 border-r ${isActive ? "bg-gray-300" : "bg-gray-200"}`}>
    <a href={href}>
      <div
        className={`text-md flex items-center cursor-pointer hover:scale-110 transition duration-100 font-novaregular text-black  ${
          isActive ? "scale-105 font-bold" : ""
        }`}
      >
        {title}
      </div>
    </a>
    </div>
  );
}
