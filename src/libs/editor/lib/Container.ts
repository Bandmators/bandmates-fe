import { Node } from './Node';

export class Container<ChildType extends Node = Node> extends Node {
  override name = 'container';
  children: ChildType[] = [];

  add(child: ChildType): void {
    this.children.push(child);
  }

  override update(currentTime: number) {
    // console.log(this.children);
    this.children.forEach(child => {
      child.update(currentTime);
      // child.draw(this);
    });
  }

  override draw(_ctx: CanvasRenderingContext2D) {
    console.log(this.name);
    this.children.forEach(child => child.draw(_ctx));
  }
}
