import React from "react";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/Search/SearchBarComponent";

function Homepage() {
  return (
    <Box>
      <Container
        maxWidth="sm"
        sx={{
          pt: 8,
          pb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            textAlign="center"
          >
            LaptopFinder
          </Typography>
          <Typography variant="h5" gutterBottom textAlign="center">
            Developed by: Artyom Rabinovich
          </Typography>
          <SearchBar />
          <Button
            variant="contained"
            color="primary"
            component={NavLink}
            to="/Items"
          >
            View Items
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Homepage;
