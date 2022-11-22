import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import { Button, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import secondsToDhms from "../Utils/countDown";
export default function AuctionData(props) {
  const price = props.price;
  const duration = Number(props.duration) / 1000;
  const start_date = Number(props.start_date) / 1000;
  const currentDate = Math.floor(Date.now() / 1000);
  const remainingTime = duration - (currentDate - start_date);
  const [currentRemaningTime, setRemainingTime] = React.useState(remainingTime);
  // console.log("e", duration, start_date, currentDate, remainingTime);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="The item closes in:"
          secondary={
            <React.Fragment>
              {secondsToDhms(remainingTime, true)}
            </React.Fragment>
            //  <React.Fragment>
            //   `{secondsToDhms(currentRemaningTime)}
            // </React.Fragment>
          }

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
