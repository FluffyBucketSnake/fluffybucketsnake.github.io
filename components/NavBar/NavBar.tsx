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
          "p-4 z-10",
          variant === "overlay" && "absolute",
          variant === "fab" && "fixed"
        )}
      >
        <IconButton
          variant={variant === "fab" ? "filled" : "text"}
          color={variant === "fab" ? "primary" : "primaryContrast"}
          fluent
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
