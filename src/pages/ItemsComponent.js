import React from "react";
import { useLocation } from "react-router-dom";
import LaptopsList from "../components/Laptops/LaptopListComponent";
import { Box, Stack, Typography } from "@mui/material";

function ItemsPage() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 4 }}
    >
      <Stack spacing={2} alignItems="center" sx={{ width: "90%" }}>
        <Typography variant="h3" textAlign="center" sx={{ mt: 4 }}>
          Laptops
        </Typography>
        <LaptopsList searchQuery={query} />
      </Stack>
    </Box>
  );
}

export default ItemsPage;
