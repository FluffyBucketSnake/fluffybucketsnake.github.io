import FRAG_SRC from "@/shaders/waves.frag";
import { WebGL2Renderer } from "lib/renderers/webgl2";
import { SimpleLoop } from "lib/utils/interactive";
import { IRenderEffect } from "./base";

export function wavesEffect(canvas: HTMLCanvasElement): IRenderEffect {
  let renderer = new WebGL2Renderer(canvas, FRAG_SRC);
  const loop = new SimpleLoop((time) => renderer.renderFrame(time));

  const updateCanvas = (canvas: HTMLCanvasElement) => {
    renderer = new WebGL2Renderer(canvas, FRAG_SRC);
  };
  const refreshResolution = () => {
    renderer.refreshResolution();
  };
  const dispose = () => {
    loop.stop();
    renderer.dispose();
  };

  return { updateCanvas, refreshResolution, dispose };
}
