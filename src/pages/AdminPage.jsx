import React, { useState } from "react";
import AddCategory from "../components/products/AddCategory";
import { Button } from "@mui/material";
import AddTour from "../components/products/AddTour";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Add Category</Button>
      <AddTour />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
