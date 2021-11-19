import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "utils/queries";

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

function UserDisplay(props) {
  // const { loading = false } = props;
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
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <Box>
                <>
                  <Box>
                    <h1></h1>
                    <Divider />
                    <SizedAvatar
                      sx={{ width: 90, height: 90 }}
                      src={user.image}
                    />
                    ​
                  </Box>
                  <Divider />
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
