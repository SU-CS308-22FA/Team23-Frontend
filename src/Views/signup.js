import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AppBar from "../Components/Navbar/appbar";

import { SignupService } from "../Service/UserService";

const theme = createTheme();

export default function SignUp() {
  const [flag, setFlag] = useState(false);
  const [mail, setmail] = useState(false);
  const [psw, setpsw] = useState(false);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const navigate = useNavigate();
  const handle = () => {
    navigate("/signin");
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let name = data.get("firstName");
    let lastname = data.get("lastName");
    let email = data.get("email");
    let password = data.get("password");
    const obj = [name, lastname, email, password];
    console.log(email.includes("@"));
    if (email.includes("@")) {
      setmail(false);
      if (password.length >= 6) {
        setpsw(false);
        SignupService(obj).then((response) => {
          console.log(response, "asdasdasd");
        });
        handle();
      } else {
        setpsw(true);
      }
    } else {
      setmail(true);
      if (password.length >= 6) {
        setpsw(false);
        SignupService(obj).then((response) => {
          console.log(response, "asdasdasd");
        });
        handle();
      } else {
        setpsw(true);
      }
    }
    console.log(mail);
    console.log(psw);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ width: 1 }} variant="outlined">
                  <InputLabel style={{ textAlign: "left" }}>
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    name="firstName"
                    label="Password"
                    id="firstName"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ width: 1 }} variant="outlined">
                  <InputLabel style={{ textAlign: "left" }}>
                    Last Name
                  </InputLabel>
                  <OutlinedInput
                    name="lastName"
                    label="Password"
                    id="lastName"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: 1 }} variant="outlined">
                  <InputLabel style={{ textAlign: "left" }}>Email</InputLabel>
                  <OutlinedInput
                    name="email"
                    id="email"
                    label="Email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: 1 }} variant="outlined">
                  <InputLabel
                    style={{ textAlign: "left" }}
                    htmlFor="outlined-adornment-password"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    error={flag}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              id="sign-up"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {mail ? (
              <Typography
                color="text.primary"
                sx={{ color: "red", fontWeight: 500 }}
              >
                Mail address must contain @.
              </Typography>
            ) : (
              ""
            )}
            {psw ? (
              <Typography
                color="text.primary"
                sx={{ color: "red", fontWeight: 500 }}
              >
                Password length should be at least 6.
              </Typography>
            ) : (
              ""
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={handle} href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
