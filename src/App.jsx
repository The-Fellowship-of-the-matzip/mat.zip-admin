import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import LoginPage from "./components/Login/LoginPage";
import RestaurantDemandsPage from "./components/RestaurantDemands/RestaurantDemandsPage";

function App() {
  const [accessToken, setAccessToken] = useState(
    sessionStorage.getItem("accessToken" || null)
  );
  const [selectedPage, setSelectedPage] = useState();
  return (
    <Routes>
      <Route path="/" element={<LoginPage setAccessToken={setAccessToken} />} />
      <Route element={<DefaultLayout selectedPage={selectedPage} />}>
        <Route
          path="/restaurant_demands"
          element={
            <RestaurantDemandsPage
              accessToken={accessToken}
              setSelectedPage={setSelectedPage}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
