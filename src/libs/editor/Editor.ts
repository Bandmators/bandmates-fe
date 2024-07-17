import { Timeline } from './Timeline';
import { Wave } from './Wave';
import { BandData, EditorStyleType } from './types/editor';

const data: BandData[] = [
  {
    start: 1.3,
    long: 14,
    src: '',
    group: 0,
    user: '',
    instrument: 'Alto',
  },
  {
    start: 30.3,
    long: 12,
    src: '',
    group: 3,
    user: '',
    instrument: 'Guitar',
  },
  {
    start: 6.3,
    long: 12,
    src: '',
    group: 1,
    user: '',
    instrument: 'Piano',
  },
];

export class Editor {
  private _canvas: HTMLCanvasElement | null = null;
  private _ctx: CanvasRenderingContext2D | null = null;

  protected dT = 0;
  protected prevTime = performance.now();

  private _isDragging = false;
  private _lastX = 0;

  private timeline: Timeline | undefined;

  private waves: Wave[] = [];

  private _raf: number | null = null;

  style: EditorStyleType = {
    gapHeight: 10,
    gapWidth: 20,
  };

  constructor(element: HTMLCanvasElement) {
    this.canvas = element;
    this.prevTime = performance.now();

    this._initListener();
    this._onResize();
    this._initLayout();
  }

  private _initListener = () => {
    this.canvas.addEventListener('mousedown', this._onMouseDown);
    this.canvas.addEventListener('mousemove', this._onMouseMove);
    this.canvas.addEventListener('mouseup', this._onMouseUp);
    this.canvas.addEventListener('mouseleave', this._onMouseUp);
    window.addEventListener('resize', this._onResize);
    this._raf = requestAnimationFrame(this._update);
  };

  private _initLayout = () => {
    this.timeline = new Timeline(this.ctx, this.style, 100, 0);

    data.forEach(d => {
      this.waves.push(new Wave(this.ctx, d, this.style, 100));
    });
  };

  destroy = () => {
    this.canvas.removeEventListener('mousedown', this._onMouseDown);
    this.canvas.removeEventListener('mousemove', this._onMouseMove);
    this.canvas.removeEventListener('mouseup', this._onMouseUp);
    this.canvas.removeEventListener('mouseleave', this._onMouseUp);
    window.removeEventListener('resize', this._onResize);
    if (this._raf) cancelAnimationFrame(this._raf);
  };

  private _update = (currentTime: number) => {
    this.dT = (currentTime - this.prevTime) / 1000;
    this.prevTime = currentTime;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Wave surfer
    this.waves.forEach(wave => wave.draw());

    // Timeline
    this.timeline?.drawTime();
    this.timeline?.drawRedLine(this.dT);

    this._raf = requestAnimationFrame(this._update.bind(this));
  };

  protected get canvas() {
    return this._canvas!;
  }
  protected set canvas(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
  }
  protected get ctx() {
    return this._ctx!;
  }

  private _onMouseDown = (event: MouseEvent) => {
    this._isDragging = true;
    this._lastX = event.clientX;

    const rect = this.canvas.getBoundingClientRect();
    this.timeline?.setRedLinePos(event.clientX - rect.left + this.timeline.scrollX);
  };

  private _onMouseMove = (event: MouseEvent) => {
    if (this._isDragging) {
      const deltaX = event.clientX - this._lastX;
      if (this.timeline) {
        this.timeline.scrollX -= deltaX;
        if (this.timeline.scrollX < 0) this.timeline.scrollX = 0;
      }
      this._lastX = event.clientX;
    }
  };

  private _onMouseUp = () => {
    this._isDragging = false;
  };

  private _onResize = () => {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
  };
}
