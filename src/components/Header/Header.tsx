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
import { useEffect } from "react";
import { fetchSearch, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { useInput, useToggle, useWindowSize } from "hooks";
import { useDebounce } from "hooks/useDebounce";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const dispatch = useAppDispatch();
  const search = useInput();
  const navigate = useNavigate();

  const debouncedValue = useDebounce(search.value);

  useEffect(() => {
    if (debouncedValue.length > 3) {
      dispatch(fetchSearch(debouncedValue));
      navigate("/moviemegamania/search");
    }
  }, [dispatch, debouncedValue, navigate]);

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
          <Form placeholder="search" {...search} />
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
