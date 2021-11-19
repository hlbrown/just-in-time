import React, {Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Login } from 'utils/mutations';
import Nav from 'components/Nav';
import { useMutation } from '@apollo/client';
import Auth from 'utils/auth';
import { CREATE_PROFILE } from 'utils/mutations';

import {
Button,
TextField,
Grid,
Container,
  Box,
  Select,
  FormControl,
  MenuItem,
InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ImageUpload from 'components/ImageUpload'
import MuiPhoneNumber from "material-ui-phone-number";





const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));


export default function CreateProfile() {
  const [formState, setFormState] = useState({
     firstName: '',
     lastName: '', 
     sex: '',
     address: '',
     image: '',
     age: '',
     height: '',
     weight: '',
     bloodType: '',
     organDonor: 'false',
     pastSurgeries: 'false',
     pcpName: '',
     pcpAddress: '',
     pcpPhoneNumber: '',
     emergencyContactName: '',
     emergencyContactNumber: ''
  });
  const [createProfile] = useMutation(CREATE_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await createProfile({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        sex: formState.sex,
        address: formState.address,
        image: formState.image,
        age: formState.age,
        height: formState.height,
        weight: formState.weight,
        bloodType: formState.bloodType,
        organDonor: formState.organDonor,
        pastSurgeries: formState.pastSurgeries,
        pcpName: formState.pcpName,
        pcpAddress: formState.pcpAddress,
        pcpPhoneNumber: formState.pcpPhoneNumber,
        emergencyContactName: formState.emergencyContactName,
        emergencyContactNumber: formState.emergencyContactNumber
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

 

  return (
    <main>
      <Nav/>

      <Box
       px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{
          justifyContent: "center",
          borderRadius: 4,
          justify:"center",
          bgcolor: "text.disabled",
          m: 1,
          p: 1,
        }}>
        <div
          className="signup"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10
          }}>
          <div
            style={{ width: "80%", textAlign: "center" }}>
            <h1 style={{ marginBottom: 10, color:"black"}}>Profile Info</h1>

          </div>
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
        <Box
         px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        maxWidth={400}
           
        sx={{
          borderRadius: 4,
          boxShadow: 10,
          bgcolor: "white",
          m: 1,
          p: 1,
          }}>
          <Container 
            maxWidth="lg">
        
        <Grid
          container
          spacing={2}
          justify="center"
          direction="row"
              ><form onSubmit={handleFormSubmit}
              >            <label style={{color:"black"}}>Image Upload</label>
                <ImageUpload cardName="Input Image" />
                <br />
                
                <Grid item xs={12}>
                  
                <TextField
                 id="firstName"
                 label="First Name"
                 variant="outlined"
                 type="text"
                 name="firstName"
                //  value={firstName}
                 onChange={handleChange}
                    fullWidth
                    required
                 autoComplete="firstName"
                  />
                  </Grid>
                 
                  <Grid item xs={12}>
                  
                   <TextField
                 id="lastName"
                 label="Last Name"
                 variant="outlined"
                 type="text"
                 name="lastName"
                //  value={lastName}
                 onChange={handleChange}
                    fullWidth
                    required
                 autoComplete="lastName"
               />
                  </Grid>
                    <Grid item xs={12} >
                     <TextField
                      type="address"
                      placeholder="address"
                      fullWidth
                      name="address"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                  </Grid>
                  <br />
                  <Grid item xs={12} >
                    <InputLabel id="sex">Sex</InputLabel>
                    <Select
                      labelId="sex"
                      id="sex"
                      label="sex"
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={'Male'}>Male</MenuItem>
                      <MenuItem value={'Female'}>Female</MenuItem>
                      <MenuItem value={'Transgender Female'}>Transgender Female</MenuItem>
                      <MenuItem value={'Transgender Male'}>Transgender Male</MenuItem>
                      <MenuItem value={'Gender Variant/Non-Conforming'}>Gender Variant/Non-Conforming</MenuItem>
                      <MenuItem value={'Not Listed'}>Not listed</MenuItem>
                      <MenuItem value={'Prefer Not To Say'}>Prefer not to say</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Bloodtype</InputLabel>
                    <Select
                    labelId="bloodtype"
                      id="bloodtype"
                      label="bloodtype"
                      fullWidth
                      onChange={handleChange}>
                      <MenuItem value={'A+'}>A+</MenuItem>
                      <MenuItem value={'A-'}>A-</MenuItem>
                      <MenuItem value={'B+'}>B+</MenuItem>
                      <MenuItem value={'B-'}>B-</MenuItem>
                      <MenuItem value={'AB+'}>AB+</MenuItem>
                      <MenuItem value={'AB-'}>AB-</MenuItem>
                      <MenuItem value={'O+'}>O+</MenuItem>
                      <MenuItem value={'O-'}>O-</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Organ Donor</InputLabel>
                    <Select
                    labelId="organDonor"
                      id="organDonor"
                      label="organDonor"
                      fullWidth
                      onChange={handleChange}>
                      <MenuItem value={'True'}>True</MenuItem>
                      <MenuItem value={'False'}>False</MenuItem>                      
                    </Select>
                  </Grid>
                    <Grid item xs={12}>
                    <InputLabel>Past Surgeries</InputLabel>
                    <Select
                    labelId="pastSurgeries"
                      id="pastSurgeries"
                      label="pastSurgeries"
                      fullWidth
                      onChange={handleChange}>
                      <MenuItem value={'True'}>True</MenuItem>
                      <MenuItem value={'False'}>False</MenuItem>                      
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                  <InputLabel>Age</InputLabel>
                     <TextField
                      type="age"
                      fullWidth
                      name="age"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                  </Grid>
                   <Grid item xs={12} >
                    <InputLabel>PCP Name</InputLabel>
                     <TextField
                      type="pcpName"
                      fullWidth
                      name="pcpName"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>PCP Phone Number</InputLabel>
                    <MuiPhoneNumber
                      name="pcpPhoneNumber"
                      defaultCountry={"us"}
                      // onChange={handleChange}
                    />
                  </Grid>
                
                  <Grid item xs={12} >
                    <InputLabel>PCP Address</InputLabel>
                     <TextField
                      type="pcpAddress"
                      fullWidth
                      name="pcpAddress"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                  </Grid>
                    <Grid item xs={12} >
                     <TextField
                      type="height"
                      placeholder="height"
                      fullWidth
                      name="height"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                  </Grid>
                    <Grid item xs={12} >
                     <TextField
                      type="weight"
                      placeholder="weight"
                      fullWidth
                      name="weight"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                  </Grid>
                   <Grid item xs={12} >
                    <InputLabel>Emergency Contact Name</InputLabel>
                     <TextField
                      type="emergencyContactName"
                      fullWidth
                      name="emergencyContactName"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                      />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Emergency Contact Number</InputLabel>
                    <MuiPhoneNumber
                      name="emergencyContactNumber"
                      defaultCountry={"us"}
                      // onChange={handleChange}
                    />
                  </Grid>
                  
                <Grid item xs={12}>
                     <Button
                    variant="contained"
                    
                     color=""
                     type="submit"
                     className="button-block"
                     >
                       Submit
                     </Button>
                 </Grid>
              </form>
          
        </Grid>
        </Container>
        </Box>
     
           </div>
      </Box>
    </main>
  );
  }

