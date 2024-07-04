import React from "react";
import SideBar from "../components/products/SideBar";
import TourList from "../components/products/TourList";
import { Container, Grid } from "@mui/material";

const PlacesPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../components/homePage/assets/Kyrgyzstan.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "103.5vh",
      }}
    >
      <Container maxWidth="100%">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SideBar />
          </Grid>
          <Grid item xs={12}>
            <TourList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PlacesPage;
