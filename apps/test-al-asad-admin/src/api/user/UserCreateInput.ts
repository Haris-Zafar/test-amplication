import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  password?: string | null;
  roles?: InputJsonValue;
  username: string;
};
