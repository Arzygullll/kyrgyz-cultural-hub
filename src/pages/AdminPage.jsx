// AdminPage.jsx
import React, { useState } from "react";
import { Button, Container, Grid, Paper, Typography, Box } from "@mui/material";
import AddCategory from "../components/products/AddCategory";
import AddTour from "../components/products/AddTour";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4, marginTop: "80px" }}>
        <Typography variant="h3" gutterBottom sx={{ color: "#1976d2" }}>
          СТРАНИЦА АДМИНИСТРАТОРА
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ mt: 2 }}
        >
          Добавить категорию
        </Button>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "#fafafa",
              borderRadius: "10px",
              paddingRight: "30px",
            }}
          >
            <AddTour />
          </Paper>
        </Grid>
      </Grid>
      <AddCategory open={open} handleClose={handleClose} />
    </Container>
  );
};

export default AdminPage;
