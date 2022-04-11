import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col align-center space-y-4 p-16 bg-green-500 border-t-1 border-green-300 text-gray-900">
      <div className="flex justify-center flex-row space-x-4">
        <a
          href="https://github.com/fluffybucketsnake"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 active:text-black"
        >
          <IoLogoGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/fluffybucketsnake-1379/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 active:text-black"
        >
          <IoLogoLinkedin size={32} />
        </a>
      </div>
      <span className="text-center text-lg">Developed by me :)</span>
      <span className="text-center text-sm">Made with Next.js</span>
    </footer>
  );
};

export default Footer;
