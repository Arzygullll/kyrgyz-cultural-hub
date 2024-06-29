import React, { useState } from "react";
import AddCategory from "../components/products/AddCategory";
import { Button } from "@mui/material";
import AddTour from "../components/products/AddTour";

const AdminPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
          "radial-gradient(circle, rgba(63, 95, 140, 1) 0%, rgba(47, 47, 172, 1) 43%, rgba(47, 140, 172, 1) 100%)", // Radial gradient background
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "17px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Box shadow for depth
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          background:
            "radial-gradient(circle, rgba(63, 95, 140, 1) 0%, rgba(47, 47, 172, 1) 43%, rgba(47, 140, 172, 1) 100%)", // Radial gradient background
          borderRadius: "20px",
          padding: "10px 20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Добавить категорию
      </Button>
      <AddTour style={{ marginBottom: "20px", width: "100%" }} />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
