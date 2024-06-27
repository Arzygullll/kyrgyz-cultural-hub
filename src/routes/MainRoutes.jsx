import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlacesPage from "../pages/PlacesPage";
import EditTour from "../components/products/EditTour";
import AdminPage from "../pages/AdminPage";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/places", element: <PlacesPage /> },
    { id: 3, link: "/edit/:id", element: <EditTour /> },
    { id: 4, link: "/admin", element: <AdminPage /> },
    { id: 5, link: "/cart", element: <CartPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
