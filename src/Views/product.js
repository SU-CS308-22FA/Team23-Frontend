import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../Components/appbar";
import ProductHeader from "../Components/productHeader";
import ProductBody from "../Components/productBody";
import { useParams } from "react-router-dom";
import serverURI from "../Constants/connection";
import axios, * as others from "axios";

const theme = createTheme();

export default function HomePage() {
  const { id } = useParams();
  let uri = serverURI + "/products/productPage/";
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    var config = {
      method: "get",
      url: uri + id,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        //console.log(response.data.message);
        setProducts(response.data.message);
        console.log(products[0]["owner"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ProductHeader></ProductHeader>
      <ProductBody></ProductBody>
    </ThemeProvider>
  );
}
