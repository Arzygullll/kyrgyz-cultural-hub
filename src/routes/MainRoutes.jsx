import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [{ id: 1, link: "/", element: <HomePage /> }];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
