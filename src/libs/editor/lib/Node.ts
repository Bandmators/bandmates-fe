import { Statable } from './State';

export abstract class Node extends Statable {
  name = 'node';
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  eventEnabled = true;

  _update(_currentTime: number, _ctx: CanvasRenderingContext2D) {
    this.update(_currentTime);
    this.draw(_ctx);
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  update(_currentTime: number) {
    console.log(_currentTime);
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  draw(_ctx: CanvasRenderingContext2D) {}

  isIntersection(x: number, y: number) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }

  dispatchEvent(event: string, ...args: unknown[]) {
    this.call(event, ...args);
  }
}
