import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Auction from "./auction";
import { CardMedia } from "@mui/material";

export default function ProductHeader(props) {
  //image
  const image = props.image || "";
  const price = props.price || "";
  const duration = props.duration || "";
  const start_date = props.start_date || "";
  // console.log(owner, type, player, status);

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
          <CardMedia component="img" src={image} />
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
          <Auction
            price={price}
            duration={duration}
            start_date={start_date}
          ></Auction>{" "}
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
