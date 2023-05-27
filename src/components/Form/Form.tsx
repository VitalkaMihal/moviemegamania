import { Input } from "components";
import { ButtonFilter, StyledForm } from "./styles";
import { BurgerSearch } from "assets";
import { ChangeEvent } from "react";

interface FormProps {
  placeholder?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Form = ({ placeholder, onChange, value }: FormProps) => {
  return (
    <StyledForm onSubmit={() => {}}>
      <Input placeholder={placeholder} onChange={onChange} />
      <ButtonFilter>
        <BurgerSearch />
      </ButtonFilter>
    </StyledForm>
  );
};
