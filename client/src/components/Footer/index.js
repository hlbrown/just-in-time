import React from "react";

// clickable developer pics using this logic: https://codesandbox.io/s/thirsty-diffie-3e2fg?file=/src/tileData.js
// import for card section
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Grid, GridList, GridListTile, Link } from "@material-ui/core";

export default function Footer() {
  const changeBackground = (e) => {
    e.target.style.opacity = "0.7";
  };

  const normalBackground = (e) => {
    e.target.style.opacity = "1";
  };
  const useStyles = makeStyles({
    root: {
      maxWidth: 25,
    },
    media: {
      height: "25px",
      border: "1px solid gray",
    },
  });
  const classes = useStyles();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.primary"
        color="white"
      >
        <Grid container spacing={4}>
          {/* 1st column start */}
          <Grid item xs={12} sm={9}>
            <Box borderBottom={3}>Contributors </Box>
            <GridList cellHeight={150} className={classes.gridList} cols={4}>
              <GridListTile>
                <a
                  href="https://github.com/bvanburenwx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://avatars.githubusercontent.com/bvanburenwx?s=150&amp;v=1"
                    alt="Brandon Cody Van Buren"
                    title="Click to view Brandon Cody Van Buren's Github Profile"
                    onMouseEnter={changeBackground}
                    onMouseLeave={normalBackground}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </GridListTile>

              <GridListTile>
                <a
                  href="https://github.com/jameleggleston"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://avatars.githubusercontent.com/jameleggleston?s=150&amp;v=1"
                    alt="Jamel Eggleston"
                    title="Click to view Jamel Eggleston's Github Profile"
                    onMouseEnter={changeBackground}
                    onMouseLeave={normalBackground}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </GridListTile>

              <GridListTile>
                <a
                  href="https://github.com/hlbrown"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://avatars.githubusercontent.com/hlbrown?s=150&amp;v=1"
                    alt="Hannah Brown"
                    title="Click to view Hannah Brown's Github Profile"
                    onMouseEnter={changeBackground}
                    onMouseLeave={normalBackground}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </GridListTile>

              <GridListTile>
                <a
                  href="https://github.com/DionneNoellaBarretto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://avatars.githubusercontent.com/DionneNoellaBarretto?s=150&amp;v=1"
                    alt="Dionne Noella Barretto"
                    title="Click to view Dionne Noella Barretto's Github Profile"
                    onMouseEnter={changeBackground}
                    onMouseLeave={normalBackground}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </GridListTile>
            </GridList>
          </Grid>

          {/* update the column to be 6 for the 2 above /below & hiding this section to bypass  redundant link error https://wave.webaim.org/report#/https://project-3-just-in-time.herokuapp.com/ - about column for the time being as there's no additional information to add here currently */}
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
          <Grid item xs={12} sm={3}>
            <Box borderBottom={3}>Resources</Box>
            <Box>
              <Link
                href="/contact"
                color="inherit"
                title="Click to fill out a Contact Form for the Developers"
              >
                Contact Form
              </Link>
            </Box>
            <Box>
              <Link
                href="https://github.com/hlbrown/just-in-time/issues"
                color="inherit"
                title="Click to file a Feature Request"
              >
                Feature Requests
              </Link>
            </Box>
            <Box>
              <Link
                href="https://github.com/hlbrown/just-in-time/issues"
                color="inherit"
                title="Click to report/file a bug"
              >
                Report a Bug
              </Link>
            </Box>
            {/* 3rd column */}
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Just In Time &reg; {new Date().getFullYear()}
        </Box>
      </Box>
    </footer>
  );
}
