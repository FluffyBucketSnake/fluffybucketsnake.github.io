import NavigationIcon from "@fluentui/svg-icons/icons/navigation_24_regular.svg";
import React from "react";

const NavBar = () => {
  return (
    <nav className="absolute p-2">
      <button className="group p-[12px]">
        <NavigationIcon
          className="fill-gray-100 group-hover:fill-white group-active:fill-gray-200"
          width="24"
          height="24"
        />
      </button>
    </nav>
  );
};

export default NavBar;
