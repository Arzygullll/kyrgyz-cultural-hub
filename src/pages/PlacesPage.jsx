import React from "react";
import SideBar from "../components/products/SideBar";
import TourList from "../components/products/TourList";
import { Container, Grid } from "@mui/material";

const PlacesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} md={3}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={9}>
          <TourList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlacesPage;
