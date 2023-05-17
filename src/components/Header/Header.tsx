import React from "react";
import { IconContainer, StyledHeader } from "./styles";
import { Form } from "components";
import { PixemaDark } from "assets";

export const Header = () => {
  return (
    <StyledHeader>
      <IconContainer>
        <PixemaDark />
      </IconContainer>
      <Form />
    </StyledHeader>
  );
};
