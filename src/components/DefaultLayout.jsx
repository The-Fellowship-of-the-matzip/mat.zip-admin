import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";

const LayOut = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.primaryLight};
  background-color: ${({ theme }) => theme.primaryLight};
`;

const Contents = styled.section`
  flex-grow: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.section`
  flex-grow: 1;
`;

const DefaultLayout = ({ selectedPage }) => {
  return (
    <>
      <LayOut>
        <NavigationBar />
        <Contents>
          <Header>{selectedPage}</Header>
          <Body>
            <Outlet />
          </Body>
        </Contents>
      </LayOut>
    </>
  );
};

export default DefaultLayout;
