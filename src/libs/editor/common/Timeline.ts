import { EditorStyleType } from '../types/editor';

export class Timeline {
  private _ctx: CanvasRenderingContext2D;

  private _timeRedLinePosX: number = 0;

  constructor(
    ctx: CanvasRenderingContext2D,
    private style: EditorStyleType,
    private _timeEnd: number,
    private _scrollX: number,
    private posY: number = 30,
  ) {
    this._ctx = ctx;
  }

  draw(dT: number) {
    this.drawTime();
    this.drawRedLine(dT);
  }

  drawTime() {
    this._ctx.save();
    this._ctx.translate(-this._scrollX, 0);

    this._ctx.lineWidth = 1;

    const divide = this.style.timeDivde;
    for (let i = 0; i < this._timeEnd; i++) {
      const begin = this.style.gapWidth * divide * i;

      this._ctx.strokeStyle = '#999999';
      this._ctx.beginPath();
      this._ctx.moveTo(begin, this.posY);
      this._ctx.lineTo(begin, this.posY + this.style.gapHeight);
      this._ctx.stroke();

      this._ctx.strokeStyle = '#e3e3e3';
      this._ctx.textAlign = 'center';
      this._ctx.fillText(`${i}s`, begin, this.posY - 3);

      for (let j = 1; j < divide; j++) {
        this._ctx.beginPath();
        this._ctx.moveTo(begin + j * this.style.gapWidth, this.posY);
        this._ctx.lineTo(begin + j * this.style.gapWidth, this.posY + this.style.gapHeight / 2);
        this._ctx.stroke();
      }
    }

    this._ctx.strokeStyle = '#e3e3e3';
    this._ctx.beginPath();
    this._ctx.moveTo(0, this.posY);
    this._ctx.lineTo(this.style.gapWidth * divide * this._timeEnd, this.posY);
    this._ctx.stroke();

    this._ctx.restore();
  }

  drawRedLine(dT: number) {
    this._timeRedLinePosX += this.style.gapWidth * 10 * dT;
    // if (this._timeRedLinePosX > this._ctx.canvas.width) this._timeRedLinePosX = 0;

    this._ctx.save();
    this._ctx.translate(-this._scrollX, 0);

    this._ctx.fillStyle = 'red';
    this._ctx.beginPath();
    this._ctx.moveTo(this._timeRedLinePosX - 6, 0);
    this._ctx.lineTo(this._timeRedLinePosX - 6, this.posY / 2);
    this._ctx.lineTo(this._timeRedLinePosX, this.posY / 2 + 10);
    this._ctx.lineTo(this._timeRedLinePosX + 6, this.posY / 2);
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
