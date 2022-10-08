import styled from "styled-components";

const Layout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RestaurantDemandsPage = ({ setSelectedPage }) => {
  setSelectedPage("음식점 추가 요청");

  return <Layout></Layout>;
};

export default RestaurantDemandsPage;
