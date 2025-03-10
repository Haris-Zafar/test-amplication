import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  PasswordInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="role"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Name" source="username" />
      </SimpleForm>
    </Create>
  );
};
