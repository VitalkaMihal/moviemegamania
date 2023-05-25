import { StyledInput } from "components";
import { Container, SignName, SignUp, StyledSignUp } from "components/SignUpForm/styles";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSignInUser, useAppDispatch } from "store";
import { AuthValue } from "types";
import { Colors } from "ui";

export const SingInPage = () => {
  const { register, handleSubmit } = useForm<AuthValue>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<AuthValue> = (userAuth) => {
    dispatch(fetchSignInUser(userAuth));
  };

  return (
    <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
      <SignName>Sign In</SignName>
      <Container>
        Email
        <StyledInput type="email" placeholder="Your email" {...register("email")} />
      </Container>
      <Container>
        Password
        <StyledInput type="password" placeholder="Your password" {...register("password")} />
      </Container>
      <SignUp type="submit">Sign In</SignUp>
      <Link
        style={{ textDecoration: "none", color: `${Colors.Secondary}`, textAlign: "center" }}
        to={ROUTE.SING_IN_AT_SING_UP}
      >
        Already have an account? Sign In
      </Link>
    </StyledSignUp>
  );
};
