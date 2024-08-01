import { EventData, EventType } from '../types';
import { getRelativeMousePosition } from '../utils/position';
import { Container, Group } from './';

// export class EventManager {
//   stage;
//   canvas;
//   listeners;

//   constructor(stage: Stage) {
//     this.stage = stage;
//     this.canvas = stage.canvas;
//     this.listeners = {};

//     this.setupListeners();
//   }

//   setupListeners() {
//     const events = ['click', 'mousemove', 'mousedown', 'mouseup'];
//     events.forEach(eventType => {
//       this.canvas.addEventListener(eventType, (e) => this.handleEvent(eventType, e));
//     });
//   }

//   handleEvent(eventType: string, e: any) {
//     const point = this.getMousePosition(e);
//     const target = this.hitTest(point);
//     this.dispatchEvent(eventType, target, e);
//   }

//   getMousePosition(e) {
//     const rect = this.canvas.getBoundingClientRect();
//     return {
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     };
//   }

//   hitTest(point: any) {
//     // 여기에 히트 테스팅 로직 구현
//     // Stage부터 시작해서 Node까지 재귀적으로 검사
//     return this.stage.hitTest(point);
//   }

//   dispatchEvent(eventType, target, originalEvent) {
//     let currentTarget = target;
//     while (currentTarget) {
//       if (currentTarget.listeners && currentTarget.listeners[eventType]) {
//         const event = {
//           type: eventType,
//           target: target,
//           currentTarget: currentTarget,
//           originalEvent: originalEvent
//         };
//         currentTarget.listeners[eventType].forEach(listener => listener(event));
//       }
//       currentTarget = currentTarget.parent;
//     }
//   }

//   addListener(node, eventType, listener) {
//     if (!node.listeners) node.listeners = {};
//     if (!node.listeners[eventType]) node.listeners[eventType] = [];
//     node.listeners[eventType].push(listener);
//   }
// }

export abstract class Stage extends Container<Group> {
  override name = 'Stage';
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  private _raf: number | null = null;

  protected dT = 0;
  protected prevTime = performance.now();

  constructor(element: HTMLCanvasElement) {
    super();

    this.canvas = element;
    this.ctx = this.canvas.getContext('2d')!;
    this.prevTime = performance.now();

    this._initListener();
    this._onResize();
    this._startLoop();
  }

  private _initListener = () => {
    this.canvas.addEventListener('click', this._onClick);
    this.canvas.addEventListener('mousedown', this._onMouseDown);
    this.canvas.addEventListener('mousemove', this._onMouseMove);
    this.canvas.addEventListener('mouseup', this._onMouseUp);
    this.canvas.addEventListener('mouseleave', this._onMouseUp);
    window.addEventListener('resize', this._onResize);
  };

  private _startLoop() {
    const ticker = (currentTime: number) => {
      this._raf = requestAnimationFrame(ticker);

      this.dT = (currentTime - this.prevTime) / 1000;
      this.prevTime = currentTime;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this._tick(currentTime, this.ctx);
    };
    this._raf = requestAnimationFrame(ticker);
  }

  private _update = (currentTime: number) => {
    this._raf = requestAnimationFrame(this._update);

    this.dT = (currentTime - this.prevTime) / 1000;
    this.prevTime = currentTime;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this._tick(currentTime, this.ctx);
  };

  private dispatchEventToChildren(eventType: EventType, e: MouseEvent): void {
    const { x, y } = getRelativeMousePosition(e, this.canvas);
    const target = this.hitTest(x, y);

    if (target) {
      const eventData: EventData = { type: eventType, target: target, point: { x, y }, originalEvent: e };
      target.call(eventType, eventData, true);
    }
  }

  // private dispatchEventToChildren(event: string, mouseEvent: MouseEvent, node: Node | Container) {
  //   if (node instanceof Container) {
  //     for (let i = node.children.length - 1; i >= 0; i--) {
  //       const child = node.children[i];
  //       if (this.dispatchEventToChildren(event, mouseEvent, child)) {
  //         // return true; // 이벤트가 처리되었으면 true를 반환
  //       }
  //     }
  //   }

  //   const { x, y } = getRelativeMousePosition(mouseEvent, this.canvas);
  //   if (node.eventEnabled && node.isIntersection(x, y)) {
  //     node.dispatchEvent(event, mouseEvent);
  //     // return true; // 이벤트가 처리되었음을 나타냄
  //   }

  //   return false; // 이벤트가 처리되지 않았음
  // }

  private handleMouseEvent = (event: EventType, mouseEvent: MouseEvent) => {
    this.dispatchEventToChildren(event, mouseEvent);
  };

  private _onClick = (event: MouseEvent) => {
    this.handleMouseEvent('click', event);
  };

  private _onMouseDown = (event: MouseEvent) => {
    this.handleMouseEvent('mousedown', event);
  };

  private _onMouseMove = (event: MouseEvent) => {
    this.handleMouseEvent('mousemove', event);
  };

  private _onMouseUp = (event: MouseEvent) => {
    this.handleMouseEvent('mouseup', event);
  };

  private _onResize = () => {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;

    const dpr = window.devicePixelRatio || 2;
    const displayWidth = document.body.clientWidth;
    const displayHeight = document.body.clientHeight;

    this.canvas.width = displayWidth * dpr;
    this.canvas.height = displayHeight * dpr;

    this.canvas.style.width = `${displayWidth}px`;
    this.canvas.style.height = `${displayHeight}px`;

    this.ctx.scale(dpr, dpr);
  };

  destroy = () => {
    this.canvas.removeEventListener('click', this._onClick);
    this.canvas.removeEventListener('mousedown', this._onMouseDown);
    this.canvas.removeEventListener('mousemove', this._onMouseMove);
    this.canvas.removeEventListener('mouseup', this._onMouseUp);
    this.canvas.removeEventListener('mouseleave', this._onMouseUp);
    window.removeEventListener('resize', this._onResize);
    if (this._raf) cancelAnimationFrame(this._raf);
  };
}
