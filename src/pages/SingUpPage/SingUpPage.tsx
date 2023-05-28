import { SignUpForm } from "pages";
import React from "react";
import { useNavigate } from "react-router-dom";
import { selectUser, useAppSelector } from "store";

export const SingUpPage = () => {
  const { isLogin } = useAppSelector(selectUser);
  const navigate = useNavigate();
  if (isLogin) {
    navigate("");
  }
  return <SignUpForm />;
};
