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

interface HeaderProps {
  isOpen?: boolean;
}

export const Header = ({ isOpen }: HeaderProps) => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const dispatch = useAppDispatch();
  const search = useInput();
  const navigate = useNavigate();

  const debouncedValue = useDebounce(search.value);

  useEffect(() => {
    if (debouncedValue.length > 2) {
      dispatch(fetchSearch(debouncedValue));
      navigate("/search");
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
          <UserMenu isOpen={isMenuOpen} />
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
