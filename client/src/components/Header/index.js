import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import faviIconLogo from "../../assets/faviIconLogo.png";

export default function Header() {
  return (
    <Box
      px={{ xs: 3, sm: 5 }}
      py={{ xs: 5, sm: 5 }}
      bgcolor="text.primary"
      color="white"
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          textAlign="center"
          pt={{ xs: 2, sm: 5 }}
          pb={{ xs: 2, sm: 0 }}
        >
          <img src={faviIconLogo} alt="logo" />
        </Grid>
      </Container>
    </Box>
  );
}
