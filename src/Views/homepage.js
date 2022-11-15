import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import HotCards from "../Components/hot";


const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <HotCards></HotCards>
      <ListCards></ListCards>
      
    </ThemeProvider>
  );
}
