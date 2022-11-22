import * as React from "react";
import Container from "@mui/material/Container";
import List from "./list";
export default function ProductBody(props) {

  return (
    <Container maxWidth="xl" sx={{ height: 250, m: 5 }}>
      <List
        player={props.player}
        owner={props.owner}
        type={props.type}
        sold={props.sold}
      ></List>
    </Container>
  );
}
