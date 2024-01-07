import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import NewClient from "../pages/NewClient";
import { PATHS } from "./consts";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Topbar from "../components/Topbar";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      {isLoggedIn && <Topbar />}
      <Routes>
        <Route path={PATHS.NewClient} element={<NewClient />} />
        <Route path={PATHS.Home} element={isLoggedIn ? <Home /> : <Login />} />
        <Route path={PATHS.Register} element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
