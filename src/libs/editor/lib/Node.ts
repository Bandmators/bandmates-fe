import { Statable } from './State';

export abstract class Node extends Statable {
  name = 'node';
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  eventEnabled = true;

  abstract update(currentTime: number): void;
  abstract draw(ctx: CanvasRenderingContext2D): void;

  _tick(currentTime: number, ctx: CanvasRenderingContext2D) {
    // console.log('tick');
    this.update(currentTime);
    this.draw(ctx);
  }

  isIntersection(x: number, y: number) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }

  dispatchEvent(event: string, ...args: unknown[]) {
    this.call(event, ...args);
  }
}
