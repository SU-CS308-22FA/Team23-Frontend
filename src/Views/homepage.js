import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, Box, Typography } from "@mui/material";
import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
import HotAuctions from "../Components/HotAuctions/hotAuctions";
// import Divider from "../Components/Utils/divider";
import serverURI from "../Constants/connection";
import SortProduct from "../Components/Card/sort";
import { CssBaseline } from "@mui/material";
import { fontWeight } from "@mui/system";
import Footer from "../Components/Navbar/footer"
const themeLight = createTheme();

export default function HomePage() {
  const [myOption, setOption] = React.useState(0);

  function func1(data) {
    console.log(data);
    setOption(data);
  }

  let uri = serverURI + "/products/" + myOption;

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <AppBar></AppBar>

      <HotAuctions></HotAuctions>
      <Divider></Divider>

      <ListCards admin={false} type={"list"}></ListCards>
      <Footer></Footer>

      {/* <SortProduct></SortProduct> */}
    </ThemeProvider>
  );
}
