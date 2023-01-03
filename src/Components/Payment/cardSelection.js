import * as React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  IconButton,
  ownerWindow,
  Container,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import serverURI from "../../Constants/connection";
import "../../Style/popupForm.css";
import useWindowDimensions from "../Utils/windowDimensions";
import { CardSelectionService } from "../../Service/UserService";

export default function CardSelection(props) {
  const id = props.id;

  const cookie = new Cookies();
  cookie.get("email");
  const email = cookie.cookies.email;

  const myArray = new Array(20).fill(false);
  const myArray2 = new Array(20).fill(false);

  const [paymentArray, setPaymentArray] = React.useState(myArray);
  const [deliveryArray, setDeliveryArray] = React.useState(myArray2);

  const [select, setSelect] = React.useState(false);

  const [cardMessage, setCardMessage] = React.useState([]);
  const [addressMessage, setAddressMessage] = React.useState([]);

  const [address, setAddress] = React.useState({});
  const [card, setCard] = React.useState({});

  const [paid, setPaid] = React.useState(false);
  const [failure, setFailure] = React.useState(false);

  function selectPayment(idx) {
    for (let i = 0; i < paymentArray.length; i++) {
      paymentArray[i] = false;
      setSelect(!select);
    }
    setCard(cardMessage[idx]);
    paymentArray[idx] = true;

    setSelect(!select);
  }

  function selectDelivery(idx) {
    for (let i = 0; i < deliveryArray.length; i++) {
      deliveryArray[i] = false;
      setSelect(!select);
    }
    deliveryArray[idx] = true;
    setAddress(addressMessage[idx]);

    setSelect(!select);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/profile`);
  };

  const handleCancel = (data) => {
    props.close(data);
  };

  const handlePay = (event) => {
    event.preventDefault();
    const objList = [];

    objList.push(card);
    objList.push(address);
    objList.push(id);

    CardSelectionService(objList).then((response) => {
      if (response.message === "success") {
        handleCancel("reload");
        setFailure(false);
      } else if (response.message === "failure") console.log(response);
      setFailure(true);
    });
  };

  const [loading, setLoading] = React.useState(true);
  let uri = serverURI + "/users/paymentMethod/" + email;
  React.useEffect(() => {
    var config = {
      method: "get",
      url: uri,

      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setCardMessage(response.data.cardMessage);
        setAddressMessage(response.data.addressMessage);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email, uri]);

  let { height, width } = useWindowDimensions();
  height = (height - 600) / 2 + 30;
  width = (width - 500) / 2;

  return (
    <Container maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 30 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            height: 600,
            width: 500,
            top: height,
            left: width,
            boxShadow: 2,
            zIndex: 1,
            border: 1,
            borderRadius: "5px",
            flexDirection: "column",
            position: "fixed",
            backgroundColor: "white",
            borderColor: "grey.500",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={() => handleCancel("notReload")}
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
              <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                Select Payment Method
              </Typography>
            </Box>

            {cardMessage.length === 0 ? (
              <Box style={{ overflowY: "scroll", height: 240 }}>
                <Box
                  sx={{
                    display: "flex",
                    height: 60,
                    width: 420,
                    mt: 2,
                    flexDirection: "row",
                    border: 1,
                    borderRadius: "5px",
                    borderColor: "grey.500",
                  }}
                >
                  <IconButton>
                    <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>
                  </IconButton>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box sx={{ dislay: "flex", width: 300, flexDirection: "colum", ml: 12, mt: 1.2 }}>
                      <Link onClick={handleNavigate}>
                        <Box sx={{ display: "flex", mr: 6 }}>
                          <Button onClick={handleNavigate}>ADD NEW CARD</Button>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box style={{ overflowY: "scroll", height: 240 }}>
                  {cardMessage.map((cards, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        height: 60,
                        width: 420,
                        mt: 2,
                        flexDirection: "row",
                        border: 1,
                        borderRadius: "5px",
                        borderColor: "grey.500",
                      }}
                    >
                      <IconButton onClick={() => selectPayment(idx)}>
                        {paymentArray[idx] ? (
                          <RadioButtonCheckedIcon sx={{ color: "black" }}></RadioButtonCheckedIcon>
                        ) : (
                          <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>
                        )}
                      </IconButton>
                      {paymentArray[idx] ? (
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Box sx={{ dislay: "flex", width: 300, flexDirection: "colum", ml: 0.5, mt: 0.5 }}>
                            <Typography color="black" sx={{ fontWeight: 500 }}>
                              {cards.cardBankName}
                            </Typography>
                            <Typography color="black" sx={{ fontWeight: 500 }}>
                              •••• •••• •••• {cards.lastFourDigits}
                            </Typography>
                          </Box>
                        </Box>
                      ) : (
                        <Box sx={{ dislay: "flex", width: 300, flexDirection: "colum", ml: 0.5, mt: 0.5 }}>
                          <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                            {cards.cardBankName}
                          </Typography>
                          <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                            •••• •••• •••• {cards.lastFourDigits}
                          </Typography>
                        </Box>
                      )}
                      {cards.cardAssociation === "MASTER_CARD" ? (
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", width: 250 }}>
                          <img
                            sx={{ justifyContent: "end", alignItems: "end" }}
                            width="55"
                            height="28"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
                          ></img>
                        </Box>
                      ) : (
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", width: 250 }}>
                          <img
                            sx={{ justifyContent: "end", alignItems: "end" }}
                            width="55"
                            height="28"
                            src="https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg"
                          ></img>
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
                <Link onClick={handleNavigate}>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse", mr: 6 }}>
                    <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                      +add new credit card
                    </Typography>
                  </Box>
                </Link>
              </Box>
            )}

            <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
              <LooksTwoIcon></LooksTwoIcon>
              <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                Select Shipping Address
              </Typography>
            </Box>

            {addressMessage.length === 0 ? (
              <Box style={{ overflowY: "scroll", height: 240 }}>
                <Box
                  sx={{
                    display: "flex",
                    height: 60,
                    width: 420,
                    mt: 2,
                    flexDirection: "row",
                    border: 1,
                    borderRadius: "5px",
                    borderColor: "grey.500",
                  }}
                >
                  <IconButton>
                    <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>
                  </IconButton>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box sx={{ dislay: "flex", width: 300, flexDirection: "colum", ml: 12, mt: 1.2 }}>
                      <Link onClick={handleNavigate}>
                        <Box sx={{ display: "flex", mr: 8 }}>
                          <Button onClick={handleNavigate}>ADD NEW ADDRESS</Button>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box style={{ overflowY: "scroll", height: 150 }}>
                {addressMessage.map((addresses, idx) => (
                  <Box
                    key={idx}
                    onClick={() => selectDelivery(idx)}
                    sx={{
                      display: "flex",
                      height: 60,
                      width: 420,
                      mt: 2,
                      flexDirection: "row",
                      border: 1,
                      borderRadius: "5px",
                      borderColor: "grey.500",
                    }}
                  >
                    <IconButton onClick={() => selectDelivery(idx)}>
                      {deliveryArray[idx] ? (
                        <RadioButtonCheckedIcon sx={{ color: "black" }}></RadioButtonCheckedIcon>
                      ) : (
                        <RadioButtonUncheckedIcon></RadioButtonUncheckedIcon>
                      )}
                    </IconButton>
                    {deliveryArray[idx] ? (
                      <Box sx={{ dislay: "flex", flexDirection: "colum", ml: 0.5, mt: 0.5 }}>
                        <Typography color="black" sx={{ fontWeight: 500 }}>
                          {addresses.address}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Typography color="black" sx={{ fontWeight: 500 }}>
                            {addresses.city}, {addresses.country}, {addresses.zip}
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Box sx={{ dislay: "flex", flexDirection: "colum", ml: 0.5, mt: 0.5 }}>
                        <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                          {addresses.address}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                            {addresses.city}, {addresses.country}, {addresses.zip}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            )}

            <Link onClick={handleNavigate}>
              <Box sx={{ display: "flex", flexDirection: "row-reverse", mr: 6 }}>
                <Typography color="grey.700" sx={{ fontWeight: 500 }}>
                  +add new shipping address
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", mt: 2, mr: 2 }}>
            {failure ? (
              <Typography color="red" sx={{ fontWeight: 600, mr: 32 }}>
                Insufficient Balance
              </Typography>
            ) : (
              ""
            )}
            <Button onClick={handlePay} variant="contained">
              Pay
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
}
