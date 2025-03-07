import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  password?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
