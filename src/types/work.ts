import { AlbumType } from './album';
import { InstrumentType } from './instrument';

export type WorkType = {
  readme: string;
  bands: InstrumentType[];
  album: AlbumType;
};
