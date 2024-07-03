import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlacesPage from "../pages/PlacesPage";
import EditTour from "../components/products/EditTour";
import AdminPage from "../pages/AdminPage";
import CartPage from "../pages/CartPage";
<<<<<<< HEAD
import ContactPage from "../pages/ContactPage";
=======
import EtnoCollectionPage from "../pages/EtnoCollectionPage";
import AuthPage from "../pages/AuthPage";
import KnowledgePage from "../pages/KnowledgePage";
>>>>>>> 83b8d411469f86dbe1e185ffd9fc7392f2a8a28d

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/places", element: <PlacesPage /> },
    { id: 3, link: "/edit/:id", element: <EditTour /> },
    { id: 4, link: "/admin", element: <AdminPage /> },
    { id: 5, link: "/cart", element: <CartPage /> },
<<<<<<< HEAD
    { id: 6, link: "/contact", element: <ContactPage /> },
=======
    { id: 5, link: "/etnocollection", element: <EtnoCollectionPage /> },
    { id: 6, link: "/auth", element: <AuthPage /> },
    { id: 7, link: "/knowledge", element: <KnowledgePage /> },
>>>>>>> 83b8d411469f86dbe1e185ffd9fc7392f2a8a28d
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
