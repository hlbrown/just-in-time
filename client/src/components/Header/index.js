import React from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import "index.css";
import newestLogo from '../../assets/newestLogo.png';
import newestLogo2 from '../../assets/newestLogo2.png';


export default function Header(){

    return(
         <Box
        px={{ xs: 1, sm: 1 }}
        py={{ xs: 1, sm: 1 }}
        bgcolor="text.primary" color="white">
                <Container maxWidth='lg'>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            
              <Box textAlign="center">
                <img src={newestLogo} style={{ maxWidth: 400, pt: 1}}alt="logo"></img>
              </Box>
            
          </Grid>
        </Container>
      </Box>
    )

}