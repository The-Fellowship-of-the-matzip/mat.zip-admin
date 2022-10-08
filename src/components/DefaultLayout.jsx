import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayOut = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultLayout = () => {
  return (
    <>
      <LayOut>
        <Outlet />
      </LayOut>
    </>
  );
};

export default DefaultLayout;
