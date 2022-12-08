import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
import HotAuctions from "../Components/HotAuctions/hotAuctions";
import Divider from "../Components/Utils/divider";
import serverURI from "../Constants/connection";
import SortProduct from "../Components/sort";

const theme = createTheme();

export default function HomePage() {
  const [myOption, setOption] = React.useState(0);


  function func1(data) {
    console.log(data);
    setOption(data);
  }

  let uri = serverURI + "/products/" + myOption;

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <HotAuctions uri={uri}></HotAuctions>
      <Divider func={func1}></Divider>
      <ListCards admin={false} uri={uri}></ListCards>
      {/* <SortProduct></SortProduct> */}
    </ThemeProvider>
  );
}
