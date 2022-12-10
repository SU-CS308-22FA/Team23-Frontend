import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
import HotAuctions from "../Components/HotAuctions/hotAuctions";
import Divider from "../Components/Utils/divider";
import serverURI from "../Constants/connection";
import SortProduct from "../Components/Card/sort";

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <HotAuctions></HotAuctions>
      <ListCards admin={false} type={"list"}></ListCards>
      {/* <SortProduct></SortProduct> */}
    </ThemeProvider>
  );
}
