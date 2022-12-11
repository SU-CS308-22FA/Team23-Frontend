import * as React from "react";
import { Typography, Box, Container } from "@mui/material";
import SortProduct from "../Card/sort";

export default function Divider(props) {
  function func2(data) {
    console.log(data);
    props.func(data);
  }

  return (
    <Container sx={{ flexDirection: "row", mt: 5, mb: 5, height: 50, maxWidth: "xl" }}>
      <Box sx={{ display: "inline-flex", justifyContent: "center" }}>
        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 900 }}>
          Open Auctions
        </Typography>
      </Box>
      <Box sx={{ display: "inline-flex", justifyContent: "center", ml: 100, mt: 0 }}>
        <SortProduct func={func2}></SortProduct>
      </Box>
    </Container>
  );
}
