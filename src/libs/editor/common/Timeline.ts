import { Node } from '../lib';
import { EditorStyleType } from '../types/editor';

export class Timeline extends Node {
  override name = 'Timeline';

  private _dT: number = 0;
  private _timeRedLinePosX: number = 0;

  constructor(
    private style: EditorStyleType,
    private _timeEnd: number,
    private _scrollX: number,
    private posY: number = 30,
  ) {
    super();
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override update(_currentTime: number) {
    this._dT = _currentTime;
  }

  override draw(ctx: CanvasRenderingContext2D) {
    this.drawTime(ctx);
    this.drawRedLine(ctx);
  }

  drawTime(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.lineWidth = 1;

    const divide = this.style.timeDivde;
    for (let i = 0; i < this._timeEnd; i++) {
      const begin = this.style.gapWidth * divide * i;

      ctx.strokeStyle = '#999999';
      ctx.beginPath();
      ctx.moveTo(begin, this.posY);
      ctx.lineTo(begin, this.posY + this.style.gapHeight);
      ctx.stroke();

      ctx.strokeStyle = '#e3e3e3';
      ctx.textAlign = 'center';
      ctx.fillText(`${i}s`, begin, this.posY - 3);

      for (let j = 1; j < divide; j++) {
        ctx.beginPath();
        ctx.moveTo(begin + j * this.style.gapWidth, this.posY);
        ctx.lineTo(begin + j * this.style.gapWidth, this.posY + this.style.gapHeight / 2);
        ctx.stroke();
      }
    }

    ctx.strokeStyle = '#e3e3e3';
    ctx.beginPath();
    ctx.moveTo(0, this.posY);
    ctx.lineTo(this.style.gapWidth * divide * this._timeEnd, this.posY);
    ctx.stroke();

    ctx.restore();
  }

  drawRedLine(ctx: CanvasRenderingContext2D) {
    this._timeRedLinePosX += this.style.gapWidth * 10 * this._dT;
    // if (this._timeRedLinePosX > ctx.canvas.width) this._timeRedLinePosX = 0;
    console.log(this._timeRedLinePosX);

    ctx.save();

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(this._timeRedLinePosX - 6, 0);
    ctx.lineTo(this._timeRedLinePosX - 6, this.posY / 2);
    ctx.lineTo(this._timeRedLinePosX, this.posY / 2 + 10);
    ctx.lineTo(this._timeRedLinePosX + 6, this.posY / 2);
    ctx.lineTo(this._timeRedLinePosX + 6, 0);
    ctx.fill();

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(this._timeRedLinePosX, 0);
    ctx.lineTo(this._timeRedLinePosX, ctx.canvas.height);
    ctx.stroke();

    ctx.restore();
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
