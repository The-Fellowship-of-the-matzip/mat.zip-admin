import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API_BASE_URL, ENDPOINTS } from "../../constants/urls";

const Container = styled.div`
  padding: 2rem;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 20px;
  border: solid 1px #dadada;
  background: white;
  box-sizing: border-box;
  border-radius: 12px;
`;

const TextBlock = styled.div`
  font-size: 2rem;
  padding-bottom: 1rem;
  font-weight: 500;
`;

const Button = styled.div`
  font-size: 18px;
  line-height: 49px;
  margin: 10px 0 0 0;
  display: block;
  width: 100%;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary};
`;

function LoginContent({ setAccessToken }) {
  const navigate = useNavigate();
  let id = "";
  let password = "";

  const login = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}${ENDPOINTS.LOGIN}`, {
        id,
        password,
      });
      const accessToken = res.data.accessToken;
      setAccessToken(accessToken);
      sessionStorage.setItem("accessToken", accessToken);
      navigate("/members");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleIdInputChange = (e) => {
    id = e.target.value;
  };

  const handlePasswordInputChange = (e) => {
    password = e.target.value;
  };

  return (
    <Container>
      <TextBlock>Log In</TextBlock>
      <Input
        id="id"
        name="id"
        placeholder="아이디를 입력해주세요"
        onChange={handleIdInputChange}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={handlePasswordInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            login();
          }
        }}
      />
      <Button onClick={login}>로그인</Button>
    </Container>
  );
}

export default LoginContent;
