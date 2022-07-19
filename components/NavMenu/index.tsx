import HomeIcon from "@fluentui/svg-icons/icons/home_32_regular.svg";
import BlogIcon from "@fluentui/svg-icons/icons/content_view_32_regular.svg";
import PersonIcon from "@fluentui/svg-icons/icons/person_32_regular.svg";
import CoffeeIcon from "@fluentui/svg-icons/icons/drink_coffee_24_regular.svg";
import CloseIcon from "@fluentui/svg-icons/icons/dismiss_24_regular.svg";
import clsx from "clsx";
import Link from "next/link";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import IconButton from "components/IconButton";
import Drawer from "components/Drawer";

export type NavMenuProps = {
  open: boolean;
  onClose: () => void;
};

type PageInfo = {
  href: string;
  icon: ReactNode;
  label: string;
};

const pages: PageInfo[] = [
  {
    href: "/",
    icon: <HomeIcon />,
    label: "Home",
  },
  {
    href: "/blog",
    icon: <BlogIcon />,
    label: "Blog",
  },
  {
    href: "/about",
    icon: <PersonIcon />,
    label: "About me",
  },
  {
    href: "/donate",
    icon: <CoffeeIcon viewBox="0 0 24 24" width="32" height="32" />,
    label: "Pay me a coffee",
  },
];

const NavMenu: FC<NavMenuProps> = ({ open, onClose }) => {
  const [currentPath, setCurrentPath] = useState<string>();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <Drawer
      className="fixed flex flex-col items-start top-0 w-full sm:w-[360px] h-screen overflow-y-auto z-20 bg-primary-gradient/80 backdrop-blur-lg border-r-1 border-primary-500"
      onClose={onClose}
      open={open}
    >
      <IconButton className="m-2 p-[12px] w-auto" onClick={onClose}>
        <CloseIcon width="24" height="24" />
      </IconButton>
      <ul className="list py-8 w-[100%] space-y-4">
        {pages.map(({ href, icon, label }, index) => (
          <NavMenuItem
            key={index}
            href={href}
            icon={icon}
            label={label}
            selected={href === currentPath}
          />
        ))}
      </ul>
      <ul className="list flex flex-row justify-end mt-auto p-8 w-[100%] space-x-4">
        <li>
          <IconButton
            href="https://github.com/fluffybucketsnake"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoGithub size={32} />
          </IconButton>
        </li>
        <li>
          <IconButton
            href="https://www.linkedin.com/in/fluffybucketsnake-1379/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={32} />
          </IconButton>
        </li>
      </ul>
    </Drawer>
  );
};

export default NavMenu;

type NavMenuItemProps = {
  icon: ReactNode;
  label: string;
  href: string;
  selected?: boolean;
};

const NavMenuItem: FC<NavMenuItemProps> = ({ icon, label, href, selected }) => {
  return (
    <li>
      <Link href={href} passHref>
        <a
          className={clsx(
            "flex flex-row items-center text-lg px-8 w-[100%] h-12 text-primary-contrast fill-primary-contrast hover:text-primary-contrast/60 hover:fill-primary-contrast/60 active:text-primary-contrast/30 active:fill-primary-contrast/30 transition duration-200 relative",
            selected &&
              "before:block before:absolute before:bg-primary-400 before:left-0 before:w-2 before:h-[100%]"
          )}
        >
          {icon && <span className="mr-4">{icon}</span>}
          {label}
        </a>
      </Link>
    </li>
  );
};
