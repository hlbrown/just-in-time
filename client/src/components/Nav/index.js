import React from "react";
// import Auth from "utils/auth";

// import AccountCircle from "@mui/icons-material/AccountCircle";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormGroup from "@mui/material/FormGroup";
// import MenuItem from "@mui/material/MenuItem";
// import faviIconLogo from "../../assets/faviIconLogo.png";

// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";

// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import { text } from "dom-helpers;
// import { Menu } from "@mui/material";


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
