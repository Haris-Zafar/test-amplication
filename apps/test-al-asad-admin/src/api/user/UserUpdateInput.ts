import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  password?: string | null;
  role?: InputJsonValue;
  username?: string;
};
