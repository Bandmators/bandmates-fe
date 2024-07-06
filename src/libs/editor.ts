export class Editor {
  private _canvas: HTMLCanvasElement | null = null;
  private _ctx: CanvasRenderingContext2D | null = null;

  protected dT = 0;
  protected prevTime = performance.now();

  protected _timeEnd = 100;
  protected _timeLine = {
    startY: 30,
    gapHeight: 10,
    gapWidth: 10,
  };
  private _timeRedLinePosX = 0;

  constructor(element: HTMLCanvasElement) {
    this.canvas = element;
    this.prevTime = performance.now();

    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    requestAnimationFrame(this.update.bind(this));
  }

  update(currentTime: number) {
    requestAnimationFrame(this.update.bind(this));

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.dT = (currentTime - this.prevTime) / 1000;
    this.prevTime = currentTime;

    this.drawTimeLine();
    this.drawRedLine();
  }

  drawTimeLine() {
    this.ctx.save();
    this.ctx.beginPath();

    const divide = 10; // or 5
    for (let i = 0; i < this._timeEnd; i++) {
      const begin = this._timeLine.gapWidth * divide * i;
      this.ctx.moveTo(begin, this._timeLine.startY);
      this.ctx.lineTo(begin, this._timeLine.startY + this._timeLine.gapHeight);

      this.ctx.textAlign = 'center';
      this.ctx.fillText(`${i}s`, begin, this._timeLine.startY - 3);

      for (let j = 1; j < divide; j++) {
        this.ctx.moveTo(begin + j * this._timeLine.gapWidth, this._timeLine.startY);
        this.ctx.lineTo(begin + j * this._timeLine.gapWidth, this._timeLine.startY + this._timeLine.gapHeight / 2);
      }
    }
    this.ctx.stroke();

    this.ctx.closePath();
    this.ctx.restore();
  }

  drawRedLine() {
    this._timeRedLinePosX += this._timeLine.gapWidth * 10 * this.dT;
    if (this._timeRedLinePosX > this.canvas.width) this._timeRedLinePosX = 0;

    this.ctx.save();
    this.ctx.beginPath();

    this.ctx.moveTo(this._timeRedLinePosX, 0);
    this.ctx.lineTo(this._timeRedLinePosX, this.canvas.height);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();

    this.ctx.closePath();
    this.ctx.restore();
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
