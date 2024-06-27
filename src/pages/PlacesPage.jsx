import React from "react";
import TourList from "../components/products/TourList";
import SideBar from "../components/products/SideBar";

const PlacesPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "300px", flex: "none" }}>
        <SideBar />
      </div>
      <TourList />
    </div>
  );
};

export default PlacesPage;
