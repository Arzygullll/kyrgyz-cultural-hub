import React, { useState, useEffect } from "react";
import TourCard from "../components/products/TourCard";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>Избранные туры</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favorites.map((tour) => (
          <TourCard key={tour.id} elem={tour} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
