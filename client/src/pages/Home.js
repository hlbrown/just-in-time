import React from "react";
import Auth from "utils/auth";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import Testimonial from "components/Testimonial";
import Header from "components/Header";
// import GoogleMapsContainer from 'components/GoogleMaps';
// import Map from 'components/GoogleMaps';
// import GoogleApiWrapper from 'components/GoogleMaps';
// import faviIconLogo from '../../assets/faviIconLogo.png';

// import Nav from 'components/Nav';
import GoogleMap from 'components/GoogleMap';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//https://mui.com/system/borders/ imported for card borders
//https://mui.com/system/shadows/ imported for card shadows
import { borders, shadows } from "@mui/system";

import { Paper } from "@material-ui/core";

// images
import teenBabysitter from "assets/teenBabysitter.jpg";
import primaryCaregiver from "assets/primaryCaregiver.jpg";
import babysitter from "assets/babysitter.jpg";
// import for card section
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// modal imports
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

// styles for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <main>
      {/* Mission Statement */}
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{
          justifyContent: "center",
          borderRadius: 4,
          bgcolor: "text.disabled",
          m: 1,
          p: 1
        }}
      >
        <Typography id="mission" variant="h3">
          Our mission is to help parents and/or guardians to securely, and
          efficiently create and share emergency information for their loved
          ones via a web application portal in under 5 clicks!!
        </Typography>
      </Box>
      {/* admin box */}
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{
          borderRadius: 4,
          boxShadow: 10,
          bgcolor: "text.disabled",
          m: 1,
          p: 1
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="row" spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Card
                  sx={{
                    maxwidth: 345,
                    borderRadius: 4,
                    boxShadow: 10,
                    m: 1,
                    p: 1,
                    border: 1
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        maxwidth: 345,
                        borderRadius: 4,
                        boxShadow: 10
                      }}
                      component="img"
                      height="200"
                      image={primaryCaregiver}
                      alt="primaryCaregiver"
                    />
                    <CardContent sx={{ justifyContent: "center" }}>
                      <Typography
                        align="center"
                        gutterButton
                        variant="h5"
                        component="div"
                      >
                        Admin
                      </Typography>
                      <Typography
                        align="center"
                        variant="body-2"
                        color="text.secondary"
                      >
                        <Button color="primary" onClick={handleOpen}>
                          Sign up or Login here
                        </Button>
                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{ timeout: 500 }}
                        >
                          <Fade in={open}>
                            <Box sx={style}>
                              <Typography
                                id="transition-modal-title"
                                variant="h4"
                                component="h2"
                              >
                                This portal is for admins only.
                              </Typography>
                              <Typography
                                id="transition-modal-description"
                                sx={{ mt: 2 }}
                              >
                                <Link to="/Login">← Go to Login</Link>
                                <br />
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
              <Box
                sx={{
                  borderRadius: 4,
                  boxShadow: 10,
                  bgcolor: "text.disabled",
                  m: 1,
                  p: 1
                }}
              >
                Information about the admin portal
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* cargiver box */}
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        color="white"
        sx={{
          borderRadius: 4,
          boxShadow: 10,
          bgcolor: "text.disabled",
          m: 1,
          p: 1
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="row" spacing={5}>
            <Grid item border={2} item xs={12} sm={12} md={6}>
              <Box
                color="white"
                sx={{
                  borderRadius: 4,
                  boxShadow: 10,
                  bgcolor: "text.disabled",
                  m: 1,
                  p: 1
                }}
              >
                some stuff about caregiver information
              </Box>
            </Grid>

            <Grid item border={2} item xs={12} sm={12} md={6}>
              <Box>
                <Card
                  sx={{
                    maxwidth: 345,
                    borderRadius: 4,
                    boxShadow: 10,
                    m: 1,
                    p: 1,
                    border: 1
                  }}
                >
                  <CardActionArea>
                    <CardMedia sx={{
                        maxwidth: 345,
                        borderRadius: 4,
                        boxShadow: 10
                      }}
                      component="img"
                      height="200"
                      image={babysitter}
                      alt="babysitter"
                    />
                    <CardContent sx={{ justifyContent: "center" }}>
                      <Typography
                        align="center"
                        gutterButton
                        variant="h4"
                        component="div"
                      >
                        Caregiver
                      </Typography>
                      <Typography
                        align="center"
                        variant="body-2"
                        color="text.secondary"
                      >
                        <Button color="primary" onClick={handleOpen}>
                          Sign up or Login here
                        </Button>
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
        sx={{
          borderRadius: 4,
          boxShadow: 10,
          bgcolor: "text.disabled",
          m: 1,
          p: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid bgcolor="yellow" container direction="row" spacing={5}>
            <Grid item border={2} item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  maxwidth: 345,
                  borderRadius: 4,
                  boxShadow: 10,
                  m: 1,
                  p: 1,
                  border: 1,
                }}
              >
                <Card sx={{ maxwidth: 345 }}>
                  <CardContent sx={{
                        maxwidth: 345,
                        borderRadius: 4,
                        boxShadow: 10
                      }}>
                    <GoogleMap/>
                    {/* <MyComponent/> */}
                    {/* <GoogleApiWrapper/> */}
                  </CardContent>

                  <CardContent sx={{ justifyContent: "center" }}>
                    <Typography
                      align="center"
                      gutterButton
                      variant="h5"
                      component="div"
                    >
                      Nearest Emergency Locations
                    </Typography>
                    </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item border={2} item xs={12} sm={12} md={6}>
              <Box color="white">
                <Card
                  px={{ xs: 3, sm: 10 }}
                  py={{ xs: 5, sm: 10 }}
                  bgcolor="text.secondary"
                  sx={{
                    borderRadius: 4,
                    boxShadow: 10,
                    bgcolor: "text.disabled",
                    m: 1,
                    p: 1,
                  }}
                >
                  <CardContent sx={{ justifyContent: "center" }}>
                    <Typography
                      color="white"
                      align="center"
                      gutterButton
                      variant="h4"
                      component="div"
                    >
                      Closest Emergency Locations
                    </Typography>
                    <Typography color="white" variant="body-1">
                      Police dept here
                    </Typography>
                    <br />
                    <Typography color="white" variant="body-1">
                      Fire dept here
                    </Typography>
                    <br />
                    <Typography color="white" variant="body-1">
                      Hospital Info Here
                    </Typography>
                    <br />
                    <Typography color="white" variant="body-1">
                      EMS Info Here
                    </Typography>
                    <br />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonial carousel */}
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{
          justifyContent: "center",
          borderRadius: 4,
          boxShadow: 10,
          bgcolor: "text.disabled",
          m: 1,
          p: 1,
        }}
      > <Testimonial/>
        
      </Box>
    </main>
  );
};

export default Home;
