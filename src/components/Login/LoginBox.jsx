import styled from "styled-components";
import LoginContent from "./LoginContent";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  box-shadow: 0.1rem 0.1rem 0.5rem gray;
  border-radius: 5px;
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const TextBlock = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  font-size: 36px;
  font-weight: 700;
  color: white;
`;

const LoginBox = ({ setAccessToken }) => {
  return (
    <>
      <Box>
        <Header>
          <Logo />
          <TextBlock>ADMIN</TextBlock>
        </Header>
        <LoginContent setAccessToken={setAccessToken} />
      </Box>
    </>
  );
};

export default LoginBox;
