import { wavesEffect } from "lib/effects/wavesEffect";
import React, { FC, useEffect, useRef, useState } from "react";

const Hero: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<unknown>();

  useEffect(wavesEffect(canvasRef, setError), [canvasRef.current]);
  useEffect(() => {
    if (error == null) return;
    console.error(error);
  }, [error]);

  return (
    <header className="relative flex flex-col justify-center align-center px-16 py-32 bg-hero-main bg-cover bg-center border-b-1 border-primary-400 text-primary-contrast text-center overflow-hidden">
      {error == null && (
        <canvas className="absolute inset-0 w-full h-full" ref={canvasRef} />
      )}
      <h1 className="text-6xl text-center relative z-10">
        Hi, I'm
        <strong className="font-display text-secondary-500 text-center before:content-['\A'] before:whitespace-pre">
          Bruno Henrique Glowaski Morais
        </strong>
      </h1>
      <h2 className="text-xl font-bold mb-8 z-10">
        AKA <strong className="text-secondary-500">FluffyBucketSnake</strong>
      </h2>
      <p className="text-lg z-10">
        I'm full-stack web developer and a game designer. I'm also passionate
        about gaming, science, technology and art.
      </p>
      {error != null && (
        <span className="absolute right-4 bottom-4 px-2 py-1 text-error bg-bg-default/50 rounded z-20">
          An error occurred while rendering the banner: "{`${error}`}"
        </span>
      )}
    </header>
  );
};

export default Hero;
