import React from "react";
import Auth from "utils/auth";



import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import faviIconLogo from '../../assets/faviIconLogo.png';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { text } from "dom-helpers";
import { Menu } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const style = {

    background: '#2E3B55'
};


//     var classes = {
//   logo: {
//     margin: 'auto',
//     textAlign: 'center',
//     maxWidth: '50%',
//     maxHeight: '70%',
//   },
//   logoHorizontallyCenter: {
//     position: 'absolute', 
//     left: '50%', 
//     top: '50%',
//     transform: 'translate(-50%, -50%)'
//   }
// };


export default function Nav() {
 
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  //   if (Auth.loggedIn()) {
  //     return (
  //       <ul className="flex-row">

  //         <li className="mx-1">
  //           {/* this is not using the Link component to logout or user and then refresh the application to the start */}
  //           <a href="/" onClick={() => Auth.logout()}>
  //             Logout
  //           </a>
  //         </li>
  //       </ul>
        
  //     );
  //   } else {
  //     return (
  //       // <div className="nav-wrapper charcoal">
  //       //   <div className="container center">
  //       //     <a href="#" className="navbar-brand">
  //       //       <img className="responsive-image" src={faviIconLogo}></img></a>
  //       //   </div>
          
  //       //  </div>
  //     );
  //   }
  // }
 
  return (
    <nav>
    
       <Box sx={{ flexGrow: 1}} >
      <AppBar color="inherit" position="static">
        <Toolbar >
         
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           
          </Typography> */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
           {/* <img src={faviIconLogo}></img> */}
        </Toolbar>
      </AppBar>
    </Box>
      </nav>
      

   
    // // <nav className="nav-extended blue-grey darken-4">
    // //   {showNavigation()}
    // // </nav>
    // <Box sx={{ flexGrow: 1, color: 'text.secondary' }}>
    //   {/* <FormGroup>
    //     <FormControlLabel
    //       control={
    //         <Switch
    //           checked={auth}
    //           onChange={handleChange}
    //           aria-label="login switch"
    //         />
    //       }
    //       label={auth ? 'Logout' : 'Login'}
    //     />
    //   </FormGroup> */}
    //   <AppBar position="static" sx={{ backgroundColor:'navy'}}>
    //     <Toolbar>
          
    //       <img src={faviIconLogo} alt="just in time logo" />
       
    //       {/* <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton> */}
    //       {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Just In Time
    //       </Typography> */}
    //       {/* {auth && ( */}
    //         {/* <div> */}
    //           {/* <IconButton
    //             size="large"
    //             aria-label="account of current user"
    //             aria-controls="menu-appbar"
    //             aria-haspopup="true"
    //             onClick={handleMenu}
    //             color="inherit"
    //           >
    //             <AccountCircle />
    //           </IconButton> */}
    //           {/* <Menu
    //             id="menu-appbar"
    //             anchorEl={anchorEl}
    //             anchorOrigin={{
    //               vertical: 'top',
    //               horizontal: 'right',
    //             }}
    //             keepMounted
    //             transformOrigin={{
    //               vertical: 'top',
    //               horizontal: 'right',
    //             }}
    //             open={Boolean(anchorEl)}
    //             onClose={handleClose}
    //           >
    //             <MenuItem onClick={handleClose}>Profile</MenuItem>
    //             <MenuItem onClick={handleClose}>My account</MenuItem>
    //           </Menu> */}
    //         {/* </div> */}
    //       {/* )} */}
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    
        
  );
}

