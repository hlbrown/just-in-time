import React, {Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Login } from 'utils/mutations';
import { useMutation } from '@apollo/client';
import {
Button,
TextField,
Grid,
Paper,
// AppBar,
Typography,
// Toolbar,
Container,
Box,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Signup2(props) {
    const classes = useStyles();
    const [planner, setPlanner] = React.useState({
    name: "",

    title: ""
    });
      const { name, title } = planner;
  const handleChange = e => {
    setPlanner({ ...planner, [e.target.name]: e.target.value });
    };
    
    return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        fullWidth
        autoComplete="name"
      />
    </div>
  );


}