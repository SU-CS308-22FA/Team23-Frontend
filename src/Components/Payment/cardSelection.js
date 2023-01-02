import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { Box, TextField, Button, IconButton, ownerWindow, Container, Typography, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import serverURI from "../../Constants/connection";
import "../../Style/popupForm.css";
import useWindowDimensions from "../Utils/windowDimensions";

export default function CardSelection(props) {
  const id = props.id;

  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;
  const owner = email.substr(0, email.indexOf("@"));

  const handleCancel = () => {
    props.close();
  };

  const myArray = new Array(20).fill(false);
  const myArray2 = new Array(20).fill(false);

  const [paymentArray, setPaymentArray] = React.useState(myArray)
  const [deliveryArray, setDeliveryArray] = React.useState(myArray2)

  const [select, setSelect] = React.useState(false);

  const [cardMessage, setCardMessage] = React.useState([]);
  const [addressMessage, setAddressMessage] = React.useState([]);

  let { height, width } = useWindowDimensions();

  height = ((height - 580) / 2) + 30;
  width = (width - 500) / 2;

  function selectPayment(idx) {
    for (let i = 0; i < paymentArray.length; i++) {
      paymentArray[i] = false;
      setSelect(!select);
    }
    paymentArray[idx] = true;
    setSelect(!select);
  }

  function selectDelivery(idx) {
    for (let i = 0; i < deliveryArray.length; i++) {
      deliveryArray[i] = false;
      setSelect(!select);
    }
    deliveryArray[idx] = true;
    setSelect(!select);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/profile`);
  };

  let uri = serverURI + "/users/paymentMethod/" + email;
  React.useEffect(() => {
    var config = {
      method: 'get',
      url: uri,

      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(uri);

    axios(config)
      .then((response) => {
        setCardMessage(response.data.cardMessage);
        setAddressMessage(response.data.addressMessage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email, uri]);

  console.log(cardMessage);
  console.log(addressMessage);

  return (
    <Container maxWidth="xl">
      <Box sx={{ height: 580, width: 500, top: height, left: width, boxShadow: 2, zIndex: 1, border: 1, borderRadius: '5px', flexDirection: "column", position: "fixed", backgroundColor: "white", borderColor: 'grey.500' }}>
        <IconButton
          aria-label="close"
          // onClick={handleCancel}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", mt: 4, ml: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <LooksOneIcon></LooksOneIcon>
            <Typography color='grey.700' sx={{ fontWeight: 500 }}>
              Select Payment Method
            </Typography>
          </Box>

          <Box style={{ overflowY: "scroll", height: 240 }}>
            {[0, 1, 2, 3, 4, 5].map((product, idx) => (
              <Box sx={{ display: "flex", height: 60, width: 420, mt: 2, flexDirection: "row", border: 1, borderRadius: '5px', borderColor: 'grey.500' }}>
                <IconButton onClick={() => selectPayment(idx)}>
                  {paymentArray[idx] ? (
                    <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
                  ) : (
                    <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>
                  )}
                </IconButton>
                <Box sx={{ dislay: "flex", flexDirection: "colum", ml: 0.5, mt: 0.5 }}>
                  <Typography color='grey.700' sx={{ fontWeight: 500 }}>
                    MasterCard
                  </Typography>
                  <Typography color='grey.700' sx={{ fontWeight: 500 }}>
                    **** **** **** 0615
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>


          <Link onClick={handleNavigate}>
            <Box sx={{ display: "flex", flexDirection: "row-reverse", mr: 6 }}>
              <Typography color='grey.700' sx={{ fontWeight: 500 }}>
                +add new credit card
              </Typography>
            </Box>
          </Link>

          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            <LooksTwoIcon></LooksTwoIcon>
            <Typography color='grey.700' sx={{ fontWeight: 500 }}>
              Select Shipping Address
            </Typography>
          </Box>

          <Box style={{ overflowY: "scroll", height: 150 }}>
            {[0, 1, 2].map((product, idx) => (
              <Box onClick={() => selectDelivery(idx)} sx={{ display: "flex", height: 60, width: 420, mt: 2, flexDirection: "row", border: 1, borderRadius: '5px', borderColor: 'grey.500' }}>
                <IconButton onClick={() => selectDelivery(idx)}>
                  {deliveryArray[idx] ? (
                    <RadioButtonCheckedIcon></RadioButtonCheckedIcon>
                  ) : (
                    <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>
                  )}
                </IconButton>
                <Box sx={{ dislay: "flex", flexDirection: "colum", ml: 0.5, mt: 0.5 }}>
                  <Typography color='grey.700' sx={{ fontWeight: 500 }}>
                    Orta Mah. Sabancı No: B4
                  </Typography>
                  <Typography color='grey.700' sx={{ fontWeight: 500 }}>
                    Tuzla İstanbul
                  </Typography>

                </Box>
              </Box>
            ))}
          </Box>


        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", mt: 2, mr: 2 }}>
          <Button variant="contained">Pay</Button>
        </Box>

      </Box>
    </Container>

  );
};
