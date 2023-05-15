import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonFilter, StyledForm } from "./styles";
import { StyledInput } from "components";
import { BurgerSearch } from "assets";

export const InputForm = () => {
  return (
    <StyledForm onSubmit={() => {}}>
      <StyledInput />
      <ButtonFilter>
        <BurgerSearch />
      </ButtonFilter>
    </StyledForm>
  );
};
