import HomeIcon from "@fluentui/svg-icons/icons/home_32_regular.svg";
import BlogIcon from "@fluentui/svg-icons/icons/content_view_32_regular.svg";
import PersonIcon from "@fluentui/svg-icons/icons/person_32_regular.svg";
import CoffeeIcon from "@fluentui/svg-icons/icons/drink_coffee_24_regular.svg";
import clsx from "clsx";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import IconButton from "components/IconButton";

const NavMenu = () => {
  return (
    <nav className="fixed flex flex-col top-0 w-[360px] h-[100vh] pt-[76px] overflow-y-auto z-10 bg-blue-600/80 backdrop-blur-lg border-r-1 border-blue-500">
      <ul className="list py-8 space-y-4">
        <NavMenuItem href="/" icon={<HomeIcon />} label="Home" selected />
        <NavMenuItem href="/blog" icon={<BlogIcon />} label="Blog" />
        <NavMenuItem href="/about" icon={<PersonIcon />} label="About me" />
        <NavMenuItem
          href="/donate"
          icon={<CoffeeIcon viewbox="0 0 24 24" width="32" height="32" />}
          label="Pay me a coffee"
        />
      </ul>
      <ul className="list flex flex-row justify-end mt-auto p-8 space-x-4">
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
    </nav>
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
            "flex flex-row items-center text-lg px-8 w-[100%] h-12 text-gray-100 fill-gray-100 relative",
            selected &&
              "before:block before:absolute before:bg-blue-400 before:left-0 before:w-2 before:h-[100%]"
          )}
        >
          {icon && <span className="mr-4">{icon}</span>}
          {label}
        </a>
      </Link>
    </li>
  );
};
