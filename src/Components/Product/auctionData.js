import * as React from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
} from "@mui/material";
import secondsToDhms from "../../Utils/countDown";
import BidHistory from "./bidHistory";
import { EnterBid } from "../../Service/ProductService";

export default function AuctionData(props) {
  const price = props.prop.price;
  const id = props.id;
  // console.log(id);
  const basePrice = props.prop.basePrice;
  // console.log(basePrice);
  const duration = Number(props.prop.duration) / 1000;
  const start_date = Number(props.prop.start_date) / 1000;
  const currentDate = Math.floor(Date.now() / 1000);
  const remainingTime = duration - (currentDate - start_date);
  const [currentRemaningTime, setRemainingTime] = React.useState(remainingTime);
  const [data, setData] = React.useState({ bid: "" });
  const [insert, setInsert] = React.useState(true);
  // console.log("e", duration, start_date, currentDate, remainingTime);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {};
    obj.bid = data.bid;
    obj.pid = id;

    if (data.bid > price) {
      EnterBid(obj).then((response) => {
        console.log(response, "asdasdasd");
        setInsert(true);
      });
    } else {
      setInsert(false);
    }
  };

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

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
        {insert ? (
          <TextField
            margin="normal"
            required
            fullWidth
            id="bid"
            value={data.bid}
            label="Enter bid"
            name="bid"
            autoFocus
            onChange={handleChange("bid")}
          />
        ) : (
          <TextField
            error
            margin="normal"
            required
            fullWidth
            id="bid"
            value={data.bid}
            label="Enter bid"
            name="bid"
            autoFocus
            onChange={handleChange("bid")}
          />
        )}

        <Button onClick={handleSubmit}>Enter Bid</Button>
      </Box>
      <Divider variant="inset" component="li" />
      <BidHistory info={props.bids}></BidHistory>
      <Divider variant="inset" component="li" />
    </List>
  );
}
