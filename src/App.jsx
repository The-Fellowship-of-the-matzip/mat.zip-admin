import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
