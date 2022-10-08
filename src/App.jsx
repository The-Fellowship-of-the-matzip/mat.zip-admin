import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import LoginPage from "./components/Login/LoginPage";

function App() {
  const [accessToken, setAccessToken] = useState(
    sessionStorage.getItem("accessToken" || null)
  );
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={<LoginPage setAccessToken={setAccessToken} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
