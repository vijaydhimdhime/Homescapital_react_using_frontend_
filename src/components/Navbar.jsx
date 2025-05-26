import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar({ isLoggedIn, onLogin, onLogout }) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>

        {!isLoggedIn ? (
          <>
            <Button color="inherit" onClick={() => onLogin("login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => onLogin("register")}>
              Register
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
