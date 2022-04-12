import NavigationIcon from "@fluentui/svg-icons/icons/navigation_24_regular.svg";
import IconButton from "components/IconButton";
import React from "react";

const NavBar = () => {
  return (
    <nav className="absolute p-2 z-20">
      <IconButton className="p-[12px]">
        <NavigationIcon width="24" height="24" />
      </IconButton>
    </nav>
  );
};

export default NavBar;
