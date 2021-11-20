import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import Nav from "components/Nav";
import { LOGIN } from "utils/mutations";
import Auth from "utils/auth";

//import for form
// import { FormGroup } from '@mui/material';
// import { InputLabel } from '@mui/material';
// import { InputBase } from '@mui/material';
// import { useFormControl } from '@mui/material/FormControl';

// imports for styling
import {
  Button,
  TextField,
  Grid,
  Paper,
  // AppBar,
  Typography,
  // Toolbar,
  Link,
  // Container,
  Box,
} from "@material-ui/core";

// import { borders, shadows } from "@mui/system";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

   const paperStyle={padding :20 ,width:280, margin:"20px auto"}
 const btnstyle={margin:'8px 0'}
  return (
    <div>
      
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
          p: 1,
        }}
      >
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
              sx={{
                maxwidth: 345,
                borderRadius: 4,
                boxShadow: 10,
              }}
            >
              <Paper  style={paperStyle}
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={handleFormSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="email"
                          variant="outlined"
                          onChange={handleChange}
                          // value={this.state.email}
                          // onChange={(event) =>
                          // this.setState({[event.target.name]: event.target.value,})}
                          required
                          autofocus
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          onChange={handleChange}
                          // value={this.state.password}
                          // onChange={(event) =>
                          // this.setState({[event.target.name]: event.target.value,})}
                          required
                        />
                      </Grid> 
                      
                      <Grid item>
                      {/* rerouting forgot password to /signup for now */}
                  <Link href="/signup" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
                     
                      <Grid item>
                        {error ? (
                          <div>
                          <p className="error-text">The provided credentials are incorrect</p>
                          </div>
                        ) : null}
                      
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                          style={btnstyle} fullWidth>
                        
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
               
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>

    // {/* // <Container className="container my-1">
    //   <Link to="/signup">← Go to Signup</Link>

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <Container className="flex-row space-between my-2">
    //       <label htmlFor="email">Email address:</label>
    //       <input */}
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </Container>
    //     <Container className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </Container>
    //     {error ? (
    //       <Container>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </Container>
    //     ) : null}
    //     <Container className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </Container>
    //   </form>
    // </Container>
  );
}

export default Login;
