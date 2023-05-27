import React from "react";
import { FormColumn, FormContainer, HeaderMenu, StyledSettingsMenu } from "./styles";
import { Input } from "components/Input/Input";

export const SettingsMenu = () => {
  return (
    <StyledSettingsMenu>
      <HeaderMenu>Profile</HeaderMenu>
      <FormContainer>
        <FormColumn>
          Name
          <Input />
        </FormColumn>
        <FormColumn>
          Email
          <Input />
        </FormColumn>
      </FormContainer>
      <HeaderMenu>Password</HeaderMenu>
      <FormContainer>
        <FormColumn>
          Password
          <Input />
        </FormColumn>
        <FormColumn>
          New password
          <Input />
          Confirm password
          <Input />
        </FormColumn>
      </FormContainer>
      <HeaderMenu>Color mode</HeaderMenu>
      <FormContainer>Dark theme</FormContainer>
    </StyledSettingsMenu>
  );
};
