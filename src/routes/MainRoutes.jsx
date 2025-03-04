import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlacesPage from "../pages/PlacesPage";
import EditTour from "../components/products/EditTour";
import AdminPage from "../pages/AdminPage";
import CartPage from "../pages/CartPage";
import EtnoCollectionPage from "../pages/EtnoCollectionPage";
import AuthPage from "../pages/AuthPage";
import KnowledgePage from "../pages/KnowledgePage";
import ContactPage from "../pages/ContactPage";
import FavoritePage from "../pages/FavoritePage";
import ActivitiesPage from "../pages/ActivitiesPage";


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/places", element: <PlacesPage /> },
    { id: 3, link: "/edit/:id", element: <EditTour /> },
    { id: 4, link: "/admin", element: <AdminPage /> },
    { id: 5, link: "/cart", element: <CartPage /> },
    { id: 6, link: "/etnocollection", element: <EtnoCollectionPage /> },
    { id: 7, link: "/auth", element: <AuthPage /> },
    { id: 8, link: "/knowledge", element: <KnowledgePage /> },
    { id: 9, link: "/contact", element: <ContactPage /> },
    { id: 10, link: "/isfavorite", element: <FavoritePage /> },
    { id: 11, link: "/activities", element: <ActivitiesPage /> },

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
