import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/HeaderComponent";
import Footer from "./components/Footer/FooterComponent";
import RoutesUtility from "./routes/routesUtility";
import { Box, CircularProgress, Container } from "@mui/material";

import { fetchAndStoreLaptops } from "./data/dataUtility";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchAndStoreLaptops();
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />{" "}
      </Container>
    );
  }

  return (
    <BrowserRouter>
      <Box sx={{ minHeight: "93vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <RoutesUtility />
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
