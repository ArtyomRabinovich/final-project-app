import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import { getStoredLaptops } from "../../data/dataUtility";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const laptops = getStoredLaptops();
    setOptions(
      laptops.map((laptop) => ({
        label: laptop.model,
        id: laptop.id,
      }))
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/items?query=${searchTerm}`);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 600,
        margin: "auto",
      }}
      onSubmit={handleSubmit}
    >
      <Autocomplete
        freeSolo
        disableClearable
        options={options}
        getOptionLabel={(option) => option.label}
        onInputChange={(e, newInputValue) => {
          setSearchTerm(newInputValue);
        }}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search laptops"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <IconButton
                  type="submit"
                  sx={{
                    paddingRight: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              ),
            }}
            variant="outlined"
          />
        )}
        sx={{
          width: "100%",
          ".MuiInputBase-root": {
            paddingRight: 0,
          },
        }}
      />
    </Paper>
  );
};

export default SearchBar;
