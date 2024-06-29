import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/TourContextProvider";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { createProduct } = useProduct();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const handleClick = () => {
    createProduct(product);
    // Очистка полей после добавления продукта (опционально)
    setProduct({
      title: "",
      description: "",
      price: 0,
      image: "",
      category: "",
    });
  };

  return (
    <Box
      sx={{
        width: "50vw",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // Легкий полупрозрачный фон
        borderRadius: "10px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", // Тень для глубины
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.3s ease-in-out", // Анимация для плавности изменений
        "&:hover": {
          transform: "scale(1.02)", // Масштабирование при наведении
          boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)", // Усиленная тень при наведении
        },
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        СТРАНИЦА АДМИНИСТРАТОРА
      </Typography>
      <TextField
        name="title"
        value={product.title}
        fullWidth
        label="Название"
        variant="outlined"
        onChange={handleInput}
        style={{ marginBottom: "15px" }}
      />
      <TextField
        name="description"
        value={product.description}
        fullWidth
        label="Описание"
        variant="outlined"
        onChange={handleInput}
        style={{ marginBottom: "15px" }}
      />
      <TextField
        name="image"
        value={product.image}
        fullWidth
        label="URL изображения"
        variant="outlined"
        onChange={handleInput}
        style={{ marginBottom: "15px" }}
      />
      <TextField
        name="price"
        value={product.price}
        fullWidth
        label="Цена"
        type="number"
        variant="outlined"
        onChange={handleInput}
        style={{ marginBottom: "15px" }}
      />
      <CategorySelect handleInput={handleInput} />
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        color="primary"
        style={{
          marginTop: "20px",
          borderRadius: "20px",
          padding: "12px 0",
          fontWeight: "bold",
        }}
      >
        Добавить
      </Button>
    </Box>
  );
};

export default AddProduct;
