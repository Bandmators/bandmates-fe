export class Timeline {
  private _ctx: CanvasRenderingContext2D;
  private _scrollX: number;
  private _timeEnd: number;
  private _timeRedLinePosX: number = 0;
  private _timeLine = {
    startY: 30,
    gapHeight: 10,
    gapWidth: 20,
  };

  constructor(ctx: CanvasRenderingContext2D, timeEnd: number, scrollX: number) {
    this._ctx = ctx;
    this._timeEnd = timeEnd;
    this._scrollX = scrollX;
  }

  drawTime() {
    this._ctx.save();
    this._ctx.translate(-this._scrollX, 0);

    this._ctx.lineWidth = 1;

    const divide = 5; // or 10
    for (let i = 0; i < this._timeEnd; i++) {
      const begin = this._timeLine.gapWidth * divide * i;

      this._ctx.strokeStyle = '#999999';
      this._ctx.beginPath();
      this._ctx.moveTo(begin, this._timeLine.startY);
      this._ctx.lineTo(begin, this._timeLine.startY + this._timeLine.gapHeight);
      this._ctx.stroke();

      this._ctx.strokeStyle = '#e3e3e3';
      this._ctx.textAlign = 'center';
      this._ctx.fillText(`${i}s`, begin, this._timeLine.startY - 3);

      for (let j = 1; j < divide; j++) {
        this._ctx.beginPath();
        this._ctx.moveTo(begin + j * this._timeLine.gapWidth, this._timeLine.startY);
        this._ctx.lineTo(begin + j * this._timeLine.gapWidth, this._timeLine.startY + this._timeLine.gapHeight / 2);
        this._ctx.stroke();
      }
    }

    this._ctx.strokeStyle = '#e3e3e3';
    this._ctx.beginPath();
    this._ctx.moveTo(0, this._timeLine.startY);
    this._ctx.lineTo(this._timeLine.gapWidth * divide * this._timeEnd, this._timeLine.startY);
    this._ctx.stroke();

    this._ctx.restore();
  }

  drawRedLine(dT: number) {
    this._timeRedLinePosX += this._timeLine.gapWidth * 10 * dT;
    // if (this._timeRedLinePosX > this._ctx.canvas.width) this._timeRedLinePosX = 0;

    this._ctx.save();
    this._ctx.translate(-this._scrollX, 0);

    this._ctx.fillStyle = 'red';
    this._ctx.beginPath();
    this._ctx.moveTo(this._timeRedLinePosX - 6, 0);
    this._ctx.lineTo(this._timeRedLinePosX - 6, this._timeLine.startY / 2);
    this._ctx.lineTo(this._timeRedLinePosX, this._timeLine.startY / 2 + 10);
    this._ctx.lineTo(this._timeRedLinePosX + 6, this._timeLine.startY / 2);
    this._ctx.lineTo(this._timeRedLinePosX + 6, 0);
    this._ctx.fill();

    this._ctx.strokeStyle = 'red';
    this._ctx.beginPath();
    this._ctx.moveTo(this._timeRedLinePosX, 0);
    this._ctx.lineTo(this._timeRedLinePosX, this._ctx.canvas.height);
    this._ctx.stroke();

    this._ctx.restore();
  }

  setRedLinePos(x: number) {
    this._timeRedLinePosX = x;
  }

  set scrollX(value: number) {
    this._scrollX = value;
  }

  get scrollX() {
    return this._scrollX;
  }
}
