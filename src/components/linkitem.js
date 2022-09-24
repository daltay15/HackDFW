import { useLocation } from "react-router-dom";

export default function LinkItem({ href, title }) {
  const location = useLocation();
  console.log(location.pathname);
  const isActive = location.pathname == href;

  return (
    <div className="grow h-full flex items-center justify-center">
    <a href={href}>
      <div
        className={`text-xs flex items-center cursor-pointer hover:scale-110 transition duration-100 font-novaregular text-black  ${
          isActive ? "scale-105 underline" : ""
        }`}
      >
        {title}
      </div>
    </a>
    </div>
  );
}
