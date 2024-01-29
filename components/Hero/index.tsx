import IconError from "@fluentui/svg-icons/icons/error_circle_24_regular.svg";
import Dialog from "components/atoms/Dialog";
import IconButton from "components/IconButton";
import { wavesEffect } from "lib/effects/wavesEffect";
import React, { FC, useEffect, useRef, useState } from "react";

const Hero: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<unknown>();
  const [errorDialogOpen, setErrorDialogOpen] = useState<boolean>(false);

  useEffect(wavesEffect(canvasRef, setError), [canvasRef.current]);
  useEffect(() => {
    if (error == null) return;
    console.error(error);
  }, [error]);

  const openErrorDialog = () => setErrorDialogOpen(true);
  const closeErrorDialog = () => setErrorDialogOpen(false);

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
      {error && (
        <>
          <IconButton
            className="absolute right-4 top-4 z-10"
            variant="filled"
            color="errorDetails"
            onClick={openErrorDialog}
          >
            <IconError width={24} height={24} />
          </IconButton>
          <Dialog open={errorDialogOpen} onClose={closeErrorDialog}>
            <p className="text-2xl">
              An error has occurred while rendering the banner. Details:
            </p>
            <pre className="flex-1 border-1 border-divider rounded-lg p-4 bg-bg-default text-error overflow-auto">{`${error}`}</pre>
          </Dialog>
        </>
      )}
    </header>
  );
};

export default Hero;
