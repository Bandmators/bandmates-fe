import { Container, Group } from './';

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

  private _onClick = (event: MouseEvent) => {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].eventEnabled && this.children[i].isIntersection(event.x, event.y)) {
        this.children[i].dispatchEvent('onClick', event);
      }
    }
  };

  private _onMouseDown = (event: MouseEvent) => {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].eventEnabled && this.children[i].isIntersection(event.x, event.y)) {
        this.children[i].dispatchEvent('onMouseDown', event);
      }
    }
  };

  private _onMouseMove = (event: MouseEvent) => {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].eventEnabled && this.children[i].isIntersection(event.x, event.y)) {
        this.children[i].dispatchEvent('onMouseMove', event);
      }
    }
  };

  private _onMouseUp = (event: MouseEvent) => {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].eventEnabled && this.children[i].isIntersection(event.x, event.y)) {
        this.children[i].dispatchEvent('onMouseUp', event);
      }
    }
  };

  private _onResize = () => {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
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
