import React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  // useTheme,
  // StylesProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Avatar } from "@material-ui/core";

import Profile from "pages/Profile";
import { Link } from "react-router-dom";
import UserDisplay from "components/UserDisplay";
import ProfileDisplay from "components/ProfileDisplay";





const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;
const mdTheme = createTheme();

function DashboardContent(props) {
  //   const classes = useStyles();
  const { loading = false } = props;
  
  const btnstyle = { margin: "8px 0" };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", maxWidth: '100%' }}>
        {/* <Box
          component="main"
          sx={{
          backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}> */}
       
        {/* </Box>        */}
        <UserDisplay />
      </Box>
    </ThemeProvider>

  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

