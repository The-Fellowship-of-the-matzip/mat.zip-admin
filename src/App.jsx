import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import LoginPage from "./components/Login/LoginPage";

function App() {
  const [accessToken, setAccessToken] = useState(
    sessionStorage.getItem("accessToken" || null)
  );
  useEffect(
    (accessToken) => {
      sessionStorage.setItem("accessToken", accessToken);
    },
    [accessToken]
  );
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
