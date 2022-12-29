import * as React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
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
import Footer from "../Components/Navbar/footer";
import TeamsSlider from "../Components/Teams/teamsSlider";

const themeLight = createTheme();

export default function HomePage() {
  const [myOption, setOption] = React.useState(0);
  const [myData, setData] = React.useState(false);
  const [renderCheck, setrenderCheck] = React.useState(true);
  const [isAdmin, setIsAdmin] = React.useState(false);

  function func1(data) {
    console.log(data);
    setOption(data);
  }

  const cookie = new Cookies();
  React.useEffect(() => {
    let path = serverURI + "/users/team/";
    const email = cookie.get("email");

    var config = {
      method: "get",
      url: path + email,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setIsAdmin(response.data.message.res);
      })
      .catch((error) => {
        setIsAdmin(false);
      });
  }, []);
  console.log(isAdmin);
  let uri = serverURI + "/products/" + myOption;

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <AppBar></AppBar>

      <HotAuctions isAdmin={isAdmin}></HotAuctions>


      <Divider></Divider>

      <TeamsSlider></TeamsSlider>


      <Divider></Divider>
      <ListCards isAdmin={isAdmin} adminPage={false} type={"list"}></ListCards>
      <Footer></Footer>
      {/* <SortProduct></SortProduct> */}
    </ThemeProvider>
  );
}
