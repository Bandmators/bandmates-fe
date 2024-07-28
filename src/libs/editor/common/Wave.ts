import { Node } from '../lib';
import { EditorStyleType, SongDataType } from '../types/editor';

export class Wave extends Node {
  override name = 'Wave';
  constructor(
    private data: SongDataType,
    private style: EditorStyleType,
    private _scrollX: number,
    private waveHeight = 45,
  ) {
    super();
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override update(_currentTime: number) {}

  override draw(_ctx: CanvasRenderingContext2D) {
    _ctx.save();
    _ctx.translate(-this._scrollX, 0);

    _ctx.roundRect(
      1 * this.style.gapWidth * this.data.start,
      50 + (this.waveHeight + 20) * this.data.group,
      1 * this.style.gapWidth * this.data.long,
      this.waveHeight,
      [8],
    );
    _ctx.fillStyle = '#c3c3c3';
    _ctx.fill();
    _ctx.restore();
  }
}
