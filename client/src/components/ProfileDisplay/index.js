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
      <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              
              {user.profile.map(({data}, index) => (
            
              
                <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}>
              <Paper>
                {data.firstName}
              </Paper>
              </Stack>
            
          ))}
            </Grid>
            </Box>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}


