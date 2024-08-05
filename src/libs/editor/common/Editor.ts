import { Group, Stage } from '../lib';
import { EventData } from '../types';
import { EditorDataType, EditorStyleType, SongDataType, TrackDataType } from '../types/editor';
import { Timeline } from './Timeline';
import { Track } from './Track';
import { TrackGroup } from './TrackGroup';
import { Wave } from './Wave';

export class Editor extends Stage {
  private scrollX = 0;

  private timeline: Timeline | undefined;

  override name = 'BEditor';

  data: EditorDataType[] = [];

  style: EditorStyleType = {
    gapHeight: 10,
    gapWidth: 10,
    timeDivde: 10,
  };

  constructor(element: HTMLCanvasElement, data: EditorDataType[]) {
    super(element);
    this.data = data;

    this._initLayout();
    this._initEvent();
  }

  private _initLayout = () => {
    this.timeline = new Timeline(this.style, 100, 0);

    const group = new Group();
    group.add(this.timeline);
    this.add(group);

    this.data.forEach(d => {
      this.addTrackGroup(d.tracks);
    });
  };

  private _initEvent = () => {
    let isDragging = false;
    let startX = 0;

    this.on('mousedown', (evt: EventData) => {
      isDragging = true;
      startX = evt.originalEvent.clientX;

      // Timeline의 위치를 클릭한 곳으로 변경
      if (this.timeline) {
        const rect = this.canvas.getBoundingClientRect();
        const clickX = evt.originalEvent.clientX - rect.left + this.scrollX;
        this.timeline.setRedLinePos(clickX);
      }
    });

    this.on('mousemove', (evt: EventData) => {
      if (isDragging) {
        const deltaX = evt.originalEvent.clientX - startX;
        this.scrollX += deltaX;
        startX = evt.originalEvent.clientX;
        // 여기서 render를 호출하지 않습니다. update 메서드에서 처리됩니다.
      }
    });

    this.on('mouseup', () => {
      isDragging = false;
    });

    this.on('mouseleave', () => {
      isDragging = false;
    });
  };

  addTrackGroup(data: TrackDataType[]) {
    const group = new TrackGroup(data);
    this.add(group);
    data.forEach(d => this.addTrack(group, d.songs));
    return group;
  }

  addTrack(parent: TrackGroup, data: SongDataType[]) {
    const track = new Track(data);
    parent.add(track);
    data.forEach(d => this.addWave(track, d));
    return track;
  }

  addWave(parent: Track, data: SongDataType) {
    const wave = new Wave(data, this.style);
    parent.add(wave);
    return wave;
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override update(currentTime: number) {}

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override draw(ctx: CanvasRenderingContext2D) {
    this.ctx.translate(-this.scrollX, 0);
  }
}
