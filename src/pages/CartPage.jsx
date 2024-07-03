import React from "react";
import Cart from "../cart/Cart";
import { Container, Grid } from "@mui/material";

const CartPage = () => {
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
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CartPage;
