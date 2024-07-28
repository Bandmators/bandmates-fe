// import { Track } from './Track';
import { Group } from '../lib';
import { TrackDataType } from '../types';

export class TrackGroup extends Group {
  constructor(private data: TrackDataType[] = []) {
    super();
    console.log(data);
    // data.forEach(child => this.add(new Track(child)));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override draw(_ctx: CanvasRenderingContext2D) {}
}
