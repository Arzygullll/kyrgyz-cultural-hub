import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../context/TourContextProvider";
import TourCard from "./TourCard";
import { Box } from "@mui/material";
import PaginationControlled from "./PaginationControlled";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const TourList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products } = useProduct();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const itemPerPage = 3;
  const count = Math.ceil(products.length / itemPerPage);

  const currentData = () => {
    const beginIndex = (page - 1) * itemPerPage;
    return products.slice(beginIndex, beginIndex + itemPerPage);
  };

  const handleChange = (e, value) => {
    setPage(value);
  };

  const handlePrev = () => {
    handleChange(null, page - 1);
  };

  const handleNext = () => {
    handleChange(null, page + 1);
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <NavigateBeforeIcon
          onClick={handlePrev}
          disabled={page === 1}
          style={{
            cursor: "pointer",
            marginLeft: "5px",
            marginTop: "200px",
            width: "50px",
            height: "50px",
            color: "white",
          }}
        />
        {currentData().map((elem) => (
          <TourCard key={elem.id} elem={elem} />
        ))}
        <NavigateNextIcon
          onClick={handleNext}
          disabled={page === count}
          style={{
            cursor: "pointer",
            marginLeft: "5px",
            marginTop: "200px",
            width: "50px",
            height: "50px",
            color: "white",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
        }}
      >
        <PaginationControlled
          page={page}
          count={count}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default TourList;
