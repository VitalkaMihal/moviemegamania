import { IconContainer, StyledHeader, FormContainer, Back, BurgerUserContainer } from "./styles";
import { Form, UserMenu } from "components";
import { BurgerUserMenu, PixemaDark } from "assets";
import { useInput } from "hooks/useInput";
import { ChangeEvent, useEffect } from "react";
import { fetchSearch, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { input, handleInput } = useInput();
  const navigate = useNavigate();
  const onChange = (prop: ChangeEvent<HTMLInputElement>) => {
    navigate("/moviemegamania/search");
    handleInput(prop);
  };

  useEffect(() => {
    dispatch(fetchSearch(input));
  }, [dispatch, input]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledHeader>
      <IconContainer>
        <PixemaDark />
        <Back onClick={handleBack}>Back</Back>
      </IconContainer>
      <FormContainer>
        <Form placeholder="search" onChange={onChange} />
        <UserMenu />
        <BurgerUserContainer>
          <BurgerUserMenu />
        </BurgerUserContainer>
      </FormContainer>
    </StyledHeader>
  );
};
