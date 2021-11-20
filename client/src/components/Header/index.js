import React from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import "index.css";

import newestLogo from '../../assets/newestLogo.png';


export default function Header(){

    return(
         <Box
        px={{ xs: 1, sm: 2 }}
        py={{ xs: 1, sm: 2 }}
        bgcolor="text.primary" color="white">
                <Container maxWidth='lg'>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item >
              <Box textAlign="center" pt={{xs: 1, sm:0}} pb={{xs:1, sm:0}}>
                <img src={newestLogo} style={{maxWidth: 300}}alt="logo"></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )

}