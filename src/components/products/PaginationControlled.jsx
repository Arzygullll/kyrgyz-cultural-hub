import React from "react";
import { Box, Stack, styled } from "@mui/material";

const StyledPagination = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CircleButton = styled("button")(({ theme }) => ({
  width: theme.spacing(3),
  height: theme.spacing(3),
  borderRadius: "50%",
  border: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const PaginationControlled = ({ page, count, handleChange }) => {
  return (
    <StyledPagination>
      <Stack direction="row" spacing={1}>
        {[...Array(count).keys()].map((index) => (
          <CircleButton
            key={index}
            onClick={() => handleChange(null, index + 1)}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: page === index + 1 ? "black" : "transparent",
              color: page === index + 1 ? "#fff" : "black",
            }}
          >
            {index + 1}
          </CircleButton>
        ))}
      </Stack>
    </StyledPagination>
  );
};

export default PaginationControlled;
