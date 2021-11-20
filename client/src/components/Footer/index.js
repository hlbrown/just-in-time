import React from "react";
// import Auth from "utils/auth";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
// import for card section
// import Card from "@mui/material/Card";


export default function Footer() {    
    
  return (        
  <footer>
    <Box
      px={{ xs: 1, sm: 2 }}
      py={{ xs: 1, sm: 2 }}
      bgcolor="text.primary" color="white">
      <Container maxWidth='lg'>
          <Grid container spacing={5}>
            {/* 1st column start */}
          <Grid item xs={12} sm={6}>
            <Box borderBottom={1}>Contributors</Box>
            <Box>
              <Link href='https://github.com/bvanburenwx' target="_blank" color='inherit'> Brandon Cody Van Buren  </Link>
            </Box>
            <Box>
              <Link href='https://github.com/jameleggleston' target="_blank"  color='inherit'>Jamel Eggleston</Link>
            </Box>
            <Box>
              <Link href='https://github.com/hlbrown' target="_blank"  color='inherit'>Hannah Brown</Link>
            </Box>
             <Box>
              <Link href='https://github.com/DionneNoellaBarretto' target="_blank"  color='inherit'>Dionne Noella Barretto</Link>
            </Box>
            </Grid>
            {/* 2nd column start
              <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>About</Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            </Grid> */}
            {/* 3rd column start */}
              <Grid item xs={12} sm={6}>
            <Box borderBottom={1}>Resources</Box>
            <Box>
              <Link href='/contact' color='inherit'>Contact Form</Link>
            </Box>
            <Box>
              <Link href='https://github.com/hlbrown/just-in-time/issues/new?assignees=&labels=&template=feature_request.md&title=' color='inherit'>Feature Requests</Link>
            </Box>
            <Box>
              <Link href='https://github.com/hlbrown/just-in-time/issues/new?assignees=&labels=&template=bug_report.md&title=' color='inherit'>Report a Bug</Link>
              </Box>
              {/* 3rd column */}
          </Grid>
          </Grid>
          <Box textAlign="center" pt={{xs: 2, sm:10}} pb={{xs:5, sm:0}}>
             Just In Time &reg; {new Date().getFullYear()}
          </Box>
      </Container>
    </Box>
      
  </footer>
  )

}