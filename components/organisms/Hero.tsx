import RenderEffectCanvas from "components/atoms/RenderEffectCanvas";
import { wavesEffect } from "lib/effects/wavesEffect";
import React, { FC } from "react";

import DefaultBackground from "public/media/bg.png";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <header className="relative flex flex-col justify-center align-center px-16 py-32 border-b-1 border-primary-400 text-primary-contrast text-center overflow-hidden">
      <RenderEffectCanvas
        absolute
        className="inset-0 w-full h-full"
        effect={wavesEffect}
        fallback={() => <Image src={DefaultBackground} alt="Hero background" />}
      />
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
    </header>
  );
};

export default Hero;
