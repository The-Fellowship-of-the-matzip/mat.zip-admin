import styled from "styled-components";

const Layout = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Box = styled.div``;

const RestaurantDemandsPage = ({ setSelectedPage }) => {
  setSelectedPage("음식점 추가 요청");

  return (
    <Layout>
      <Box></Box>
    </Layout>
  );
};

export default RestaurantDemandsPage;
