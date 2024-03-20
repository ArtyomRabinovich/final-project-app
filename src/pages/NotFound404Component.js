import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFound404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "86.2vh",
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h1" component="h2" gutterBottom>
          404
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button variant="contained" component={NavLink} to="/">
          Back to Homepage
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound404;
