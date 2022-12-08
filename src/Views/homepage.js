import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
import HotAuctions from "../Components/HotAuctions/hotAuctions2";
import Divider from "../Components/Utils/divider";
import serverURI from "../Constants/connection";
import SortProduct from "../Components/sort";
import { CssBaseline } from "@mui/material";

const themeLight = createTheme();

// const themeLight = createTheme({
//   palette: {
//     background: {
//       default: "#e4f0e2",
//     },
//   },
// });

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
      <Divider func={func1}></Divider>
      <ListCards admin={false} uri={uri}></ListCards>
      {/* <SortProduct></SortProduct> */}
    </ThemeProvider>
  );
}
