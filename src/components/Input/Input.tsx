import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  placeholder?: string;
  type?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type, onChange }: InputProps) => {
  return <StyledInput placeholder={placeholder} type={type} onChange={onChange} />;
};
