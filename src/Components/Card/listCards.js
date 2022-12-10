import * as React from "react";
import { Box, Container } from "@mui/material";
import Card from "./productCard";
import axios from "axios";
import FilterCard from "./filterCard";

export default function ListCards(props) {
  let uri = props.uri;
  const isAdmin = props.admin;
  function func2(data) {
    console.log(data);
    props.func(data);
  }
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    console.log(uri);
    var config = {
      method: "get",
      url: uri,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data.message);
        setProducts(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri]);

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* <Divider></Divider> */}
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "20%" }}>
          <FilterCard></FilterCard>
        </Box>
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 2,
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {products.map((product) => (
            <Card
              func={func2}
              size={1}
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
          ))}
        </Box>
      </Box>
    </Container>
  );
}
