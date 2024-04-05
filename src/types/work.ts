import { AlbumType } from './album';
import { InstrumentType } from './instrument';
import { UserType } from './user';

export type WorkType = {
  readme: string;
  bands: InstrumentType[];
  album: AlbumType;
};

export type WorkHistoryType = {
  uid: string;
  user: UserType;
  content: string;
  createdAt: Date;
};
