import { InstrumentType } from '@/types/instrument';

export type SongDataType = {
  start: number;
  long: number;
  src: string;
  user: string;
  group: number;
  instrument: string | InstrumentType;
};
export type TrackDataType = {
  category: string;
  songs: SongDataType[];
};
export type EditorDataType = {
  name: string;
  tracks: TrackDataType[];
};
// export type BandData = {
//   start: number;
//   long: number;
//   src: string;
//   group: number;
//   user: string;
//   instrument: InstrumentType;
// };
export type EditorStyleType = {
  gapHeight: number;
  gapWidth: number;
};
