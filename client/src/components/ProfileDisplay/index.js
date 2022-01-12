import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { QUERY_USER } from "utils/queries";
import PropTypes from 'prop-types';
import { useQuery } from "@apollo/client";

// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";

// import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Avatar } from "@material-ui/core";

// import Profile from "pages/Profile";
import { Link } from "react-router-dom";
// import UserDisplay from "components/UserDisplay";
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import DiagnosisDisplay from "components/DiagnosisDisplay";


import Modal from '@mui/material/Modal';
import ButtonBase from '@mui/material/ButtonBase';



export default function ProfileDisplay() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;
 

const { loading, data, error } = useQuery(QUERY_USER);
  if (loading) return "loading...";
  if (error) return `error!${error.message}`;
console.log(data);
  let user;

  if (data) {
    user = data.user;
  }
  const btnstyle = { margin: '8px 0' }
 
    
  return (
    
    <>
    {user ? (
        <>
    <Container component="section" sx={{mt: 8, mb: 4}}>      
                  
            {user.profile.map(({  
                id,
          firstName,
          lastName,
          sex,
          address,
          image,
          age,
          height,
          weight,	
          bloodType,
          organDonor,
          pastSurgeries,
          pcpName,
          pcpAddress,
          emergencyContactName,
          emergencyContactNumber }, index) => (
              <div key={id} >
                    <Box
                    sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', width: '25%'}}
                    >
                       <List
                      sx={{ width: '100%', bgcolor: 'background.paper' }}>          
                        
                          <h3>{firstName} {lastName}</h3>
                          <Divider />
                          <br />
                           <SizedAvatar 
                      sx={{ width: 90, height: 90, position: 'relative'}}
                      src={image}                  
                      />
                        <br />
                      <Divider />
                      <ListItem>Age: {age}</ListItem>
                        <ListItem>Gender: {sex}</ListItem>
                      {/* <ListItemText>{sex}</ListItemText> */}
                      <ListItem>Height: {height}</ListItem>
                      {/* <ListItemText>{height}</ListItemText> */}
                      <ListItem>Weight: {weight}</ListItem>
                      {/* <ListItemText>{weight}</ListItemText> */}
                      <ListItem>Address: {address}</ListItem>
                      {/* <ListItemText>{address}</ListItemText> */}
                      <ListItem>Blood Type: {bloodType}</ListItem>
                      {/* <ListItemText>{bloodType}</ListItemText> */}
                      <ListItem>Organ Donor: {organDonor}</ListItem>
                      {/* <ListItemText>{organDonor}</ListItemText> */}
                      <ListItem>Past Surgeries: {pastSurgeries}</ListItem>
                      {/* <ListItemText>{pastSurgeries}</ListItemText> */}
                      <ListItem>Primary Care provider: {pcpName}</ListItem>
                      {/* <ListItemText>{pcpName}</ListItemText> */}
                      <ListItem>Primary Care Provider's Address: {pcpAddress}</ListItem>
                      {/* <ListItemText>{pcpAddress}</ListItemText> */}
                      <ListItem>Emergency Contact Name: {emergencyContactName}</ListItem>
                      {/* <ListItemText>{emergencyContactName}</ListItemText> */}

                      <Divider />
                    </List>
                    <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    
            
                        <h3>Diagnosis</h3>
                        <Divider />
                   
                    
                    
                      <Link to="/Diagnosis">
                      <Button variant="contained" color="primary" style={btnstyle}>
                      Add Diagnosis
                      </Button>
                      </Link>
                    </List>
                    <b/>

                    <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader  id="nested-list-subheader">
                        <h3>Medication</h3>
                        <Divider />
                      </ListSubheader>
                    }>
              
                      <Link to="/Medication">
                      <Button variant="contained" color="primary" style={btnstyle}>
                      Add Medication
                      </Button>
                        </Link>
                        {/* <DiagnosisDisplay /> */}
                    </List>

                    </Box>
                    </div>
        ))}
          {/* this is where we could display the profile */}
            </Container>
    </>
    ) : null}
    </>
  );
}


