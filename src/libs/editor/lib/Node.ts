/* eslint-disable @typescript-eslint/no-unused-vars */
import { Statable } from './State';

export abstract class Node extends Statable {
  name = 'node';
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  eventEnabled = true;

  // protected _update(_ctx: CanvasRenderingContext2D) {
  //   this.draw(_ctx);
  //   this.update();
  // }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(_currentTime: number) {
    // console.log(_currentTime);
  }

  draw(_ctx: CanvasRenderingContext2D) {}

  isIntersection(x: number, y: number) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }

  dispatchEvent(event: string, ...args: unknown[]) {
    this.call(event, ...args);
  }
}
