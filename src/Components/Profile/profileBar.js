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
  Container,
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
import { UpdateService, DeleteService } from "../../Service/UserService";
import serverURI from "../../Constants/connection";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),

  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

export default function ProfileBar(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState(0);

  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;

  const handlChange = (menu) => {
    setMenu(menu);
    props.changeMenu(menu);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", my: 1, mx: 0, mt: 1.5 }}>
          <Button
            size="small"
            sx={{
              color: grey[700],
              mr: 4,
            }}
            variant="text"
            onClick={() => {
              handlChange(0);
            }}
          >
            Account
          </Button>
          <Button
            size="small"
            sx={{
              color: grey[700],
              mr: 4,
            }}
            variant="text"
            onClick={() => {
              handlChange(1);
            }}
          >
            Billing
          </Button>
          <Button
            id="adr"
            size="small"
            sx={{
              color: grey[700],
              mr: 4,
            }}
            variant="text"
            onClick={() => {
              handlChange(2);
            }}
          >
            Address
          </Button>
        </Box>
        <Divider></Divider>
      </Container>
    </ThemeProvider>
  );
}
