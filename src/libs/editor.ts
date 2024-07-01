export class Editor {
  private _canvas: HTMLCanvasElement | null = null;
  private _ctx: CanvasRenderingContext2D | null = null;

  private _timePosX = 0;

  protected dT = 0;
  protected prevTime = performance.now();
  protected speed = 0.1;

  constructor(element: HTMLCanvasElement) {
    this.canvas = element;
    this.prevTime = performance.now();

    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.update.bind(this);
  }

  update(currentTime: number) {
    requestAnimationFrame(this.update.bind(this));

    this.dT = currentTime - this.prevTime;
    this.prevTime = currentTime;
    this._timePosX += this.speed * this.dT;

    if (this._timePosX > this.canvas.width) this._timePosX = 0;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.beginPath();
    this.ctx.moveTo(this._timePosX, 0);
    this.ctx.lineTo(this._timePosX, this.canvas.height);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
    this.ctx.closePath();
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
}
