import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  password?: string | null;
  role?: InputJsonValue;
  username: string;
};
