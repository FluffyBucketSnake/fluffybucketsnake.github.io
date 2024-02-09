import { RenderEffectFactory } from "lib/effects/base";
import { isAndroid } from "lib/utils/browser";
import { RefObject, useEffect, useState } from "react";

export type RenderEffectState = "idle" | "playing" | "error";

export function useRenderEffect(
  effect: RenderEffectFactory,
  target: RefObject<HTMLCanvasElement | null>,
) {
  const [state, setState] = useState<RenderEffectState>("idle");
  const [error, setError] = useState<unknown>();

  const play = () => setState("playing");

  useEffect(() => {
    if (state != "playing") {
      return;
    }

    try {
      const instance = effect(target.current!);
      const observer = new ResizeObserver(() => {
        instance.refreshResolution();
      });
      observer.observe(target.current!);
      return () => {
        observer.disconnect();
        instance.dispose();
      };
    } catch (e) {
      setError(e);
    }
  }, [state, effect]);

  useEffect(() => {
    if (error == null) {
      return;
    }
    setState("error");
  }, [error]);

  // For some reason, WebGL 2 runs like shit on Android browsers, possibly due to lack
  // of hardware acceleration. Due to this, effects aren't going to be autoplayed on
  // Android.
  useEffect(() => {
    if (isAndroid()) {
      return;
    }
    play();
  }, []);

  return { error, play, isPlaying: state == "playing" };
}
