import { User } from "./user";

export interface Theme {
  subscribers: [];
  posts: [];
  _id: string;
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
