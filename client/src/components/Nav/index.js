import React from "react";

import Box from "@material-ui/core/Box";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";



export default function Nav() {
  

  return (
    <nav>
      <Box bgcolor="text.secondary" sx={{ flexGrow: 1 }}>
        <AppBar color="inherit" position="static">
          <Toolbar>
            <IconButton
              size="large"
              // image width and height needs to be set to bypass this error https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=lr#images-without-dimensions
              // width="500"
              // height="500"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              // fixed accessibility error : Missing alternative text Image alternative text is not present as per https://wave.webaim.org/report#/https://project-3-just-in-time.herokuapp.com/
              alt="logo"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
         
          </Toolbar>
        </AppBar>
      </Box>
    </nav>


  );
}
