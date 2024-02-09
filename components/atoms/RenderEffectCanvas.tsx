import IconError from "@fluentui/svg-icons/icons/error_circle_24_regular.svg";
import clsx from "clsx";
import RenderErrorDialog from "components/dialogs/RenderErrorDialog";
import IconButton from "components/IconButton";
import { RenderEffectFactory } from "lib/effects/base";
import { useRenderEffect } from "lib/hooks/useRenderEffect";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

export type Props = {
  absolute?: boolean;
  className: string;
  effect: RenderEffectFactory;
  fallback?: () => ReactNode;
};

export default (({ absolute, className, effect, fallback }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { error, isPlaying } = useRenderEffect(effect, canvasRef);

  const [errorDialogOpen, setErrorDialogOpen] = useState<boolean>(false);
  const openErrorDialog = () => setErrorDialogOpen(true);
  const closeErrorDialog = () => setErrorDialogOpen(false);

  const position = absolute ? "absolute" : "relative";

  useEffect(() => {
    if (error == null) return;
    console.error(error);
  }, [error]);

  return (
    <figure
      className={clsx(
        "flex justify-stretch items-stretch",
        position,
        className,
      )}
    >
      {isPlaying && <canvas className="w-full h-full" ref={canvasRef} />}
      {!isPlaying && fallback?.()}
      <figcaption>
        {error != null && (
          <>
            <IconButton
              className="absolute right-4 top-4 z-10"
              variant="filled"
              color="errorDetails"
              onClick={openErrorDialog}
            >
              <IconError width={24} height={24} />
            </IconButton>
            <RenderErrorDialog
              open={errorDialogOpen}
              onClose={closeErrorDialog}
              error={error}
            />
          </>
        )}
      </figcaption>
    </figure>
  );
}) as FC<Props>;
