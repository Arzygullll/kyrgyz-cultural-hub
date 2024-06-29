import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/TourContextProvider";

const AddCategory = ({ open, handleClose }) => {
  const { createCategory } = useProduct();

  // Стили модального окна
  const modalStyle = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    textAlign: "center",
  };

  const [category, setCategory] = useState("");

  const handleClick = () => {
    if (!category.trim()) {
      alert("Введите данные!");
      return;
    }
    const newCategory = {
      name: category,
    };
    createCategory(newCategory);
    setCategory("");
    handleClose(); // Закрытие модального окна после добавления категории
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" id="modal-modal-title" gutterBottom>
          Добавить новую категорию
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Название категории"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px", fontWeight: "bold", px: 4 }}
        >
          Добавить
        </Button>
      </Box>
    </Modal>
  );
};

export default AddCategory;
