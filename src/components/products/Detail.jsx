import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../../context/CartContextProvider";

const Detail = ({ elem, open, handleClose }) => {
  const { addProductToCart, checkProductInCart } = useCart();

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    maxWidth: "95%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <img
          src={elem.image}
          alt={elem.title}
          style={{
            width: "100%",
            borderRadius: "8px 8px 0 0",
            objectFit: "cover",
          }}
        />
        <Box sx={{ p: 2, textAlign: "left", width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            {elem.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {elem.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {elem.price.toFixed(2)}kgs
          </Typography>
        </Box>
        <Box sx={{ mt: "auto" }}>
          {checkProductInCart(elem.id) ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => addProductToCart(elem)}
              sx={{ borderRadius: "20px", fontWeight: "bold", px: 4 }}
            >
              Купить за {elem.price.toFixed(2)}kgs
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled
              sx={{ borderRadius: "20px", fontWeight: "bold", px: 4 }}
            >
              Уже в корзине
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Detail;
