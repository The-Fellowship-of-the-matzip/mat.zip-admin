import styled from "styled-components";
import LoginBox from "./LoginBox";

const LayOut = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = ({ setAccessToken }) => {
  return (
    <LayOut>
      <LoginBox setAccessToken={setAccessToken} />;
    </LayOut>
  );
};

export default LoginPage;
