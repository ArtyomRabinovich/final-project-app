import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          component={NavLink}
          to="/"
        >
          <LaptopIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LaptopFinder
        </Typography>
        <Stack direction="row" spacing={5}>
          <Button color="inherit" component={NavLink} to="/">
            Homepage
          </Button>
          <Button color="inherit" component={NavLink} to="/About">
            About
          </Button>
          <Button color="inherit" component={NavLink} to="/Items">
            Items
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
