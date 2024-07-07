import { Timeline } from './Timeline';

export class Editor {
  private _canvas: HTMLCanvasElement | null = null;
  private _ctx: CanvasRenderingContext2D | null = null;

  protected dT = 0;
  protected prevTime = performance.now();

  private _isDragging = false;
  private _lastX = 0;

  private timeline: Timeline;

  constructor(element: HTMLCanvasElement) {
    this.canvas = element;
    this.prevTime = performance.now();

    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.timeline = new Timeline(this.ctx, 100, 0); // Initialize the Timeline

    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onMouseUp);
    this.canvas.addEventListener('mouseleave', this.onMouseUp);

    requestAnimationFrame(this.update.bind(this));
  }

  update(currentTime: number) {
    this.dT = (currentTime - this.prevTime) / 1000;
    this.prevTime = currentTime;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.timeline.drawTime();
    this.timeline.drawRedLine(this.dT);

    requestAnimationFrame(this.update.bind(this));
  }

  protected get canvas() {
    return this._canvas!;
  }
  protected set canvas(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
  }
  protected get ctx() {
    return this._ctx!;
  }

  private onMouseDown(event: MouseEvent) {
    this._isDragging = true;
    this._lastX = event.clientX;

    const rect = this.canvas.getBoundingClientRect();
    this.timeline.setRedLinePos(event.clientX - rect.left + this.timeline.scrollX);
  }

  private onMouseMove(event: MouseEvent) {
    if (this._isDragging) {
      const deltaX = event.clientX - this._lastX;
      this.timeline.scrollX -= deltaX;
      if (this.timeline.scrollX < 0) this.timeline.scrollX = 0;
      this._lastX = event.clientX;
    }
  }

  private onMouseUp = () => {
    this._isDragging = false;
  };
}
