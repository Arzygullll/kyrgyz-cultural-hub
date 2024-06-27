import React, { useState } from "react";
import { useProduct } from "../../context/TourContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const AddTour = () => {
  const { createProduct } = useProduct();

  const [activeInputIndex, setActiveInputIndex] = useState(0);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const inputs = [
    { label: "Название", name: "title", component: TextField },
    { label: "Описание", name: "description", component: TextField },
    { label: "Цена", name: "price", component: TextField },
    { label: "Изображение", name: "image", component: TextField },
    {
      label: "category",
      name: "category",
      component: CategorySelect,
    },
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? Number(value) : value,
    }));

    if (value && activeInputIndex < inputs.length - 1) {
      setActiveInputIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClick = () => {
    createProduct(product);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
        Добавить продукт
      </Typography>
      {inputs.map(
        (input, index) =>
          index <= activeInputIndex && (
            <Box key={input.name} sx={{ marginBottom: "16px" }}>
              <input.component
                name={input.name}
                label={input.label}
                value={product[input.name]}
                onChange={handleInput}
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#f9f9f9" }}
              />
            </Box>
          )
      )}
      {activeInputIndex === inputs.length - 1 && (
        <Button
          onClick={handleClick}
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: "16px" }}
        >
          Добавить продукт
        </Button>
      )}
    </Box>
  );
};

export default AddTour;
