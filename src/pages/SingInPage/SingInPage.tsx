import { StyledInput } from "components";
import { Container, SignName, SignUp, StyledSignUp } from "components/SignUpForm/styles";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import {
  fetchSignInUser,
  selectUser,
  setFavoritesPage,
  useAppDispatch,
  useAppSelector,
} from "store";
import { AuthValue } from "types";
import { Colors } from "ui";

export const SingInPage = () => {
  const { register, handleSubmit } = useForm<AuthValue>();
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector(selectUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthValue> = (userAuth) => {
    dispatch(fetchSignInUser(userAuth));
  };

  if (isLogin) {
    navigate("/moviemegamania");
    if (localStorage.length) {
      dispatch(setFavoritesPage(JSON.parse(localStorage.favorites)));
    }
  }

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
        to={ROUTE.SING_UP_AT_SIGN_IN}
      >
        Don't have an account? Sign In
      </Link>
    </StyledSignUp>
  );
};
