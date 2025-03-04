import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TourContextProvider from "./context/TourContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <TourContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </TourContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
