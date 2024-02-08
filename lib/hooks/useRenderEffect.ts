import { RenderEffectFactory } from "lib/effects/base";
import { RefObject, useEffect, useState } from "react";

export function useRenderEffect(
  effect: RenderEffectFactory,
  target: RefObject<HTMLCanvasElement | null>,
) {
  const [error, setError] = useState<unknown>();
  useEffect(() => {
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
  }, [effect]);
  return { error };
}
