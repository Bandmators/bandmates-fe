import { Node } from './Node';

export class Container<ChildType extends Node = Node> extends Node {
  override name = 'container';
  children: ChildType[] = [];

  add(child: ChildType): void {
    this.children.push(child);
  }

  _update(_currentTime: number, _ctx: CanvasRenderingContext2D) {
    this.update(_currentTime);
    this.draw(_ctx);
    this.children.forEach(child => {
      child._update(_currentTime, _ctx);
    });
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override update(_currentTime: number) {}

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override draw(_ctx: CanvasRenderingContext2D) {}
}
