import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "./cart";
import axios from "axios";
import { CircularProgress } from "@mui/material";


export default function ListCards(props) {
  let uri = props.uri;
  const isAdmin = props.admin;
  function func2(data) {

    props.func(data);
  }

  // if (typeof props.searchQuery === "undefined") {
  //   uri = serverURI + "/products/test";
  // }
  // else {
  //   uri = serverURI + "/products/search/" + props.searchQuery;

  // }
  const [products, setProducts] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
 
  

  React.useEffect(() => {

    var config = {
      method: "get",
      url: uri,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
      
        setProducts(response.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri]);

  if (isLoading) return <Box sx={{position: "absolute", top:"50%", left:"50%"}}><CircularProgress /></Box>;
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* <Divider></Divider> */}
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 2,
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {products.length !== 0 ? products.map((product) => (
          <Card
            func={func2}
            admin={isAdmin}
            key={product._id}
            id={product._id}
            price={product.price}
            start_date={product.start_date}
            duration={product.duration}
            type={product.type}
            name={product.name}
            owner={product.owner}
            image={product.image}
          ></Card>
        )) : "Not found!"}
      </Box>
    </Container>
  );
}
