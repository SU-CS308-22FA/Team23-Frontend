import * as React from "react";
import AppBar from "../Components/Navbar/appbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ItemAuthentication from "../Components/Authentication/ItemAuthentication";
import Certificate from "../Components/Authentication/Certificate";
import CreditCard from "../Components/Payment/creditCard";

const themeLight = createTheme();
export default function Authenticate() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [productInfo, setProductInfo] = React.useState([{}]);
  // const [close, setClose] = React.useState(true);

  function closePopUp() {
    setAuthenticated(false);
  }

  function certificate(data) {
    console.log(data.length);
    if (data.length > 0) {
      setAuthenticated(true);
      setProductInfo(data);
    } else {
      setAuthenticated(false);
      setProductInfo([{}]);
    }
  }

  return (
    <ThemeProvider theme={themeLight}>
      <AppBar></AppBar>
      <ItemAuthentication info={certificate}></ItemAuthentication>
      {authenticated ? (
        <Certificate info={productInfo} close={closePopUp}>
          {" "}
        </Certificate>
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
