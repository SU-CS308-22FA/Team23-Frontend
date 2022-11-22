import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import HotCards from "../Components/hot";

import serverURI from "../Constants/connection";

const theme = createTheme();

export default function HomePage() {
  let uri = serverURI + "/products/test";

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <HotCards uri={uri}></HotCards>

      <ListCards admin={false} uri={uri}></ListCards>
    </ThemeProvider>
  );
}
