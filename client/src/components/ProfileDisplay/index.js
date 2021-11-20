import React from "react";
// import {
//   styled,
//   createTheme,
//   ThemeProvider,
//   useTheme,
//   StylesProvider,
// } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiDrawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { QUERY_USER } from "utils/queries";
import { useQuery } from "@apollo/client";

// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";

// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";
// import { Avatar } from "@material-ui/core";

// import Profile from "pages/Profile";
import { Link } from "react-router-dom";
// import UserDisplay from "components/UserDisplay";

function ProfileDisplay() {

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
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Link to="/Profile">
            <Button variant="contained" color="primary" style={btnstyle}>
              Add Profile
            </Button>
          </Link>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >

                    
                     




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
        emergencyContactName }, index) => (
        <div key={index} className="card px-1 py-1">
           <h1> {firstName} {lastName}</h1>
                      <div>
                      </div>
                    </div>
        ))}
          {/* this is where we could display the profile */}
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}></Paper>
      </Grid>
    </Grid>
    </>
    ) : null}
    </>
  );
}
export default ProfileDisplay;
