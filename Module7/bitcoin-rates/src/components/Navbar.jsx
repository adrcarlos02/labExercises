import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu Icon
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer visibility

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Bitcoin Rates", path: "/bitcoin-rates" },
    { name: "Posts", path: "/posts" },
    { name: "Pokémon", path: "/pokemon" },
  ];

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: 2 }}> {/* Added margin */}
            Module 7 Exercise
          </Typography>
        </Box>
      </Toolbar>

      {/* Drawer for collapsible navbar */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((link) => (
            <ListItem button key={link.name} onClick={toggleDrawer(false)}>
              <ListItemText primary={
                <Button component={NavLink} to={link.path} color="inherit" style={{ width: '100%', textAlign: 'left' }}>
                  {link.name}
                </Button>
              } />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;