import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Login } from 'utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from 'utils/auth';
import { ADD_USER } from 'utils/mutations';

import {
Button,
TextField,
Grid,
Paper,
AppBar,
Typography,
Toolbar,
Container,
Box,
} from "@material-ui/core";

import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";


function Signup(props) {
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
                    <Grid item xs={12}>
                      {/* <KeyBoardDatePicker
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      label="with Keyboard"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      // onChange={handleChange}
                      /> */}
                       
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

export default Signup;
