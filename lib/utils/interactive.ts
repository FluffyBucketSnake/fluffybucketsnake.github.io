export type RunFrameFunction = (time: number) => void;

export const FPS = 60;

const FRAME_INTERVAL = 1000 / FPS;

export class SimpleLoop {
  private running: boolean = true;

  constructor(runFrameFn: RunFrameFunction) {
    let time = 0;
    let previousTime = Date.now();
    const loop = () => {
      if (!this.running) {
        return;
      }

      const currentTime = Date.now();
      const delta = currentTime - previousTime;

      if (delta >= FRAME_INTERVAL) {
        previousTime = currentTime - (delta % FRAME_INTERVAL);
        time += FRAME_INTERVAL;

        runFrameFn(time);
      }

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  public stop() {
    this.running = false;
  }
}
