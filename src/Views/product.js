import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../Components/appbar";
import ProductHeader from "../Components/productHeader";
import ProductBody from "../Components/productBody";
import { useParams } from "react-router-dom";
import serverURI from "../Constants/connection";
import axios from "axios";
import ArrowDown from "../Components/arrowDown";

const theme = createTheme();

export default function HomePage() {
  const { id } = useParams();
  let uri = serverURI + "/products/productPage/";
  const [products, setProducts] = React.useState([{}]);
  const [showList, setshowList] = React.useState(false);

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri, id]);

  function isShow() {
    if (showList === true) {
      setshowList(false);
    } else {
      setshowList(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ProductHeader
        image={products[0].image}
        price={products[0].price}
        duration={products[0].duration}
        start_date={products[0].start_date}
      ></ProductHeader>
      <ArrowDown func={isShow}></ArrowDown>
      {showList ? (
        <ProductBody
          player={products[0].name}
          owner={products[0].owner}
          type={products[0].type}
          sold={products[0].sold}
        ></ProductBody>
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
