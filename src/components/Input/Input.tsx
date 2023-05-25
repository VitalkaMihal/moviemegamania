import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return <StyledInput placeholder={placeholder} />;
};
