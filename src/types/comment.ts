import { UserType } from './user';

export type CommentType = {
  user: UserType;
  comment: string;
  createdAt: Date;
};
