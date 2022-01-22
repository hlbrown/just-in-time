import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "utils/queries";
import Auth from "utils/auth";

import { Avatar, Box, Button, Typography } from "@material-ui/core";

// import Profile from "pages/Profile";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container"

//list styles
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';


import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

//scrolling list we can change this is we want
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;

const mdTheme = createTheme();

const logout = (event, label) => {
  if (label === "logout") {
    Auth.logout();
  }
};



function UserDisplay() {
  // const { loading = false } = props;
 
  const { loading, data, error } = useQuery(QUERY_USER);
  if (loading) return "loading...";
  if (error) return `error!${error.message}`;
  console.log(data);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div>
    <React.Fragment>
      {user ? (
        <React.Fragment>
            <Box  
              px={{ xs: 1, sm: 5}}
              py={{ xs: 1, sm: 5}}
              bgcolor="red"
              sx={{
                borderRadius: 4,
                bgcolor: "text.disabled",
                m: 2,
                p: 2
              }}
              
            >
              <Container maxWidth="lg">
                <Grid container direction="row" spacing={3}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box>
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
                        <CardMedia
                        sx={{
                        maxWidth: 300,
                        borderRadius: 4,
                        boxShadow: 10,
                        maxHeight: 300
                          }}
                      component="img"
                      image={user.image}
                      alt="image of self"
                        />
                        <CardContent sx={{ justifyContent: "left" }}>
                          <Typography
                          
                            variant="h4">
                            {user.firstName} {user.lastName}
                          </Typography>
                        </CardContent>
                        
                      </Card>
                    </Box>
                  </Grid>
                  <Grid item item xs={12} sm={12} md={6}>
                          <Card
                        sx={{
                        maxWidth: 300,
                          minHeight: 400,
                    borderRadius: 4,
                    boxShadow: 10,
                    m: 1,
                    p: 1,
                    border: "2px solid 	#808080",
                        }}>
                        <CardMedia
                        sx={{
                        maxWidth: 300,
                        borderRadius: 4,
                        boxShadow: 10,
                       
                          }}
                        />
                      <CardContent sx={{ justifyContent: "left"}}>
                        <List>
                          <ListItemText>Phone: {user.phoneNumber}</ListItemText>
                          <ListItemText>Email: {user.email}</ListItemText>
                          <ListItem>
                            <a href="/" onClick={() => Auth.logout()}>
                            <Button>

                              </Button>
                            </a>
                          </ListItem>
                        </List>

                        
     
                        </CardContent>
                        
                      </Card>
                  </Grid>
                </Grid>
            </Container>
              

              
          </Box>

        </React.Fragment>
      ) : null}
      </React.Fragment>
      </div>
  );
}
export default UserDisplay;
