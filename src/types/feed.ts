import { AlbumType } from './album';

export type FeedType = {
  id: string;
  date: string;
  act: string;
  userId: string;
  album: AlbumType;
};
