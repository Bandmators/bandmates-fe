import { Group, Stage } from '../core';
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
    this.data.forEach(d => {
      this.addTrackGroup(d.tracks);
    });

    this.timeline = new Timeline(this.style, 100, 0);

    const group = new Group();
    group.add(this.timeline);
    this.add(group);
  };

  private _initEvent = () => {
    let isDragging = false;
    let startX = 0;
    let moveX = 0;

    this.on('mousedown', (evt: EventData) => {
      isDragging = true;
      startX = evt.originalEvent.clientX;
      moveX = evt.originalEvent.clientX;
    });

    this.on('mousemove', (evt: EventData) => {
      if (isDragging) {
        const deltaX = evt.originalEvent.clientX - moveX;
        this.scrollX = Math.max(this.scrollX + deltaX, 0);
        moveX = evt.originalEvent.clientX;
      }
    });

    this.on('mouseup', (evt: EventData) => {
      isDragging = false;

      const endX = evt.originalEvent.clientX;

      if (startX === endX && this.timeline) {
        const rect = this.canvas.getBoundingClientRect();
        const clickX = evt.originalEvent.clientX - rect.left + this.scrollX;
        this.timeline.setRedLinePos(clickX);
      }
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
  override update(dT: number) {}

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override draw(ctx: CanvasRenderingContext2D) {
    this.ctx.translate(-this.scrollX, 0);
  }
}
