import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import LoginPage from "./components/Login/LoginPage";
import MembersPage from "./components/Members/MembersPage";
import RestaurantDemandsPage from "./components/RestaurantDemands/RestaurantDemandsPage";
import RestaurantsPage from "./components/Restaurants/RestaurantsPage";
import ReviewsPage from "./components/Reviews/ReviewsPage";

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
          path="/members"
          element={
            <MembersPage
              accessToken={accessToken}
              setSelectedPage={setSelectedPage}
            />
          }
        />
        <Route
          path="/Restaurants"
          element={
            <RestaurantsPage
              accessToken={accessToken}
              setSelectedPage={setSelectedPage}
            />
          }
        />
        <Route
          path="/reviews"
          element={
            <ReviewsPage
              accessToken={accessToken}
              setSelectedPage={setSelectedPage}
            />
          }
        />
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
