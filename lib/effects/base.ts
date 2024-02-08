export type RenderEffectFactory = (canvas: HTMLCanvasElement) => IRenderEffect;

export interface IRenderEffect {
  updateCanvas(canvas: HTMLCanvasElement): void;
  refreshResolution(): void;
  dispose(): void;
}
