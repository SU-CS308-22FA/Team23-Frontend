import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "./list";

export default function ProductBody() {
  return (
    <Container maxWidth="xl" sx={{ height: 600 }}>
      <List></List>
    </Container>
  );
}
