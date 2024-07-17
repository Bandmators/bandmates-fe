import { BandData, EditorStyleType } from './types/editor';

export class Wave {
  constructor(
    private _ctx: CanvasRenderingContext2D,
    private data: BandData,
    private style: EditorStyleType,
    private _scrollX: number,
    private waveHeight = 45,
  ) {}

  draw() {
    this._ctx.save();
    this._ctx.translate(-this._scrollX, 0);

    this._ctx.roundRect(
      1 * this.style.gapWidth * this.data.start,
      50 + (this.waveHeight + 20) * this.data.group,
      1 * this.style.gapWidth * this.data.long,
      this.waveHeight,
      [8],
    );
    this._ctx.fillStyle = '#c3c3c3';
    this._ctx.fill();
    this._ctx.restore();
  }
}
