import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/TourContextProvider";
import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const params = {};
    if (search) {
      params.q = search;
    }
    const category = searchParams.get("category");
    if (category) {
      params.category = category;
    }
    setSearchParams(params);
  }, [search, searchParams, setSearchParams]);

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <Paper
      sx={{
        p: 1,
        borderRadius: "10px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        width: "100%",
        textAlign: "center",
        background: "rgba(0, 0, 0, 0.226)",
        margin: "auto",
        mt: 5.8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={() => console.log("Search clicked")}>
                  <SearchIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {search && (
                  <IconButton onClick={handleClearSearch}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                )}
              </InputAdornment>
            ),
            placeholder: "Поиск...",
            sx: { fontSize: "0.9rem" },
          }}
          sx={{
            "& .MuiInputBase-input": {
              textAlign: "center",
              fontSize: "0.9rem",
            },
          }}
        />
      </Box>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="category"
          name="category"
          onChange={(e) => fetchByParams("category", e.target.value)}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <FormControlLabel
            value="all"
            control={<Radio size="small" />}
            label="Все категории"
            sx={{ fontSize: "0.9rem", mx: 1 }}
          />
          {categories.map((elem) => (
            <FormControlLabel
              key={elem.id}
              value={elem.name}
              control={<Radio size="small" />}
              label={elem.name}
              sx={{ fontSize: "0.9rem", mx: 1 }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
