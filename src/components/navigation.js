import React from "react";
import LinkItem from "./linkitem";

function Navigation({ tabs }) {

  return (
    //Create a footer which will go at the bottom of the screen//
    <footer className="absolute h-[126px] bg-white text-black bottom-0 w-full">
      <div className="w-full h-full items-center justify-center flex grow">
        {tabs.map(({ title, href }) => {
          return <LinkItem href={href} title={title}></LinkItem>;
        })}
      </div>
    </footer>
  );
}

export default Navigation;
