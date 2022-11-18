import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListSubheader, Typography } from "@mui/material";
export default function Lists(props) {
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
      }}
    >
      <Typography
        variant="h5"
        color="text.primary"
        align="center"
        sx={{ fontWeight: 400 }}
      >
        About the product
      </Typography>
      <Divider />
      <ListItem>
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

      <ListItem>
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
