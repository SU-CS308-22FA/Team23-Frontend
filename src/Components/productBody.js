import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "./list";

export default function ProductBody(props) {
  const image = props.image || "";
  const player = props.player || "";
  const owner = props.owner || "";
  const type = props.type || "";
  const sold = props.sold || "";
  console.log(owner, type, player, sold);
  return (
    <Container maxWidth="xl" sx={{ height: 600 }}>
      <List player={player} owner={owner} type={type} sold={sold}></List>
    </Container>
  );
}
