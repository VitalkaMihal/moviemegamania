import {
  IconContainer,
  StyledHeader,
  FormContainer,
  Back,
  BurgerUserContainer,
  IsAside,
} from "./styles";
import { AsideMenu, Form, UserMenu } from "components";
import { BurgerUserMenu, PixemaDark } from "assets";
import { ChangeEvent, useEffect } from "react";
import { fetchSearch, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { useInput, useToggle, useWindowSize } from "hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
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
  const { width = 0 } = useWindowSize();
  const isTablet = width < 1440;

  return (
    <>
      <StyledHeader>
        <IconContainer>
          <PixemaDark />
          <Back onClick={handleBack}>Back</Back>
        </IconContainer>
        <FormContainer>
          <Form placeholder="search" onChange={onChange} />
          <UserMenu />
          <BurgerUserContainer onClick={toggleMenu}>
            <BurgerUserMenu />
          </BurgerUserContainer>
        </FormContainer>
      </StyledHeader>
      {isTablet && isMenuOpen && (
        <IsAside>
          <AsideMenu />
        </IsAside>
      )}
    </>
  );
};
