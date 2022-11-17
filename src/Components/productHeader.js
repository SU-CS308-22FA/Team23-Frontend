import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Auction from "../Components/auctionData";

export default function SimpleContainer() {
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
          <img
            src="https://www.celebsfacts.com/wp-content/uploads/2021/06/Emre-Mor.jpg"
            // width="500"
            // height="500"
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
          <Auction></Auction>{" "}
        </Box>
      </Box>
    </Container>
  );
}
