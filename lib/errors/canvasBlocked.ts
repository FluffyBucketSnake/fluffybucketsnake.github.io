export class CanvasBlockedError extends Error {
  constructor() {
    super(
      "It seems canvas/WebGL features are being blocked by your browser. Perharps lower your anti-fingerprinting settings. Or not.",
    );
    this.name = "CanvasBlockedError";
  }
}
