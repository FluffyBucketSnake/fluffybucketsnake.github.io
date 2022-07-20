import NavigationIcon from "@fluentui/svg-icons/icons/navigation_24_regular.svg";
import clsx from "clsx";
import IconButton from "components/IconButton";
import React, { FC, useState } from "react";
import NavBarMenu from "./NavBarMenu";

export type NavBarVariant = "overlay" | "fab";

export type NavBarProps = {
  variant?: NavBarVariant;
};

const NavBar: FC<NavBarProps> = ({ variant = "fab" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
              "rounded-full bg-primary-500/80 hover:bg-primary-500/90 active:bg-primary-500/70 shadow-lg backdrop-blur-lg border-1 border-primary-500"
          )}
          onClick={openMenu}
        >
          <NavigationIcon width="24" height="24" />
        </IconButton>
      </nav>
      <NavBarMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default NavBar;
