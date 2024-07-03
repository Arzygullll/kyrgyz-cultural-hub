import React, { useState } from "react";
import { useCart } from "../../context/CartContextProvider";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/TourContextProvider";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Favorite, Delete, Edit } from "@mui/icons-material";
import Detail from "./Detail";
import { ADMIN } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";

const TourCard = ({ elem }) => {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deleteProduct } = useProduct();
  const handleDelete = () => {
    deleteProduct(elem.id);
    deleteProductFromCart(elem.id);
  };
  const { user } = useAuth();

  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%",
        height: "100%",
        margin: 1,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        background: "rgba(240, 240, 240, 0.8)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardActionArea
        sx={{
          position: "relative",
          height: 360,
          overflow: "hidden",
        }}
        onClick={handleOpen}
      >
        <CardMedia
          component="img"
          image={elem.image}
          alt={elem.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(80%)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <CardContent
          sx={{
            textAlign: "left",
            p: 3,
            position: "absolute",
            bottom: 0,
            background: "rgba(0, 0, 0, 0.2)",
            color: "#fff",
            width: "100%",
            transition: "background 0.3s ease",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {elem.title}
          </Typography>
          {/* <Typography variant="body2" sx={{ mb: 2 }}>
            {elem.description}
          </Typography> */}
          <Typography variant="h6" color="primary">
            {elem.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <IconButton
          sx={{
            color: checkProductInCart(elem.id) ? "red" : "inherit",
          }}
          onClick={() => addProductToCart(elem)}
        >
          <Favorite />
        </IconButton>
        <Stack direction="row">
          {user.email === ADMIN ? (
            <>
              <Button
                startIcon={<Delete />}
                color="secondary"
                size="small"
                onClick={handleDelete}
              ></Button>
              <Button
                startIcon={<Edit />}
                onClick={() => navigate(`/edit/${elem.id}`)}
                color="primary"
                size="small"
              ></Button>
            </>
          ) : (
            <IconButton
              sx={{
                color: checkProductInCart(elem.id) ? "red" : "inherit",
              }}
              onClick={() => addProductToCart(elem)}
            >
              <Favorite />
            </IconButton>
          )}
        </Stack>
      </Stack>
      <Detail elem={elem} open={open} handleClose={handleClose} />
    </Card>
  );
};

export default TourCard;
