import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/TourContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditTour = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct, editProduct } = useProduct();

  useEffect(() => {
    getOneProduct(id);
  }, [id, getOneProduct]);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleClick = () => {
    editProduct(id, product);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background:
          "radial-gradient(circle, rgba(63, 95, 140, 1) 0%, rgba(47, 47, 172, 1) 43%, rgba(47, 140, 172, 1) 100%)",
        padding: 4,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" align="center" mb={3} color="white">
        Редактировать
      </Typography>
      <Box sx={{ width: "100%", maxWidth: 500, px: 2 }}>
        <TextField
          name="title"
          fullWidth
          label="Title"
          variant="outlined"
          onChange={handleInput}
          value={product.title || ""}
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          sx={{ input: { color: "white" } }}
        />
        <TextField
          name="description"
          fullWidth
          label="Description"
          variant="outlined"
          onChange={handleInput}
          value={product.description || ""}
          margin="normal"
          multiline
          rows={4}
          InputLabelProps={{ style: { color: "white" } }}
          sx={{ input: { color: "white" } }}
        />
        <TextField
          name="image"
          fullWidth
          label="Image"
          variant="outlined"
          onChange={handleInput}
          value={product.image || ""}
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          sx={{ input: { color: "white" } }}
        />
        <TextField
          name="price"
          fullWidth
          label="Price"
          variant="outlined"
          onChange={handleInput}
          value={product.price || ""}
          margin="normal"
          type="number"
          InputLabelProps={{ style: { color: "white" } }}
          sx={{ input: { color: "white" } }}
        />
        <Button
          onClick={handleClick}
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#0056b3",
            ":hover": { backgroundColor: "#004494" },
          }}
        >
          Редактировать
        </Button>
      </Box>
    </Box>
  );
};

export default EditTour;
