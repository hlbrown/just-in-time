import React from "react";
import Auth from "utils/auth";
import { Link } from "react-router-dom";
 
import Footer from 'components/Footer';
import Header from 'components/Header';
// import faviIconLogo from '../../assets/faviIconLogo.png';
// import Nav from 'components/Nav';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// images
import teenBabysitter from 'assets/teenBabysitter.jpg';
import primaryCaregiver from 'assets/primaryCaregiver.jpg';
import babysitter from 'assets/babysitter.jpg';
// import for card section
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// modal imports
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
// styles for the modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
     <main>
               {/* admin box */}
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
                                    <Card sx={{maxwidth: 345}}>
                                        <CardActionArea>
                                            <CardMedia 
                                            component="img" 
                                            height="200" 
                                            image={primaryCaregiver}
                                            alt="primaryCaregiver"
                                           
                                            />
                                            <CardContent>
                                                <Typography gutterButton variant="h5" component="div">Admin
                                                </Typography>
                                                <Typography variant="body-2" color="text.secondary">
                                                  <Button onClick={handleOpen}>Sign up or Login here
                                                  </Button>
                                                    <Modal
                                                       aria-labelledby="transition-modal-title"        aria-describedby="transition-modal-description"
                                                       open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}>
                                                         <Fade in={open}>
                                                           <Box sx={style}>
                                                             <Typography id="transition-modal-title" variant="h6" component="h2">
                                                               This portal is for admins only.
                                                             </Typography>
                                                             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                                               <Link to="/Login">← Go to Login</Link><br />
                                                               <Link to="/Signup">← Go to Signup</Link>
                                                             </Typography>
                                                           
                                                           </Box>
                                                         </Fade>
                                                    </Modal>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>                                    
                                </Box>                              
                              
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Box>Information about the admin portal</Box>                             
                            </Grid>
                            
                            
                        </Grid>
                    </Container>           
                </Box>
                {/* cargiver box */}
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 10 }}
                    bgcolor="text.secondary"
                    color="white"
                >
                    <Container maxWidth='lg'>
                        <Grid container direction="row" spacing={5}>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>some stuff about caregiver information </Box>
                            </Grid>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>
                                    <Card sx={{maxwidth: 345}}>
                                        <CardActionArea>
                                            <CardMedia 
                                            component="img" 
                                            height="200" 
                                            image={babysitter}
                                            alt="babysitter"
                                            />
                                            <CardContent>
                                                <Typography gutterButton variant="h5" component="div">Caregiver
                                                </Typography>
                                                <Typography variant="body-2" color="text.secondary">Sign up or Login here
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>                             
                            </Grid>
                           
                            
                        </Grid>
                    </Container>           
                </Box>
                {/* emergency information box */}
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 10 }}
                    bgcolor="text.secondary"
                    color="white"
                >
                    <Container maxWidth='lg'>
                        <Grid bgcolor="yellow"container direction="row" spacing={5}>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>Google Map</Box>
                            </Grid>
                            <Grid item border={2} item xs={12} sm={12} md={6}>
                                <Box>
                                    <Card sx={{maxwidth: 345}}>                                            
                                            <CardContent>
                                                <Typography gutterButton variant="h5" component="div">Closest Emergency Locations
                                                </Typography>
                                                <Typography variant="body-2" color="text.secondary">Police dept here
                                                </Typography><br />
                                                <Typography variant="body-2" color="text.secondary">Fire dept here
                                                </Typography><br />
                                                 <Typography variant="body-2" color="text.secondary">Hospital Info Here
                                                </Typography><br />
                                                <Typography variant="body-2" color="text.secondary">EMS Info Here
                                                </Typography><br />
                                            </CardContent>
                                      
                                    </Card>
                                </Box>
                            </Grid>
                           
                            
                        </Grid>
                    </Container>           
                </Box>
           </main> 
    
  );
};
export default Home;
