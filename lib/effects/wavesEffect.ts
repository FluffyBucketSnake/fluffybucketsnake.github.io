import FRAG_SRC from "@/shaders/waves.frag";
import { WebGL2Renderer } from "lib/renderers/webgl2";
import { SimpleLoop } from "lib/utils/interactive";
import { RefObject } from "react";

export function wavesEffect(canvas: RefObject<HTMLCanvasElement>) {
  return () => {
    const renderer = new WebGL2Renderer(canvas.current!, FRAG_SRC);
    const loop = new SimpleLoop((time) => renderer.renderFrame(time));
    return () => {
      loop.stop();
      renderer.dispose();
    };
  };
}
