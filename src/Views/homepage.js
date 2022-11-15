import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import Cookies from "universal-cookie";


const theme = createTheme();

export default function HomePage() {
  const cookie = new Cookies();
  cookie.get("email");
  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ListCards></ListCards>
    </ThemeProvider>
  );
}
