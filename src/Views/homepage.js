import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
import HotAuctions from "../Components/HotAuctions/hotAuctions";
import Divider from "../Components/Utils/divider";
import serverURI from "../Constants/connection";

const theme = createTheme();

export default function HomePage() {
  let uri = serverURI + "/products/";

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <HotAuctions uri={uri}></HotAuctions>
      <Divider></Divider>
      <ListCards admin={false} uri={uri}></ListCards>
    </ThemeProvider>
  );
}
