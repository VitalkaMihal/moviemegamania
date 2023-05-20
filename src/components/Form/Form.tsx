import { Input } from "components";
import { ButtonFilter, StyledForm } from "./styles";
import { BurgerSearch } from "assets";

export const Form = () => {
  return (
    <StyledForm onSubmit={() => {}}>
      <Input />
      <ButtonFilter>
        <BurgerSearch />
      </ButtonFilter>
    </StyledForm>
  );
};
