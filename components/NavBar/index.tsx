import NavigationIcon from "@fluentui/svg-icons/icons/navigation_24_regular.svg";
import IconButton from "components/IconButton";
import React, { FC } from "react";

export type NavBarProps = {
  onOpenNavMenu?: () => void;
};

const NavBar: FC<NavBarProps> = ({ onOpenNavMenu }) => {
  return (
    <nav className="absolute p-2 z-10">
      <IconButton className="p-[12px]" onClick={onOpenNavMenu}>
        <NavigationIcon width="24" height="24" />
      </IconButton>
    </nav>
  );
};

export default NavBar;
