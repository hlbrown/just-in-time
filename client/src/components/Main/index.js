import React from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import teenBabysitter from 'assets/teenBabysitter.jpg';
import primaryCaregiver from 'assets/primaryCaregiver.jpg';




export default function Main() {
    
  
        return (
           <main>
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 10 }}
                    bgcolor="text.secondary"
                    color="white"
                >
                    <Container  maxWidth='lg'>
                        <Grid container direction="row" spacing={5}>
                            
                            <Grid item xs={12} sm={12} md={6}>
                                <Box>
                                    <Link>Admin Portal</Link>
                                    
                                </Box>
                                <img src={primaryCaregiver} alt="admin or primary caregiver"/>
                              

                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Box><Link>Information about the admin portal</Link></Box>
                              

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
                        <Grid bgcolor="yellow"container direction="row" spacing={5}>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>some stuff about caregiver information </Box>

                            </Grid>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>Caregiver Portal </Box>
                                <img src={teenBabysitter} className="caregiverImg"/>

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
                        <Grid bgcolor="yellow"container direction="row" spacing={5}>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>Local Emergency Departments</Box>

                            </Grid>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>Google Map</Box>

                            </Grid>
                           
                            
                        </Grid>
                    </Container>           
                </Box>
           </main>             
           

        )
            
    }
  