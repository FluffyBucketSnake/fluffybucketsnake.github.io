import FRAG_SRC from "@/shaders/waves.frag";
import { WebGL2Renderer } from "lib/renderers/webgl2";
import { SimpleLoop } from "lib/utils/interactive";
import { RefObject } from "react";

export function wavesEffect(
  canvas: RefObject<HTMLCanvasElement>,
  setError: (error: unknown) => void,
) {
  return () => {
    if (canvas.current == null) {
      return;
    }
    try {
      const renderer = new WebGL2Renderer(canvas.current!, FRAG_SRC);
      const loop = new SimpleLoop((time) => renderer.renderFrame(time));
      return () => {
        loop.stop();
        renderer.dispose();
      };
    } catch (err) {
      setError(err);
    }
  };
}
