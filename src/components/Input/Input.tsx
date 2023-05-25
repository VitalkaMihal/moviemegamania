import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  placeholder?: string;
  type?: string;
}

export const Input = ({ placeholder, type }: InputProps) => {
  return <StyledInput placeholder={placeholder} type={type} />;
};
