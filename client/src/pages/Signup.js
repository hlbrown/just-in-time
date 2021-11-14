import React, {Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Login } from 'utils/mutations';
import { useMutation } from '@apollo/client';
// import Auth from 'utils/auth';
// import { ADD_USER } from 'utils/mutations';

import {
Button,
TextField,
Grid,
Paper,
// AppBar,
Typography,
// Toolbar,
Container,
Box,
} from "@material-ui/core";

import { DatePicker } from "@material-ui/pickers";

import ImageUpload from 'components/ImageUpload'
import MuiPhoneNumber from "material-ui-phone-number";


export default function Signup(props) {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [addUser] = useMutation(ADD_USER);

  // const handleFormSubmit = async (event) => {
  //   // event.preventDefault();
  //   const mutationResponse = await addUser({
  //     variables: {
  //       email: formState.email,
  //       password: formState.password,
  //       firstName: formState.firstName,
  //       lastName: formState.lastName,
  //       phoneNumber: formState.phoneNumber,
  //       photo: formState.photo,
  //       dob: formState.dob,
  //       caregiver: formState.caregiver,
  //       admin: formState.admin
        
  //     }
  // //   });
  //   // const token = mutationResponse.data.addUser.token;
  //   // Auth.login(token);
  // // };

  // // const handleChange = (event) => {
  // //   const { name, value } = event.target;
  // //   setFormState({
  // //     ...formState,
  // //     [name]: value,
  // //   });
  //  };
  const [selectedDate, handleDateChange] = useState(new Date());
  const galleryImageList = [
  "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
  "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
  "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
];

  return (
       <div>
      <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}>
      <Grid 
      container 
      spacing={0} 
      justify="center" 
      direction="row">
        <Grid item>
          <Grid 
          container 
          direction="column" 
          justify="center" 
          spacing={2} 
          className="login-form">
            <Paper 
            variant="elevation"
            elevation={2}
            className="login-background"
            >
              <Grid item>
                <Typography 
                component="h1" 
                variant="h5">
                  Signup
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Grid 
                  container 
                  direction="column" 
                  spacing={2}>
                      <Grid item xs={12}>
                      <TextField
                        type="firstName"
                        placeholder="First Name"
                        fullWidth
                        name="firstName"
                        variant="outlined"
                        // value={this.state.email}
                        // onChange={(event) =>
                        // this.setState({[event.target.name]: event.target.value,})}
                        required
                        autofocus
                        />
                    </Grid><Grid item xs={12}>
                      <TextField
                        type="lastName"
                        placeholder="Last Name"
                        fullWidth
                        name="lastName"
                        variant="outlined"
                        // value={this.state.email}
                        // onChange={(event) =>
                        // this.setState({[event.target.name]: event.target.value,})}
                        required
                        autofocus
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2021-05-24"
                      />
                    </Grid>
                     <Grid item xs={12} md={6}>
                      <MuiPhoneNumber
                      name="phone"
                      label="Phone Number"
                      defaultCountry={"us"}
                      // value={this.state.phone}
                      // onChange={this.handlePhoneChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      variant="outlined"
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <label>Profile Image
                      </label>
                    <ImageUpload 
                    cardName="Input Image"/>
                    </Grid>
                    <Grid item>
                      <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button-block"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid> 
                  </form> 
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>                
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
  }

