import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, SignUp, StyledSignUp, SignName } from "./styles";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { Colors } from "ui";
import { StyledInput } from "components";
import { AuthValue } from "types";
import { fetchSignUpUser, useAppDispatch } from "store";

export const SignUpForm = () => {
  const { register, handleSubmit } = useForm<AuthValue>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<AuthValue> = (userAuth) => {
    dispatch(fetchSignUpUser(userAuth));
  };

  return (
    <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
      <SignName>Sign Up</SignName>
      <Container>
        Name
        <StyledInput type="text" placeholder="Your name" {...register("name")} />
      </Container>
      <Container>
        Email
        <StyledInput type="email" placeholder="Your email" {...register("email")} />
      </Container>
      <Container>
        Password
        <StyledInput type="password" placeholder="Your password" {...register("password")} />
      </Container>
      <Container>
        Confirm password
        <StyledInput
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
      </Container>
      <SignUp type="submit">Sign Up</SignUp>
      <Link
        style={{ textDecoration: "none", color: `${Colors.Secondary}`, textAlign: "center" }}
        to={ROUTE.SING_IN_AT_SING_UP}
      >
        Already have an account? Sign In
      </Link>
    </StyledSignUp>
  );
};
