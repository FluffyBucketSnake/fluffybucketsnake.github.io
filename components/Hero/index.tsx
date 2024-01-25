import { wavesEffect } from "lib/effects/wavesEffect";
import React, { FC, useEffect, useRef } from "react";

const Hero: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(wavesEffect(canvasRef), [canvasRef.current]);

  return (
    <header className="relative flex flex-col justify-center align-center px-16 py-32 bg-hero-main bg-cover bg-center border-b-1 border-primary-400 text-primary-contrast text-center overflow-hidden">
      <canvas className="absolute inset-0 w-full h-full -z-1" ref={canvasRef} />
      <h1 className="text-6xl text-center relative">
        Hi, I'm
        <strong className="font-display text-secondary-500 text-center before:content-['\A'] before:whitespace-pre">
          Bruno Henrique Glowaski Morais
        </strong>
      </h1>
      <h2 className="text-xl font-bold mb-8">
        AKA <strong className="text-secondary-500">FluffyBucketSnake</strong>
      </h2>
      <p className="text-lg">
        I'm full-stack web developer and a game designer. I'm also passionate
        about gaming, science, technology and art.
      </p>
    </header>
  );
};

export default Hero;
