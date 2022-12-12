import * as React from 'react';
import {
  Button,
  TextField,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
} from '@mui/material';
import secondsToDhms from '../../Utils/countDown';
import BidHistory from './bidHistory';
import Cookies from 'universal-cookie';
import { NewBidServiceBid } from '../../Service/BidService';

export default function AuctionData(props) {
  const price = props.prop.price;
  const duration = Number(props.prop.duration) / 1000;
  const start_date = Number(props.prop.start_date) / 1000;
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

  //____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
  function handleOnClickEnterBid() {
    alert('zaten burdayız kardeş bu çalışıyodur');
    //Get User Email
    const cookie = new Cookies();
    const useremail = cookie.get('email');

    // Get bid in TextField and convert it to int
    const newBidValue = parseInt(document.getElementById('bid').value);
    const oldPrice = price;
    // Get the full path of the current URL
    const urlPath = window.location.pathname;
    // Split the path into an array of strings using the '/' character as a delimiter
    const pathParts = urlPath.split('/');
    // The product ID should be the last part of the path, so get the last element of the array
    const productId = pathParts.pop();
    /*
    alert(`Old Price of Product: ${oldPrice}
    Your bid is: ${newBidValue}
    The product ID is: ${productId}
    The user email is: ${useremail}
    The date: ${currentDate}`);
    */
    const data = {
      productId: productId,
      useremail: useremail,
      newBidValue: newBidValue,
      oldPrice: oldPrice,
      currentDate: currentDate,
    };

    // Send the POST request to the backend
    fetch('/api/newbid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const asyhandleOnClickEnterBid = async () => {
    try {
      const cookie = new Cookies();
      const useremail = cookie.get('email');
      const newBidValue = parseInt(document.getElementById('bid').value);
      const oldPrice = price;
      const urlPath = window.location.pathname;
      const pathParts = urlPath.split('/');
      const productId = pathParts.pop();
      const path = 'http://localhost:3000/product/newbid';

      console.log(useremail);
      console.log(newBidValue);
      console.log(oldPrice);
      console.log(productId);
      console.log(path);

      const response = await NewBidServiceBid(
        productId,
        useremail,
        newBidValue,
        oldPrice,
        currentDate
      );
      console.log(response);
      //window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
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
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="bid"
          label="Enter bid"
          name="bid"
          autoFocus
        />
        <Button onClick={asyhandleOnClickEnterBid}>Enter Bid</Button>
      </Box>
      <Divider variant="inset" component="li" />
      <BidHistory info={props.bids}></BidHistory>
      <Divider variant="inset" component="li" />
    </List>
  );
}
