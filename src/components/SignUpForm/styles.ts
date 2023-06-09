import styled from "styled-components";
import { Colors, H2, S3 } from "ui";

const StyledSignUp = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  row-gap: 40px;
  ${H2};
  background-color: ${Colors.Dark};
  width: 574px;
`;

const Name = styled.div``;

const Container = styled.div`
  ${S3};
  color: ${Colors.White};
`;

const SignUp = styled.button`
  ${S3};
  color: ${Colors.White};
  background-color: ${Colors.PrimaryDark};
  padding: 16px 0;
  border: none;
  border-radius: 10px;
`;

const SignName = styled.div`
  ${H2};
  color: ${Colors.White};
  text-align: center;
`;

export { StyledSignUp, Name, Container, SignUp, SignName };
