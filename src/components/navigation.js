import React from "react";

const Navigation = () => {
  const Menus = [{ name: "Home", icon: "home-outlnie", dis: "translate-x-0" }];
  return (
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
      <ul>
        {Menus.map((menu) => (
          <li className="inline-block">
            <a href="#" className="flex items-center">
              <span className="material-icons-outlined">{menu.icon}</span>
              <span className="text-sm">{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
