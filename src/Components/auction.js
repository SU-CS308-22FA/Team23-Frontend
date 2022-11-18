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

export default function AuctionData(props) {
  const price = props.price;
  const duration = props.duration / 1000;
  const start_date = props.start_date / 1000;
  let currentDate = Date.now() / 1000;
  console.log(duration, start_date, currentDate);

  // function secondsToDhms(seconds) {
  //   seconds = Number(seconds);
  //   var d = Math.floor(seconds / (3600 * 24));
  //   var h = Math.floor((seconds % (3600 * 24)) / 3600);
  //   var m = Math.floor((seconds % 3600) / 60);
  //   var s = Math.floor(seconds % 60);

  //   var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  //   var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  //   var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  //   var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : " ";
  //   return dDisplay + hDisplay + mDisplay + sDisplay;
  // }
  // var time = duration - (currentDate - start_date);
  // const [number, setNumber] = React.useState(time);
  // console.log(number);

  // React.useEffect(() => {
  //   setInterval(() => {
  //     setNumber((prev) => prev - 1);
  //     // console.log(number);
  //   }, 1000);
  // }, [number]);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="The item closes in:"
          secondary={<React.Fragment>2d:13h:12m:12s</React.Fragment>}
          // secondary={<React.Fragment>{secondsToDhms(number)}</React.Fragment>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Current Bid"
          secondary={<React.Fragment>{price}</React.Fragment>}
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
