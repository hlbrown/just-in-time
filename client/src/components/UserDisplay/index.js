import React from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER } from "utils/queries";
import Auth from "utils/auth";

import { Avatar, Box, Button } from "@material-ui/core";

import Profile from "pages/Profile";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  styled,
  createTheme,
  ThemeProvider,
  useTheme,
  StylesProvider,
} from "@mui/material/styles";

//list styles
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

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
}

function UserDisplay() {
  // const { loading = false } = props;
 const useStyles = makeStyles({
  button: {
    backgroundColor: "#c51162",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
 
});
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { loading, data, error } = useQuery(QUERY_USER);
  if (loading) return "loading...";
  if (error) return `error!${error.message}`;

  let user;

  if (data) {
    user = data.user;
  }
  const btnstyle = { margin: '8px 0' }
 

  return (
    <>
      <div>
        {user ? (
          <>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: [1],
                 
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </Toolbar>

              <Divider />

              
              <Box sx={{ p: 2 }} >
                <>
                  <Box >
                    <h3 >
                {user.firstName} {user.lastName}
              </h3>
                    <h1></h1>
                    <Divider /> <br/>
                    <SizedAvatar 
                      sx={{ width: 90, height: 90}}
                      src={user.image}
                    />
                    ​
                  </Box>
                  <Divider /> <br/>
                  <Box sx={{p: 2}}>
                    <List
                      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                        <ListSubheader  id="nested-list-subheader">
                          Profile Info
                        </ListSubheader>
                      }>
                      <Divider />
                      <ListItemText>Phone:</ListItemText>
                      <ListItemText> {user.phoneNumber}</ListItemText>
                      <ListItemText>Email Address:</ListItemText>
                      <ListItemText>{user.email}</ListItemText>
                      <Divider />

                      <ListItemText>
                        <a href="/" onClick={() => Auth.logout()}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          // className={classes.button}
                          style={btnstyle}
                          fullWidth
                          label="logout"
                          sx={{onClick: (event) => {logout(event, 'logout')}}}>
                 
                        Log Out</Button>
                        </a>
                      </ListItemText>
                    </List>



                  </Box>
                </>
              </Box>
            </Drawer>
          </>
        ) : null}
      </div>
    </>
  );
}
export default UserDisplay;
