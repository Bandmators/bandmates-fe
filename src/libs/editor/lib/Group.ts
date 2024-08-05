/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from './Container';

export class Group extends Container {
  override name = 'Group';

  update(currentTime: number): void {}
  draw(ctx: CanvasRenderingContext2D): void {}
}
