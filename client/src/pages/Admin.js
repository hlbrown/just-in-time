import React from "react";
import Auth from "utils/auth";
import { Link } from "react-router-dom";
import Nav from 'components/Nav';


import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";





export default function Admin() {
    return (
        <div>
            <Nav />
            <Box
              px={{ xs: 3, sm: 10 }}
              py={{ xs: 5, sm: 10 }}
              bgcolor="text.secondary"
              color="white"
              sx={{
              justifyContent: "center",
              borderRadius: 4,
              bgcolor: "text.disabled",
              m: 1,
              p: 1
            }}>

            </Box>       
        </div>
    );
}