import React, {  useState } from "react";
// import { Link } from "react-router-dom";
// import { Login } from 'utils/mutations';
// import Nav from "components/Nav";

import { useMutation } from "@apollo/client";
import Auth from "utils/auth";
import { ADD_USER } from "utils/mutations";
import { ADD_MEDICATION } from "utils/mutations";
import { QUERY_USER } from "utils/queries";
import {  
    Button,
    TextField,
    Grid,
    Container,
    Box,
    Select,
    FormControl,
    MenuItem,
    InputLabel,} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

import ImageUpload from "components/ImageUpload";
import MuiPhoneNumber from "material-ui-phone-number";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export default function AddMedication() {
    const [formData, setFormData] = useState({    
        name: "", 
        brand: "",
        prescription: "",
        otc: "",
        dose: "",
        interactions: "",
    });
  
    const [addMedication, { data, error }] = useMutation(ADD_MEDICATION, {refetchQueries: [{ query: QUERY_USER }]});

    const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const { data } = await addMedication({
        variables: {
            medicationInput: { ...formData},
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

        const containerStyle={padding :20 ,width:280, margin:"20px auto"}
        const btnstyle={margin:'8px 0'}

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
            <h1 style={{ marginBottom: 10, color: "black" }}>Medication Information</h1>
          </div>
        </div>
            <Container maxWidth="lg" style={containerStyle}>
              <Grid container spacing={2} justify="center" direction="row">
                <form onSubmit={handleFormSubmit}> 
                  <br />
                  <Grid container item xs={12} >
                    <TextField
                      id="name"
                      label="Name Of Medication"
                      variant="outlined"
                      type="String"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      required
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid  container item xs={12} >
                    <TextField
                      id="brand"
                      label="Brand"
                      variant="outlined"
                      type="String"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      fullWidth
                      required
                      autoComplete="brand"
                    />
                  </Grid>
                  <Grid container item xs={12} >
                  <InputLabel>Is This A Prescription?</InputLabel>
                    <Select
                      labelId="prescription"
                      name="prescription"
                      id="prescription"
                      label="prescription"
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid container item xs={12} >
                  <InputLabel>Is This Over The Counter?</InputLabel>
                    <Select
                      labelId="otc"
                      name="otc"
                      id="otc"
                      label="otc"
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </Grid>
                  <Grid  container item xs={12} >
                    <TextField
                      id="dose"
                      label="Daily Dose"
                      variant="outlined"
                      type="String"
                      name="dose"
                      value={formData.dose}
                      onChange={handleChange}
                      fullWidth
                      required
                      autoComplete="dose"
                    />
                  </Grid>
                  <Grid  container item xs={12} >
                    <TextField
                      id="interactions"
                      label="Recommended Interaction?"
                      variant="outlined"
                      type="String"
                      name="interactions"
                      value={formData.interactions}
                      onChange={handleChange}
                      fullWidth
                      required
                      autoComplete="interactions"
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
