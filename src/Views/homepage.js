import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useInRouterContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import HotCards from "../Components/hot";
import Divider from "../Components/divider";
import serverURI from "../Constants/connection";

const theme = createTheme();

export default function HomePage() {
  let uri = serverURI + "/products/test";

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <HotCards uri={uri}></HotCards>
      <Divider></Divider>
      <ListCards admin={false} uri={uri}></ListCards>
    </ThemeProvider>
  );
}
