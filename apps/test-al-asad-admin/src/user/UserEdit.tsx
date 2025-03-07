import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  PasswordInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
