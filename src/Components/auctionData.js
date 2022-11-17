import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="The item closes in:"
          secondary={<React.Fragment>{"2d 17h 8m 20s"}</React.Fragment>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Current Bid"
          secondary={<React.Fragment>{"700$"}</React.Fragment>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="bid"
          label="Enter bid"
          name="bid"
          autoFocus
        />
        <Button>Enter Bid</Button>
      </Box>
    </List>
  );
}
