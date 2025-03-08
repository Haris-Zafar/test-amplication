import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  id: string;
  role: JsonValue;
  updatedAt: Date;
  username: string;
};
