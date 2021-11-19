import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import { Login } from 'utils/mutations';
import Nav from "components/Nav";
import { useMutation } from "@apollo/client";
import Auth from "utils/auth";
import { ADD_USER } from "utils/mutations";

import { Button, TextField, Grid, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ImageUpload from "components/ImageUpload";
import MuiPhoneNumber from "material-ui-phone-number";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Signup() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        phoneNumber: formState.phoneNumber,
        photo: formState.photo,
        // dob: formState.dob,
        // caregiver: formState.caregiver,
        // admin: formState.admin
      },
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

     const containerStyle={padding :20 ,width:280, margin:"20px auto"}
 const btnstyle={margin:'8px 0'}

  return (
    <main>
      <Nav />

     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        sx={{
          justifyContent: "center",
          borderRadius: 4,
          justify: "center",
          bgcolor: "text.disabled",
          m: 1,
          p: 1,
        }}
      > 
       <div style={{ display: "flex", justifyContent: "center" }}>
          <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor="text.secondary"
            color="white"
            maxWidth={500}
            sx={{
              borderRadius: 4,
              boxShadow: 10,
              bgcolor: "white",
               
              m: 1,
              p: 1,
            }}
          >
          <div
          className="signup"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div style={{ width: "80%", textAlign: "center" }}>
            <h1 style={{ marginBottom: 10, color: "black" }}>Sign Up</h1>
          </div>
        </div>
            <Container maxWidth="lg" style={containerStyle}>
              <Grid container spacing={2} justify="center" direction="row">
                <form onSubmit={handleFormSubmit}> 
                  <label style={{ color: "black", boxShadow: 10 }}>Image Upload</label>
                  <ImageUpload cardName="Input Image" />
                  <br />
                  <Grid container item xs={12} >
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
                  <Grid  container item xs={12} >
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
                  <br />
                  <Grid container item xs={12} >
                    <MuiPhoneNumber
                      name="phoneNumber"
                      label="Phone Number"
                      // onChange={handleChange}
                      defaultCountry={"us"}
                    />
                  </Grid>
                  <Grid container item xs={12} >
                    <TextField
                      name="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      fullWidth
                      onChange={handleChange}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid  container item xs={12} >
                    <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  <Grid container item xs={12} >
                     <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                          style={btnstyle} fullWidth>
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
