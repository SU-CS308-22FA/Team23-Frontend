import * as React from "react";
import Container from "@mui/material/Container";
import List from "./list";
export default function ProductBody(props) {
  // let player = props.player;
  // let owner = props.owner;
  // let type = props.type;
  // let sold = props.sold;
  // console.log(owner, type, player, sold);
  return (
    <Container maxWidth="xl" sx={{ height: 600, m: 5 }}>
      <List
        player={props.player}
        owner={props.owner}
        type={props.type}
        sold={props.sold}
      ></List>
    </Container>
  );
}
