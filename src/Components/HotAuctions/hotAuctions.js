import * as React from "react";
import axios from "axios";
import {
  Box,
  Container,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect } from "react";

import serverURI from "../../Constants/connection";
import Card from "../Card/productCard";
import "../../Style/hotAuctions.css";

const uri = serverURI + "/products/get/hot";

export default function HotAuctions(prop) {
  const [classList, setClassList] = useState([
    "carousel-item carousel-item-2",
    "carousel-item carousel-item-3",
    "carousel-item carousel-item-4",
  ]);
  const [sizes, setSizes] = useState([1, 2, 1]);
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(0);
  const [products, setProducts] = React.useState([{}, {}, {}]);
  const isAdmin = prop.isAdmin;
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
        setLoading(false);
        console.log(response.data.message);
        setProducts(response.data.message);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevious = () => {
    setClassList((old) => {
      let first = old[0];
      let second = old[1];
      let third = old[2];

      return [second, third, first];
    });
    setSizes((old) => {
      let first = old[0];
      let second = old[1];
      let third = old[2];

      return [second, third, first];
    });
    setActiveCard((old) => {
      if (old === 0) {
        old = 2;
      } else {
        old--;
      }
      return old;
    });
  };

  const handleNext = () => {
    setClassList((old) => {
      let first = old[0];
      let second = old[1];
      let third = old[2];

      return [third, first, second];
    });
    setSizes((old) => {
      let first = old[0];
      let second = old[1];
      let third = old[2];

      return [third, first, second];
    });
    setActiveCard((old) => {
      if (old === 2) {
        old = 0;
      } else {
        old++;
      }
      return old;
    });
  };

  return (
    <Container sx={{ height: 600, mb: 5 }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 30 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            height: 570,
            // bgcolor: "#09CDCA",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <IconButton onClick={handlePrevious}>
              <ArrowBackIosIcon />
            </IconButton>
            {/* <button className="carousel-control carousel-control-previous" data-name="previous" onClick={handlePrevious}>
            <span className="ax-hidden">previous</span>
          </button> */}
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
            <div className="carousel">
              <div className="carousel-container">
                <div className={classList[0]}>
                  <Card
                    isAdmin={isAdmin}
                    size={sizes[0]}
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
                </div>
                <div className={classList[1]}>
                  <Card
                    isAdmin={isAdmin}
                    size={sizes[1]}
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
                </div>
                <div className={classList[2]}>
                  <Card
                    isAdmin={isAdmin}
                    size={sizes[2]}
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
                </div>
              </div>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <IconButton onClick={handleNext}>
              <ArrowForwardIosIcon />
            </IconButton>
            {/* <button className="carousel-control carousel-control-next" data-name="next" onClick={handleNext}>
            <span className="ax-hidden">next</span>
          </button> */}
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
              id="hot"
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
                {`#${activeCard + 1} ${products[activeCard].name}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
}
