import React from "react";
import {
  Container,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";

function AboutPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Container sx={{ mt: 8, mb: 8 }}>
        <Typography variant={matches ? "h2" : "h3"} component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h6" paragraph>
          Welcome to my website! I am passionate about laptops, dedicated to
          bringing you the most accurate laptop information that caters to your
          needs and interests.
        </Typography>
        <Typography variant="h6" paragraph>
          My choice to focus on laptops stems from personal experience with
          difficulties of choosing and buying a laptop. I believe that tech
          product information should be readily available and easy to understand
          for everybody, not just the tech savvy people. I strive to reflect
          this in this project.
        </Typography>
        <Stack direction="row" spacing={2} marginTop={2}>
          <Button
            variant="contained"
            color="primary"
            aria-label="Contact"
            href="mailto:artyomrabinovich@gmail.com"
          >
            Contact Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutPage;
