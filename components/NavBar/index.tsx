import NavigationIcon from "@fluentui/svg-icons/icons/navigation_24_regular.svg";
import clsx from "clsx";
import IconButton from "components/IconButton";
import React, { FC } from "react";

export type NavBarVariant = "overlay" | "fab";

export type NavBarProps = {
  onOpenNavMenu?: () => void;
  variant?: NavBarVariant;
};

const NavBar: FC<NavBarProps> = ({ onOpenNavMenu, variant = "fab" }) => {
  return (
    <nav
      className={clsx(
        "p-2 z-10",
        variant === "overlay" && "absolute",
        variant === "fab" && "fixed"
      )}
    >
      <IconButton
        className={clsx(
          "p-[12px]",
          variant === "fab" &&
            "rounded-full bg-blue-600/80 shadow-lg backdrop-blur-lg border-1 border-blue-500"
        )}
        onClick={onOpenNavMenu}
      >
        <NavigationIcon width="24" height="24" />
      </IconButton>
    </nav>
  );
};

export default NavBar;
