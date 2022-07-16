import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import React, { FC } from "react";
import IconButton from "components/IconButton";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col align-center mt-auto p-16 space-y-4 bg-secondary-500 border-t-1 border-secondary-300 text-secondary-contrast">
      <ul className="flex justify-center flex-row space-x-4">
        <li>
          <IconButton
            color="secondaryContrast"
            href="https://github.com/fluffybucketsnake"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoGithub size={32} />
          </IconButton>
        </li>
        <li>
          <IconButton
            color="secondaryContrast"
            href="https://www.linkedin.com/in/fluffybucketsnake-1379/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoLinkedin size={32} />
          </IconButton>
        </li>
      </ul>
      <span className="text-center text-lg">Developed by me :)</span>
      <span className="text-center text-sm">Made with Next.js</span>
    </footer>
  );
};

export default Footer;
