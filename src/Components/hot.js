import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "./cart";
import "../Styles/hot.css";
import { Typography } from "@mui/material";
import axios, * as others from "axios";

export default function HotCards(props) {
  let uri = props.uri;

  const [products, setProducts] = React.useState([{}, {}, {}]);

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
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [products,uri]);

  return (
    <Container sx={{ height: 600 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", height: 570 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            position: "relative",
            height: 1,
            width: 0.5,
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              position: "absolute",
              left: "10%",
              zIndex: 0,
            }}
          >
            <Card size={1}
            key={products[2]._id}
            id={products[2]._id}
            price={products[2].price}
            start_date={products[2].start_date}
            duration={products[2].duration}
            type={products[2].type}
            name={products[2].name}
            owner={products[2].owner}
            image={products[2].image}
            ></Card>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              position: "absolute",
              left: "23%",
              zIndex: 1,
            }}
          >
            <Card
            key={products[0]._id}
            id={products[0]._id}
            price={products[0].price}
            start_date={products[0].start_date}
            duration={products[0].duration}
            type={products[0].type}
            name={products[0].name}
            owner={products[0].owner}
            image={products[0].image}
            ></Card>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              position: "absolute",
              left: "50%",
              zIndex: 0,
            }}
          >
            <Card size={1}
            key={products[1]._id}
            id={products[1]._id}
            price={products[1].price}
            start_date={products[1].start_date}
            duration={products[1].duration}
            type={products[1].type}
            name={products[1].name}
            owner={products[1].owner}
            image={products[1].image}
            ></Card>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            height: "auto",
            mt: 15,
            ml: 4,
          }}
        >
          <Typography
            variant="h4"
            color="text.primary"
            sx={{ fontWeight: 900 }}
          >
            HOT AUCTIONS
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 900 }}
            >
              #1 Arda Güler
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
