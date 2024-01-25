import { SimpleVertex2D } from "lib/types/geometry";

export function createQuadStrip2D(): SimpleVertex2D[] {
  return [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
}
