import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { SigninService } from "../Service/UserService";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import AppBar from "../Components/appbar";
import Cookies from "universal-cookie";




const theme = createTheme();

export default function Signin() {
  const [flag, setFlag] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const cookie = new Cookies();
  cookie.get("email");

  
  

  const navigate = useNavigate();

  const handle = () => {
    navigate("/signup");
  };
  const navigateProfile = () => {
    navigate("/profile");
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
        navigateProfile();
      })
      .catch((err) => {
        setFlag(true);
        console.log(flag);
      });
    setFlag(true);
    // if respone true

    const cookies = new Cookies();
    cookies.set("email", email, { path: "/" });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
    </ThemeProvider>
  );
}
