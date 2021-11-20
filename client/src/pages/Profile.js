import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import { Login } from 'utils/mutations';
import Nav from "components/Nav";
import { useMutation } from "@apollo/client";
import Auth from "utils/auth";
import { CREATE_PROFILE } from "utils/mutations";

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

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ImageUpload from "components/ImageUpload";
import MuiPhoneNumber from "material-ui-phone-number";
import { QUERY_USER } from "utils/queries";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    address: "",
    image: "",
    age: "",
    height: "",
    weight: "",
    bloodType: "",
    organDonor: "",
    pastSurgeries: "",
    pcpName: "",
    pcpAddress: "",
    emergencyContactName: "",
  });

  const [createProfile, { data, error }] = useMutation(CREATE_PROFILE, {refetchQueries: [{ query: QUERY_USER }]});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const { data } = await createProfile({
      variables: {
        profileInput: { ...formData },
      },
    });

    window.location.assign('/User')
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const containerStyle = { padding: 20, width: 280, margin: "20px auto" };
  const btnstyle = { margin: "8px 0" };

  return (
    <main>
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
                <h1 style={{ marginBottom: 10, color: "black" }}>
                  Profile Info
                </h1>
              </div>
            </div>
            <Container maxWidth="lg" style={containerStyle}>
              <Grid container spacing={2} justify="center" direction="row">
                <form onSubmit={handleFormSubmit}>
                  {" "}
                  <label style={{ color: "black", boxShadow: 10 }}>
                    Image Upload
                  </label>
                  <ImageUpload cardName="Input Image" />
                  <br />
                  <Grid item xs={12}>
                    <TextField
                      id="firstName"
                      label="First Name"
                      variant="outlined"
                      type="string"
                      name="firstName"
                      value={formData.firstName}
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
                      type="string"
                      name="lastName"
                      value={formData.lastName}
                      //  value={lastName}
                      onChange={handleChange}
                      fullWidth
                      required
                      autoComplete="lastName"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="string"
                      placeholder="address"
                      fullWidth
                      name="address"
                      variant="outlined"
                      onChange={handleChange}
                      value={formData.address}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  <br />
                  <Grid item xs={12}>
                    <InputLabel id="sex">Sex</InputLabel>
                    <Select
                      // type="string"
                      // value={formData.sex}
                      labelId="sex"
                      name="sex"
                      id="sex"
                      label="sex"
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Transgender Female"}>
                        Transgender Female
                      </MenuItem>
                      <MenuItem value={"Transgender Male"}>
                        Transgender Male
                      </MenuItem>
                      <MenuItem value={"Gender Variant/Non-Conforming"}>
                        Gender Variant/Non-Conforming
                      </MenuItem>
                      <MenuItem value={"Not Listed"}>Not listed</MenuItem>
                      <MenuItem value={"Prefer Not To Say"}>
                        Prefer not to say
                      </MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Bloodtype</InputLabel>
                    <Select
                      labelId="bloodtype"
                      name="bloodType"
                      // value={formData.bloodType}
                      id="bloodtype"
                      label="bloodtype"
                      // type="string"
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={"A+"}>A+</MenuItem>
                      <MenuItem value={"A-"}>A-</MenuItem>
                      <MenuItem value={"B+"}>B+</MenuItem>
                      <MenuItem value={"B-"}>B-</MenuItem>
                      <MenuItem value={"AB+"}>AB+</MenuItem>
                      <MenuItem value={"AB-"}>AB-</MenuItem>
                      <MenuItem value={"O+"}>O+</MenuItem>
                      <MenuItem value={"O-"}>O-</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Organ Donor</InputLabel>
                    <Select
                      labelId="organDonor"
                      name="organDonor"
                      // value={formData.organDonor}
                      id="organDonor"
                      label="organDonor"
                      // type="string"
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={"True"}>True</MenuItem>
                      <MenuItem value={"False"}>False</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Past Surgeries</InputLabel>
                    <Select
                      labelId="pastSurgeries"
                      name="pastSurgeries"
                      // value={formData.pastSurgeries}
                      id="pastSurgeries"
                      label="pastSurgeries"
                      // type="string"
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={"True"}>True</MenuItem>
                      <MenuItem value={"False"}>False</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Age</InputLabel>
                    <TextField
                      type="age"
                      fullWidth
                      name="age"
                      type="string"
                      variant="outlined"
                      value={formData.age}
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>PCP Name</InputLabel>
                    <TextField
                      type="pcpName"
                      fullWidth
                      name="pcpName"
                      variant="outlined"
                      type="string"
                      value={formData.pcpName}
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <InputLabel>PCP Phone Number</InputLabel>
                    <MuiPhoneNumber
                      name="pcpPhoneNumber"
                      defaultCountry={"us"}
                      // onChange={handleChange}
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <InputLabel>PCP Address</InputLabel>
                    <TextField
                      type="string"
                      fullWidth
                      name="pcpAddress"
                      value={formData.pcpAddress}
                      variant="outlined"
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="string"
                      placeholder="height"
                      fullWidth
                      name="height"
                      variant="outlined"
                      value={formData.height}
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="string"
                      placeholder="weight"
                      fullWidth
                      name="weight"
                      variant="outlined"
                      value={formData.weight}
                      onChange={handleChange}
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Emergency Contact Name</InputLabel>
                    <TextField
                      type="emergencyContactName"
                      fullWidth
                      name="emergencyContactName"
                      variant="outlined"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      type="string"
                      // value={this.state.password}
                      // onChange={(event) =>
                      // this.setState({[event.target.name]: event.target.value,})}
                      required
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <InputLabel>Emergency Contact Number</InputLabel>
                    <MuiPhoneNumber
                      name="emergencyContactNumber"
                      defaultCountry={"us"}
                      // onChange={handleChange}
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button-block"
                      style={btnstyle}
                      fullWidth
                      
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
