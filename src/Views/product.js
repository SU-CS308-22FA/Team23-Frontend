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
  const [products, setProducts] = React.useState([{}]);

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
        setProducts(response.data.message);
        console.log(response.data.message);
        // console.log(products[0]["image"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const image = products[0]["image"];
  const player = products[0]["name"];
  const owner = products[0]["owner"];
  const type = products[0]["type"];
  const sold = products[0]["sold"];
  const price = products[0]["price"];
  const duration = products[0]["duration"];
  const start_date = products[0]["start_date"];

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ProductHeader
        image={image}
        price={price}
        duration={duration}
        start_date={start_date}
      ></ProductHeader>
      <ProductBody
        player={player}
        owner={owner}
        type={type}
        sold={sold}
      ></ProductBody>
    </ThemeProvider>
  );
}
