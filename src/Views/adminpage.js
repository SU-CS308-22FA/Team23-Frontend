
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import HotCards from "../Components/hot";
import Divider from "../Components/divider";
import TeamHeader from "../Components/teamHeader";
import { useParams } from "react-router-dom";

const theme = createTheme();

export default function AdminPage() {
  const { email } = useParams();
  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <TeamHeader email={email}></TeamHeader>
      <Divider></Divider>
      <ListCards email={email}></ListCards>
    </ThemeProvider>
  );
}
