import { Stage } from '../core';
import { EditorDataType, EditorStyleType } from '../types/editor';
import { Sidebar } from './';
import { Workground } from './Workground';

export class Editor extends Stage {
  override name = 'BEditor';

  data: EditorDataType[] = [];

  style: EditorStyleType = {
    theme: {
      background: 'white',
      lineColor: '#e3e3e3',
      strokeLineColor: '#999999',
    },
    timeline: {
      gapHeight: 10,
      gapWidth: 10,
      timeDivde: 10,
    },
    sidebar: {
      width: 300,
    },
    wave: {
      height: 45,
      borderRadius: 8,
    },
  };

  constructor(element: HTMLCanvasElement, data: EditorDataType[]) {
    super(element);
    this.data = data;

    this._initLayout();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).editor = this;
  }

  private _initLayout = () => {
    const workgounrd = new Workground(this.canvas, this.style, this.data);
    this.add(workgounrd);

    const sidebar = new Sidebar(this.style, this.data);
    this.add(sidebar);
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override update(dT: number) {}

  /* eslint-disable @typescript-eslint/no-unused-vars */
  override draw(ctx: CanvasRenderingContext2D) {}
}
