import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import LaptopSearch from "./LaptopSearchComponent";

import {
  getStoredLaptops,
  sortStoredLaptops,
  filterStoredLaptops,
  searchLaptops,
} from "../../data/dataUtility";

const columns = [
  { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
  { field: "brand", headerName: "Brand", flex: 1, disableColumnMenu: true },
  { field: "model", headerName: "Model", flex: 1, disableColumnMenu: true },
  {
    field: "release_year",
    headerName: "Release Year",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "display_size",
    headerName: "Display Size",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "resolution",
    headerName: "Resolution",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "processor",
    headerName: "Processor",
    flex: 1,
    disableColumnMenu: true,
  },
  { field: "ram", headerName: "RAM", flex: 1, disableColumnMenu: true },
  { field: "storage", headerName: "Storage", flex: 1, disableColumnMenu: true },
  { field: "price", headerName: "Price", flex: 1, disableColumnMenu: true },
  {
    field: "ratings",
    headerName: "Average Rating",
    flex: 1,
    valueGetter: (params) =>
      `${params.row.ratings.average} (${params.row.ratings.count} reviews)`,
  },
];

function LaptopsList({ searchQuery }) {
  const navigate = useNavigate();
  const [laptops, setLaptops] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState("brand");
  const [sortModel, setSortModel] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filteredLaptops = searchLaptops(searchQuery);
      setLaptops(filteredLaptops);
    } else {
      const allLaptops = getStoredLaptops();
      setLaptops(allLaptops);
    }
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  const applySearch = () => {
    let result = getStoredLaptops();
    if (searchValue) {
      result = filterStoredLaptops(result, searchField, searchValue);
    }
    if (sortModel.length > 0) {
      const { field, sort } = sortModel[0];
      result = sortStoredLaptops(result, field, sort);
    }
    setLaptops(result);
  };

  const clearSearch = () => {
    setSearchValue("");
    setSortModel([]);

    let result = getStoredLaptops();
    setLaptops(result);
  };

  const handleSortModelChange = (model) => {
    setSortModel(model);
    applySearch();
  };

  return (
    <Box
      sx={{
        height: "63hv",
        width: "100%",
        boxShadow: 3,
        p: 2,
        backgroundColor: "background.paper",
        borderRadius: "8px",
      }}
    >
      <LaptopSearch
        searchField={searchField}
        onSearchFieldChange={handleSearchFieldChange}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onApplySearch={applySearch}
        onClearSearch={clearSearch}
        laptops={laptops}
      />
      <DataGrid
        rows={laptops}
        columns={columns}
        pageSize={5}
        autoPageSize={true}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.id}
        onRowClick={(params) => navigate(`/ItemDetails/${params.id}`)}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        sx={{
          height: "63vh",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          },
          "& .MuiDataGrid-cell": {
            color: "text.primary",
          },
          "& .MuiDataGrid-pagination": {
            backgroundColor: "secondary.light",
            color: "secondary.contrastText",
            "& .MuiPaginationItem-root": {
              color: "secondary.contrastText",
            },
          },
        }}
      />
    </Box>
  );
}

export default LaptopsList;
