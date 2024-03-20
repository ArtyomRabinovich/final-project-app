import React, { useMemo } from "react";
import {
  Autocomplete,
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function LaptopSearch({
  searchValue,
  onSearchChange,
  searchField,
  onSearchFieldChange,
  onApplySearch,
  onClearSearch,
  laptops,
}) {
  const autocompleteOptions = useMemo(() => {
    const fieldValues = laptops.map((laptop) => laptop[searchField]);
    return [...new Set(fieldValues)].sort();
  }, [laptops, searchField]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onApplySearch();
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
      <Autocomplete
        freeSolo
        value={searchValue}
        onInputChange={(event, newInputValue) => {
          if (event) onSearchChange({ target: { value: newInputValue } });
        }}
        options={autocompleteOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label={`Search by ${searchField}`}
            variant="outlined"
            onKeyDown={handleKeyDown}
          />
        )}
        sx={{ flex: 1 }}
      />
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Search By</InputLabel>
        <Select
          value={searchField}
          onChange={onSearchFieldChange}
          label="Search By"
        >
          {[
            { value: "id", label: "ID" },
            { value: "brand", label: "Brand" },
            { value: "model", label: "Model" },
            { value: "release_year", label: "Release Year" },
            { value: "display_size", label: "Display Size" },
            { value: "resolution", label: "Resolution" },
            { value: "processor", label: "Processor" },
            { value: "ram", label: "RAM" },
            { value: "storage", label: "Storage" },
            { value: "price", label: "Price" },
          ].map((field) => (
            <MenuItem key={field.value} value={field.value}>
              {field.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={onApplySearch}>
        Search
      </Button>
      <Button variant="outlined" onClick={onClearSearch}>
        Clear
      </Button>
    </Box>
  );
}

export default LaptopSearch;
