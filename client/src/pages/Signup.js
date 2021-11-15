import React, {Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Login } from 'utils/mutations';
import Nav from 'components/Nav';
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
import { makeStyles } from "@material-ui/core/styles";


import { DatePicker } from "@material-ui/pickers";

import ImageUpload from 'components/ImageUpload'
import MuiPhoneNumber from "material-ui-phone-number";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));


export default function Signup() {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [addUser] = useMutation(ADD_USER);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
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
  //   });
  //   // const token = mutationResponse.data.addUser.token;
  //   // Auth.login(token);
  // // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
    // setFormState({
    //   ...formState,
    //   [name]: value,
    // });
    // setBloodType(
    // typeof value === 'string' ? value.split(',') : value,
  // );
  //  };
  const classes = useStyles();
   const [profile, setProfile] = React.useState({
   firstName: "",
   lastName: "",
  //  birthdate: "",
  // phoneNumber:"",
  // email:"",
  // password:"",
  // age: 0,
  // sex: "",
   image: "",
  bloodType:"",
});
const { 
   firstName,
   lastName, 
  //  birthdate, 
  // phoneNumber,
  // email,
  // password,
  // age,
  // sex,
   image,
  bloodtype
} = profile;

 
  const handleChange = (e) => {
 
    setProfile({ ...profile, [e.target.name]: e.target.value });
};
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <Nav />
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
              spacing={2}
              justify="center"
              direction="column">
              <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
              >
                <Grid item>
                  <Typography
                  component="h1"
                  variant="h5">
                    Sign Up
                  </Typography>
                </Grid>
                <Grid
                container
                direction="column"
                spacing={2}>
                  <Grid item xs={12}>
                    <label>Profile Image
                     </label>
                   <ImageUpload 
                     cardName="Input Image"/>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel id="bloodtype">Bloodtype</InputLabel>
                 <Select
                 labelId="bloodtype"
                 name="bloodtype"
                 id="bloodtype"
                 value={bloodtype}
                 onChange={handleChange}
                >
                  <MenuItem value={'A+'}>A+</MenuItem>                     
                  <MenuItem value={'A-'}>A-</MenuItem>
                  <MenuItem value={'B+'}>B+</MenuItem>
                  <MenuItem value={'B-'}>B-</MenuItem>
                  <MenuItem value={'AB+'}>AB+</MenuItem>
                  <MenuItem value={'AB-'}>AB-</MenuItem>
                  <MenuItem value={'O-'}>O-</MenuItem>
                  <MenuItem value={'O+'}>O+</MenuItem>
                </Select>
              </FormControl>
              <TextField
        id="firstName"
        label="First Name"
        variant="outlined"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        fullWidth
        autoComplete="firstName"
      />
         <TextField
        id="lastName"
        label="Last Name"
        variant="outlined"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        fullWidth
        autoComplete="lastName"
      />
              </Grid>
              </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      >
        <Grid
          container 
          spacing={0} 
          justify="center" 
          direction="row">
           <Grid item>
              <Grid
              container
              spacing={2}
              justify="center"
              direction="column">
              <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
              >
                 <Grid item>
                  <Typography
                  component="h1"
                  variant="h5">
                    Demographics
                  </Typography>
                  <Grid item xs={12}>
                        <TextField
        id="birthdate"
        variant="outlined"
        type="date"
        name="birthdate"
        value={new Date()}
        onChange={handleChange}
        fullWidth
      />
                  </Grid>
                </Grid>

              </Paper>
              </Grid>
            </Grid>
        </Grid>
      </Box>


    </div>
    //    <div>
    //        fullWidth
    //                     name="firstName"
    //                     variant="outlined"
    //                     // value={this.state.email}
    //                <Box
    //   px={{ xs: 3, sm: 10 }}
    //   py={{ xs: 5, sm: 10 }}>
    //   <Grid 
    //   container 
    //   spacing={0} 
    //   justify="center" 
    //   direction="row">
    //     <Grid item>
    //       <Grid 
    //       container 
    //       direction="column" 
    //       justify="center" 
    //       spacing={2} 
    //       className="login-form">
    //         <Paper 
    //         variant="elevation"
    //         elevation={2}
    //         className="login-background"
    //         >
    //           <Grid item>
    //             <Typography 
    //             component="h1" 
    //             variant="h5">
    //               Signup
    //             </Typography>
    //           </Grid>
    //           <Grid item>
    //             <form>
    //               <Grid 
    //               container 
    //               direction="column" 
    //               spacing={2}>
    //                   <Grid item xs={12}>
    //                   <TextField
    //                     type="firstName"
    //                     placeholder="First Name"
    //                     // onChange={(event) =>
    //                     // this.setState({[event.target.name]: event.target.value,})}
    //                     required
    //                     autofocus
    //                     />
    //                 </Grid><Grid item xs={12}>
    //                   <TextField
    //                     type="lastName"
    //                     placeholder="Last Name"
    //                     fullWidth
    //                     name="lastName"
    //                     variant="outlined"
    //                     // value={this.state.email}
    //                     // onChange={(event) =>
    //                     // this.setState({[event.target.name]: event.target.value,})}
    //                     required
    //                     autofocus
    //                     />
    //                 </Grid>
    //                 <Grid item xs={12} md={6}>
    //                   <TextField
    //                   id="date"
    //                   label="Birthday"
    //                   type="date"
    //                   defaultValue="2021-05-24"
    //                   />
    //                 </Grid>
    //                  <Grid item xs={12} md={6}>
    //                   <MuiPhoneNumber
    //                   name="phone"
    //                   label="Phone Number"
    //                   defaultCountry={"us"}
    //                   // value={this.state.phone}
    //                   // onChange={this.handlePhoneChange}
    //                   />
    //                 </Grid>
                    
    //                 <Grid item xs={12}>
    //                   <TextField
    //                   name="email"
    //                   type="email"
    //                   placeholder="Email"
    //                   autoComplete="email"
    //                   fullWidth
    //                   variant="outlined"
    //                   required

    //                   />
    //                   <TextField
    //                   type="password"
    //                   placeholder="Password"
    //                   fullWidth
    //                   name="password"
    //                   variant="outlined"
    //                   // value={this.state.password}
    //                   // onChange={(event) =>
    //                   // this.setState({[event.target.name]: event.target.value,})}
    //                   required
    //                   />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                   <label>Profile Image
    //                   </label>
    //                 <ImageUpload 
    //                 cardName="Input Image"/>
    //                 <FormControl fullWidth>
    //                   <InputLabel id="bloodtype">Blood Type</InputLabel>
    //                   <Select
    //                   name="bloodtype"
    //                   value={bloodtype}
    //                   label="bloodtype"
    //                   onChange={handleInputChange}
    //                   >
    //                     <MenuItem value={bloodtype}>A+</MenuItem>
    //                     <MenuItem value={bloodtype}>A-</MenuItem>
    //                     <MenuItem value={bloodtype}>B+</MenuItem>
    //                     <MenuItem value={bloodtype}>B-</MenuItem>
    //                     <MenuItem value={bloodtype}>AB+</MenuItem>
    //                     <MenuItem value={bloodtype}>AB-</MenuItem>
    //                     <MenuItem value={bloodtype}>O+</MenuItem>
    //                     <MenuItem value={bloodtype}>O-</MenuItem>
    //                   </Select>
    //                 </FormControl>
    //                 </Grid>
    //                 <Grid item>
    //                   <Button
    //                   variant="contained"
    //                   color="secondary"
    //                   type="submit"
    //                   className="button-block"
    //                   >
    //                     Submit
    //                   </Button>
    //                 </Grid>
    //               </Grid> 
    //               </form> 
    //           </Grid>
    //           <Grid item>
    //             <Link href="#" variant="body2">
    //               Forgot Password?
    //             </Link>
    //           </Grid>                
    //         </Paper>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Box>
    // </div>
  );
  }

