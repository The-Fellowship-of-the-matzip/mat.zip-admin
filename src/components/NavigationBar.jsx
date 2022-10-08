import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Bar = styled.section`
  min-width: 15rem;
  max-width: 15rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;

const BarHeader = styled.section`
  padding: 1rem 0 0 0;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const BarItem = styled.div`
  padding: 1rem 2rem;
  height: max-content;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

const NavigationBar = () => {
  return (
    <Bar>
      <BarHeader>
        <Logo width={"80%"} />
      </BarHeader>
      <BarItem>회원</BarItem>
      <BarItem>음식점</BarItem>
      <BarItem>리뷰</BarItem>
      <BarItem>음식점 추가 요청</BarItem>
    </Bar>
  );
};

export default NavigationBar;
