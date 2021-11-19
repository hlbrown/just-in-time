import React, { Component } from "react";
import { Link } from "react-router-dom";

import Testimonial from "components/Testimonial";

import GoogleMap from "components/GoogleMap";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// images
import teenBabysitter from "assets/teenBabysitter.jpg";
import primaryCaregiver from "assets/primaryCaregiver.jpg";
import babysitter from "assets/babysitter.jpg";
import caregiver from "assets/caregiver.png";
import parentOrguradian from "assets/parentOrguradian.png";

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
import { makeStyles } from "@material-ui/core/styles";

// styles for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "4px solid 	#808080",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // button style

const useStyles = makeStyles({
  button: {
    backgroundColor: "#3c52b2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
});
 const classes = useStyles();
  return (
    <main>
      {/* Mission Statement */}
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{
          borderRadius: 4,
          bgcolor: "text.disabled",
          m: 1,
          p: 1,
        }}
      >
        <Typography align="center" id="mission" variant="h4" color="black">
          Just In Time's mission is to help parents and/or guardians securely &
          efficiently create and share emergency information for their loved
          ones via a web application portal in a few clicks!
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
          p: 1,
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
                    border: "2px solid 	#808080",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        maxwidth: 345,
                        borderRadius: 4,
                        boxShadow: 10,
                      }}
                      component="img"
                      height="220"
                      image={parentOrguradian}
                      alt="primaryCaregiver"
                    />
                    <CardContent sx={{ justifyContent: "center" }}>
                      <Typography
                        align="center"
                        gutterbutton
                        variant="h4"
                        component="div"
                      >
                        Admin
                        <Button
                          color="primary"
                          onClick={handleOpen}
                          className={classes.button}
                        >
                          Sign up or Login here
                        </Button>
                      </Typography>

                      <Box
                        sx={{
                          borderRadius: 4,
                          boxShadow: 10,
                          bgcolor: "text.disabled",
                          m: 1,
                          p: 1,
                        }}
                      >
                        The Parent/Guardian Portal is used to create a shareable
                        end user/patient profile for your loved one
                      </Box>
                      <Typography
                        align="center"
                        variant="body-2"
                        color="text.secondary"
                      >
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
                                This portal is for parents/guardians only.
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

            {/* cargiver box */}
            <Grid item xs={12} sm={12} md={6}>
              {" "}
              <Box>
                <Card
                  sx={{
                    maxwidth: 345,
                    borderRadius: 4,
                    boxShadow: 10,
                    m: 1,
                    p: 1,
                    border: "2px solid 	#808080",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        maxwidth: 325,
                        borderRadius: 4,
                        boxShadow: 10,
                      }}
                      component="img"
                      height="60"
                      image={caregiver}
                      alt="caregiver"
                    />
                    <CardContent sx={{ justifyContent: "center" }}>
                      <Typography
                        align="center"
                        gutterbutton
                        variant="h4"
                        component="div"
                      >
                        Caregiver{" "}
                        <Button color="primary" onClick={handleOpen}>
                          Sign up or Login here
                        </Button>
                      </Typography>
                      <Box
                        justifyContent="center"
                        color="black"
                        sx={{
                          borderRadius: 4,
                          boxShadow: 10,
                          bgcolor: "text.disabled",
                          m: 1,
                          p: 1,
                        }}
                      >
                        The Carer Portal authorizes caretakers to view an end
                        user/patient profile
                      </Box>
                      <Typography
                        align="center"
                        variant="body-2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* 
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
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
          <Grid container direction="row" spacing={5}>
            <Grid item border={2} item xs={12} sm={12} md={6}></Grid>

            <Grid item border={2} item xs={12} sm={12} md={6}></Grid>
          </Grid>
        </Container>
      </Box>

      {/* emergency information box */}
      {/*     <Box
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
                  maxwidth: 568,
                  maxheight: 301,
                  borderRadius: 4,
                  boxShadow: 10,
                  m: 1,
                }}
              >

                <GoogleMap />

                
                <CardContent sx={{ justifyContent: "center" }}>
                  <Typography
                    align="center"
                    gutterbutton
                    variant="h5"
                    component="div"
                  >
                    {" "}
                    Nearest Emergency Locations
                  </Typography>
                </CardContent>
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
                    m: 9,
                    p: 1,
                  }}
                >
                  <CardContent sx={{ justifyContent: "center" }}>
                    <Typography
                      color="white"
                      align="center"
                      gutterbutton
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
      */}

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
      >
        <Testimonial />
      </Box>
    </main>
  );
};

export default Home;
