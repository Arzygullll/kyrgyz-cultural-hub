import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../context/TourContextProvider";
import TourCard from "./TourCard";
import { Box } from "@mui/material";
import PagintaionControlled from "./PaginationControlled";

const TourList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);
  const { getProducts, products } = useProduct();
  // текущая страница
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  // кол-во продуктов на одной странице
  const itemPerPage = 6;
  // общее кол-во страниц
  const count = Math.ceil(products.length / itemPerPage);
  console.log(products);
  const currentData = () => {
    const beginIndex = (page - 1) * itemPerPage;
    const endIndex = beginIndex + itemPerPage;
    return products.slice(beginIndex, endIndex);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {currentData().map((elem) => (
          <TourCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <PagintaionControlled
        page={page}
        count={count}
        handleChange={handleChange}
      />
    </div>
  );
};

export default TourList;
