import React from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import "index.css";
import newestLogo from '../../assets/newestLogo.png';
import newestLogo2 from '../../assets/newestLogo2.png';

import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Avatar } from "@material-ui/core";

import { ThemeProvider, createTheme } from '@mui/material/styles';

 
const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;


export default function Header(){

    return(
      <Box bgcolor="text.primary"
        px={{ xs: 1, sm: 1 }}
      py={{xs:1, sm:1}}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <SizedAvatar src={newestLogo2} sx={{ width: 300, height: 300 }}></SizedAvatar>

        </Grid>
      </Box>
    )

}