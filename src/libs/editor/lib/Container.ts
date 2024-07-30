import { Node } from './Node';

export abstract class Container<ChildType extends Node = Node> extends Node {
  override name = 'container';
  children: ChildType[] = [];

  add(child: ChildType): void {
    this.children.push(child);
  }

  override _tick(currentTime: number, ctx: CanvasRenderingContext2D) {
    super._tick(currentTime, ctx);
    this.children.forEach(child => child._tick(currentTime, ctx));
  }
}
