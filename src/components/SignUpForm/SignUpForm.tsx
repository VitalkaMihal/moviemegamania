import React from "react";
import { Container, Name, SignUp, StyledSignUp } from "./styles";
import { Input } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { Colors } from "ui";

export const SignUpForm = () => {
  return (
    <StyledSignUp>
      <Name>Sign Up</Name>
      <Container>
        Name
        <Input placeholder="Your name" />
      </Container>
      <Container>
        Email
        <Input placeholder="Your email" />
      </Container>
      <Container>
        Password
        <Input placeholder="Your password" />
      </Container>
      <Container>
        Confirm password
        <Input placeholder="Confirm password" />
      </Container>
      <SignUp>Sign Up</SignUp>
      <Link
        style={{ textDecoration: "none", color: `${Colors.Secondary}`, textAlign: "center" }}
        to={ROUTE.SING_IN_AT_SING_UP}
      >
        Already have an account? Sign In
      </Link>
    </StyledSignUp>
  );
};
