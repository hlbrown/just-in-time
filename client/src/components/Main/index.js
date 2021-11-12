import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';



export default function Main() {
    
  
        return (
           <main>
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 10 }}
                    bgcolor="text.secondary"
                    color="white"
                >
                    <Container maxWidth='lg'>
                        <Grid container spacing={5}>
                            <Grid border={2} item xs={12} sm={12}>
                                <Box>Admin Portal</Box>

                            </Grid>
                             <Grid item xs={12} sm={12}>
                                <Box>Caregiver Portal</Box>

                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box>Emergency Information / Map</Box>

                            </Grid> 
                        </Grid>
                    </Container>           
                </Box>
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 10 }}
                    bgcolor="text.secondary"
                    color="white"
                >
                    <Container maxWidth='lg'>
                        <Grid container spacing={5}>
                            <Grid border={2} item xs={12} sm={12}>
                                <Box>Admin Portal</Box>

                            </Grid>
                             <Grid item xs={12} sm={12}>
                                <Box>Caregiver Portal</Box>

                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box>Emergency Information / Map</Box>

                            </Grid> 
                        </Grid>
                    </Container>           
                </Box>
           </main>             
           

        )
            
    }
  