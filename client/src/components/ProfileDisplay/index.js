import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactFragment from "@material-ui/core"

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


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



export default function ProfileDisplay() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const [spacing, setSpacing] = React.useState(2);
  const handlespace = (event) => {
    setSpacing(Number(event.target.value));
  };

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
    
    <React.Fragment>
      {user ? (
        <React.Fragment>
            <Container maxWidth="lg">
            <Grid container direction="row">
                <Box>
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
          emergencyContactNumber 
                  }, index) => (
                  <Grid item xs={12} sm={12} md={6}>
                  
                  <Card
                        sx={{
                          maxWidth: 300,
                          minHeight:400,
                          borderRadius: 4,
                          boxShadow: 10,
                          m: 1,
                          p: 1,
                          border: "2px solid 	#808080",
                          }}>
                    <CardContent sx={{ justifyContent: "left" }}>
                          <Typography                          
                            variant="h4">
                            {firstName} {lastName}
                          </Typography>
                          <List>
                          <ListItemText>Phone: {user.phoneNumber}</ListItemText>
                          <ListItemText>Email: {user.email}</ListItemText>
                          <ListItem>
                            
                            <Button>

                              </Button>
                            
                          </ListItem>
                        </List>
                        </CardContent>
                    
                      </Card>
                      </Grid>
                    ))}
                    </Box>
            </Grid>
          </Container>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}


