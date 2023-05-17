import { ButtonFilter, StyledForm } from "./styles";
import { StyledInput } from "components";
import { BurgerSearch } from "assets";

export const Form = () => {
  return (
    <StyledForm onSubmit={() => {}}>
      <StyledInput />
      <ButtonFilter>
        <BurgerSearch />
      </ButtonFilter>
    </StyledForm>
  );
};
