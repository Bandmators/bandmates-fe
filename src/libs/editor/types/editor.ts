import { InstrumentType } from '@/types/instrument';

export type BandData = {
  start: number;
  long: number;
  src: string;
  group: number;
  user: string;
  instrument: InstrumentType;
};
export type EditorStyleType = {
  gapHeight: number;
  gapWidth: number;
};
