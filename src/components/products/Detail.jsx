import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContextProvider";
import axios from "axios";

const COMMENTS_URL = "http://localhost:8000/comments";

const Detail = ({ elem, open, handleClose }) => {
  const { addProductToCart, checkProductInCart } = useCart();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (open) {
      fetchComments();
    }
  }, [open]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${COMMENTS_URL}?productId=${elem.id}`);
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  const handleAddComment = async () => {
    if (comment.trim()) {
      const newComment = {
        user: `User${comments.length + 1}`,
        text: comment,
        productId: elem.id,
      };
      try {
        const response = await axios.post(COMMENTS_URL, newComment);
        setComments([...comments, response.data]);
        setComment("");
      } catch (error) {
        console.error("Failed to add comment:", error);
      }
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`${COMMENTS_URL}/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

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
    overflowY: "auto",
    maxHeight: "90vh",
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
            maxHeight: "300px",
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
            {elem.price.toFixed(2)}$
          </Typography>
        </Box>
        <Box sx={{ mt: "auto", pb: 2 }}>
          {checkProductInCart(elem.id) ? (
            <Button
              variant="contained"
              disabled
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                px: 4,
                backgroundColor: "#ccc",
              }}
            >
              Уже забронирован
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => addProductToCart(elem)}
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                px: 4,
                backgroundColor: "#007bff",
                ":hover": { backgroundColor: "#0056b3" },
              }}
            >
              Купить за {elem.price.toFixed(2)}$
            </Button>
          )}
        </Box>
        <Box sx={{ width: "100%", mt: 2 }}>
          <IconButton onClick={() => setShowComments(!showComments)}>
            <CommentIcon />
          </IconButton>
          {showComments && (
            <Box sx={{ mt: 2 }}>
              {comments.map((c) => (
                <Box
                  key={c.id}
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    <strong>{c.user}:</strong> {c.text}
                  </Typography>
                  <IconButton onClick={() => handleDeleteComment(c.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <TextField
                fullWidth
                variant="outlined"
                label="Добавить комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{ mt: 2, mb: 1 }}
              />
              <Button
                variant="contained"
                onClick={handleAddComment}
                sx={{
                  mt: 1,
                  backgroundColor: "#007bff",
                  ":hover": { backgroundColor: "#0056b3" },
                }}
              >
                Добавить
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Detail;
