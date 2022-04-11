import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <header className="flex flex-col justify-center align-center p-32 bg-blue-600 border-b-1 border-blue-400 text-white text-center">
      <h1 className="text-6xl mb-4 break-all">
        Hi, I'm
        <strong className="text-green-300 before:content-['\A'] before:whitespace-pre">
          Bruno Henrique Glowaski Morais
        </strong>
      </h1>
      <h2 className="text-xl font-bold mb-8">
        AKA <strong className="text-green-300">FluffyBucketSnake</strong>
      </h2>
      <p className="text-lg">
        I'm full-stack web developer and a game designer. I'm also passionate
        about gaming, science, technology and art.
      </p>
    </header>
  );
};

export default Hero;
