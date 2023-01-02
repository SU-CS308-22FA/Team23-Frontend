import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import {
  Box,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Typography,
  Paper,
  InputAdornment,
  Divider,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UpdateService, DeleteService } from "../Service/UserService";
import serverURI from "../Constants/connection";
import AppBar from "../Components/Navbar/appbar";
import ProfileMenu from "../Components/Profile/profileMenu";
import ProfileBar from "../Components/Profile/profileBar";

const theme = createTheme();

export default function Profile() {
  const [menu, setMenu] = useState(0);

  const changeMenu = (menu) => {
    setMenu(menu);
    console.log(menu);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ProfileBar changeMenu={changeMenu}></ProfileBar>
      <ProfileMenu menu={menu}></ProfileMenu>
    </ThemeProvider>
  );
}
