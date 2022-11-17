import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "./cart";
import "../Styles/hot.css";
import { Carousel } from "react-responsive-carousel";
import { Typography } from "@mui/material";

const carouselData = [
  {
    id: "1",
    src: "http://fakeimg.pl/300/?text=1",
  },
  {
    id: "2",
    src: "http://fakeimg.pl/300/?text=2",
  },
  {
    id: "3",
    src: "http://fakeimg.pl/300/?text=3",
  },
  {
    id: "4",
    src: "http://fakeimg.pl/300/?text=4",
  },
  {
    id: "5",
    src: "http://fakeimg.pl/300/?text=5",
  },
];

export default function HotCards() {
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
            <Card size={1}></Card>
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
            <Card></Card>
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
            <Card size={1}></Card>
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
