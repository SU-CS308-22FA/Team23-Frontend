import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import {
  Link,
  Grid,
  Box,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Container,
  IconButton,
  InputAdornment,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { SigninService } from "../Service/UserService";
import AppBar from "../Components/Navbar/appbar";

const theme = createTheme();

export default function Signin() {
  const cookies = new Cookies();
  const [flag, setFlag] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  const handle = () => {
    navigate("/signup");
  };
  const navigateProfile = () => {
    navigate("/");
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
    let email = data.get("email");
    let password = data.get("password");
    const obj = [email, password];

    SigninService(obj)
      .then((response) => {
        console.log(response);
        cookies.set("email", email, { path: "/" });
        console.log(response.message);
        if (response.message === true) {
          navigateProfile();
          setFlag(false);
        } else {
          setFlag(true);
        }
      })
      .catch((err) => {
        setFlag(true);
        console.log(flag);
      });
    // if respone true
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={flag}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormControl sx={{ width: 1, mt: 1.5 }} variant="outlined">
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            ></Box>
            {flag === true ? "Wrong email and password!" : ""}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={handle} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
