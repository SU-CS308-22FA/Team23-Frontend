import * as React from "react";
import { Container, Box, CardMedia } from "@mui/material";
import Auction from "./auctionData";

export default function ProductHeader(props) {
  //image
  const image = props.prop.image;
  const id = props.id;
  const price = props.prop.price;
  const duration = props.prop.duration || 0;
  const start_date = props.prop.start_date || 0;
  console.log(start_date, duration, price);

  return (
    <Container maxWidth="xl" sx={{ height: 500 }}>
      <Box
        sx={{
          mt: 10,
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 3,
            justifyContent: "center",
          }}
        >
          {/* <Item></Item>{" "} */}
          <CardMedia
            component="img"
            src={image}
            style={{ width: 400, height: 500 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "center",
          }}
        >
          <Auction id={id} prop={props.prop} bids={props.bids}></Auction>
        </Box>
      </Box>
    </Container>
  );
}

// const image = props.image || "";
// const player = props.player || "";
// const owner = props.owner || "";
// const type = props.type || "";
// const status = props.status || "";
