import React from "react";

function Navigation(){
  const Menus = [{ name: "Home", icon: "home-outlnie", dis: "translate-x-0" }];
  return (
    //Create a footer which will go at the bottom of the screen//
    <footer className="absolute h-[126px] bg-white text-black bottom-0 w-full">
      <div className="w-full h-full flex items-center justify-center">
        Hello Demir!
      </div>
    </footer>
  );
};

export default Navigation;
