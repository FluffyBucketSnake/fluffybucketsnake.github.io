import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <header className="flex flex-col justify-center align-center px-16 py-32 bg-hero-main border-b-1 border-primary-400 text-primary-contrast text-center overflow-hidden">
      <h1 className="text-6xl text-center relative">
        Hi, I'm
        <strong className="font-display text-secondary-400 text-center before:content-['\A'] before:whitespace-pre">
          Bruno Henrique Glowaski Morais
        </strong>
      </h1>
      <h2 className="text-xl font-bold mb-8">
        AKA <strong className="text-secondary-400">FluffyBucketSnake</strong>
      </h2>
      <p className="text-lg">
        I'm full-stack web developer and a game designer. I'm also passionate
        about gaming, science, technology and art.
      </p>
    </header>
  );
};

export default Hero;
