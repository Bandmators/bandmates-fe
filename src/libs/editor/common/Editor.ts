import { Stage } from '../lib';
import { EditorDataType, EditorStyleType, SongDataType, TrackDataType } from '../types/editor';
import { Timeline } from './Timeline';
import { Track } from './Track';
import { TrackGroup } from './TrackGroup';
import { Wave } from './Wave';

// const data: BandData[] = [
//   {
//     start: 1.3,
//     long: 14,
//     src: '',
//     group: 0,
//     user: '',
//     instrument: 'Alto',
//   },
//   {
//     start: 30.3,
//     long: 12,
//     src: '',
//     group: 3,
//     user: '',
//     instrument: 'Guitar',
//   },
//   {
//     start: 6.3,
//     long: 12,
//     src: '',
//     group: 1,
//     user: '',
//     instrument: 'Piano',
//   },
// ];

export class Editor extends Stage {
  private _isDragging = false;
  private _lastX = 0;

  private timeline: Timeline | undefined;

  override name = 'BEditor';

  data: EditorDataType[] = [];

  style: EditorStyleType = {
    gapHeight: 10,
    gapWidth: 20,
  };

  constructor(element: HTMLCanvasElement, data: EditorDataType[]) {
    super(element);
    this.data = data;

    this._initLayout();
  }

  private _initLayout = () => {
    this.timeline = new Timeline(this.ctx, this.style, 100, 0);

    this.data.forEach(d => {
      console.log(d);
      this.addTrackGroup(d.tracks);
      // this.addWave(d);
      // this.waves.push(new Wave(this.ctx, d, this.style, 100));
    });
  };

  addTrackGroup(data: TrackDataType[]) {
    const group = new TrackGroup(data);
    this.children.push(group);
    data.forEach(d => this.addTrack(group, d.songs));
    return group;
  }

  addTrack(parent: TrackGroup, data: SongDataType[]) {
    const track = new Track(data);
    parent.children.push(track);
    data.forEach(d => this.addWave(track, d));
    return track;
  }

  addWave(parent: Track, data: SongDataType) {
    const wave = new Wave(data, this.style, 100);
    parent.children.push(wave);
    return wave;
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override update(currentTime: number) {
    // Wave surfer
    // this.children.forEach(child => child.up);
    // this.children.forEach(child => child.draw(this.ctx));

    // Timeline
    this.timeline?.draw(this.dT);
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override draw(ctx: CanvasRenderingContext2D) {}

  // private _onClick = (event: MouseEvent) => {
  //   for (let i = this.children.length - 1; i >= 0; i--) {
  //     if (this.children[i].eventEnabled && this.children[i].isIntersection(event.x, event.y)) {
  //       this.children[i].dispatchEvent('onClick', event);
  //     }
  //   }
  // };

  // private _onMouseDown = (event: MouseEvent) => {
  //   this._isDragging = true;
  //   this._lastX = event.clientX;

  //   const rect = this.canvas.getBoundingClientRect();
  //   this.timeline?.setRedLinePos(event.clientX - rect.left + this.timeline.scrollX);
  // };

  // private _onMouseMove = (event: MouseEvent) => {
  //   if (this._isDragging) {
  //     const deltaX = event.clientX - this._lastX;
  //     if (this.timeline) {
  //       this.timeline.scrollX -= deltaX;
  //       if (this.timeline.scrollX < 0) this.timeline.scrollX = 0;
  //     }
  //     this._lastX = event.clientX;
  //   }
  // };

  // private _onMouseUp = () => {
  //   this._isDragging = false;
  // };
}
