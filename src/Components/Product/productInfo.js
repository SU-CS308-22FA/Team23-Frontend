import * as React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

export default function ProductInfo(props) {
  const player = props.player || "";
  const owner = props.owner || "";
  const type = props.type || "";
  const sold = props.sold || "";
  return (
    <List
      sx={{
        height: "100",
        width: "200%",
        maxWidth: 900,
        bgcolor: "background.paper",
        border: 1,
      }}
    >
      <Divider />
      <ListItem sx={{ backgroundColor: "gray" }}>
        <ListItemText>Team</ListItemText>
        <Divider variant="middle" />
        <ListItemText>{owner}</ListItemText>
      </ListItem>
      <Divider />

      <ListItem>
        <ListItemText>Player</ListItemText>
        <Divider variant="middle" />
        <ListItemText>{player}</ListItemText>
      </ListItem>
      <Divider />

      <ListItem sx={{ backgroundColor: "gray" }}>
        <ListItemText>Type</ListItemText>
        <Divider variant="middle" />
        <ListItemText>{type}</ListItemText>
      </ListItem>
      <Divider />

      <ListItem>
        <ListItemText>Status</ListItemText>
        <Divider variant="middle" />
        <ListItemText>{sold ? "Closed" : "Open"}</ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
}
