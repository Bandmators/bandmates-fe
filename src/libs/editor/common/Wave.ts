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

    this.x = 1 * this.style.gapWidth * this.data.start;
    this.y = 50 + (this.waveHeight + 20) * this.data.group;
    this.width = 1 * this.style.gapWidth * this.data.long;
    this.height = this.waveHeight;

    this.on('mousemove', (evt: unknown) => {
      console.log('WAVE MOUSE MOVE', evt);
    });
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override update(_currentTime: number) {}

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    // ctx.translate(-this._scrollX, 0);

    ctx.roundRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = '#c3c3c3';
    ctx.fill();

    ctx.restore();
  }
}
