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



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',

}));

function DashboardContent(props) {
  //   const classes = useStyles();
  const { loading = false } = props;
  
  const btnstyle = { margin: "8px 0" };
  return (
   
        <Box  
              px={{ xs: 1, sm: 5}}
      py={{ xs: 1, sm: 5 }}
      bgcolor="text.secondary"
              sx={{
                borderRadius: 4,
                m: 2,
                p: 2,
                flexGrow: 1        
      }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Item>
            <UserDisplay />
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <ProfileDisplay/>
        </Grid>
      </Grid>      
        </Box>


  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

