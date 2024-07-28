import { SongDataType } from '..';
import { Group } from '../lib';

export class Track extends Group {
  constructor(private data: SongDataType[]) {
    super();
    // this.data.forEach(child => this.add(new Wave(child)));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override draw(_ctx: CanvasRenderingContext2D) {}
}
