import * as React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Container } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Divider } from "@mui/material";
import { useState } from "react";
import Cookies from "universal-cookie";
import { AddCreditCard } from "../../Service/UserService";
import { set } from "mongoose";

export default function CreditCard(props) {
  const [data, setData] = useState({
    cardNumber: "",
    cvv: "",
    name: "",
  });
  const [date, setDate] = React.useState("");
  let expDate = [date["$M"] + 1, date["$y"]];
  const [exp, setexp] = useState(false);
  const [exist, setexist] = useState(false);
  const [cvv, setcvv] = useState(false);
  const [num, setnum] = useState(false);
  const [success, setsuccess] = useState(false);
  const [emptycvv, setemptycvv] = useState(false);
  const [emptycard, setemptycard] = useState(false);
  const [name, setname] = useState(false);

  //   console.log(expDate);

  const cookie = new Cookies();
  const email = cookie.get("email");
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;

    if (name === "cardNumber" && (value.length === 4 || value.length === 9 || value.length === 14)) {
      setData({ ...data, [name]: value + " " });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {};
    obj.cardNumber = data.cardNumber;
    obj.cvv = data.cvv;
    obj.name = data.name;
    obj.expDate = expDate;
    obj.email = email;
    console.log(obj.cardNumber);
    setsuccess(false);
    setexist(false);
    setexp(false);
    if (data.name.length === 0) {
      setname(true);
    } else {
      setname(false);
    }
    if (data.cvv.length !== 3) {
      if (data.cvv.length === 0) {
        setemptycvv(true);
        console.log(data.cvv.length);
      } else {
        setemptycvv(false);
        console.log(data.cvv.length);
        setcvv(true);
      }
    } else {
      setcvv(false);
    }
    if (data.cardNumber.length !== 19) {
      if (data.cardNumber.length === 0) {
        console.log(data.cardNumber.length);
        setemptycard(true);
      } else {
        console.log(data.cardNumber.length);
        setemptycard(false);
        setnum(true);
      }
    } else {
      setemptycard(false);
      setnum(false);
    }
    if (data.cardNumber.length === 19 && data.cvv.length === 3 && data.name.length !== 0) {
      AddCreditCard(obj)
        .then((response) => {
          console.log(response);
          if (response.message === "exp") {
            console.log(response.message);
            setexp(true);
          } else if (response.message === "exist") {
            setData({ cardNumber: "", cvv: "", name: "" });
            setDate({ date: "" });
            setexist(true);
          } else {
            setexist(false);
            setexp(false);
            setsuccess(true);
            window.location.reload();
          }
          // setData({ cardNumber: "", cvv: "", name: "" });
          // setDate({ date: "" });
          console.log(exp, exist);
        })
        .catch((error) => {
          setData({ cardNumber: "", cvv: "", name: "" });
          console.log(error);
        });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "10px",
        boxShadow: 5,
        padding: 3,
        width: 350,
        flexDirection: "column",
        mb: 5,
        ml: "36%",
        backgroundColor: "white",
      }}
    >
      <Typography color="text.primary" sx={{ fontWeight: 700 }}>
        Add new card
      </Typography>{" "}
      <Divider variant="middle" />
      <TextField
        margin="normal"
        required
        fullWidth
        id="cardNumber"
        value={data.cardNumber}
        label="Credit Card Number "
        name="cardNumber"
        placeholder="Credit Card Number"
        onChange={handleChange("cardNumber")}
        // onChange={handleChange("bid")}
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ mt: 2, width: 300 }}>
          {" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              views={["year", "month"]}
              label="Year and Month"
              name="date"
              id="date"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} helperText={null} />}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ width: 100 }}>
          {" "}
          <TextField
            margin="normal"
            required
            id="cvv"
            value={data.cvv}
            label="CVV"
            name="bid"
            placeholder="CVV"
            onChange={handleChange("cvv")}
            // onChange={handleChange("bid")}
          />
        </Box>
      </Box>
      <TextField
        margin="normal"
        required
        id="name"
        value={data.name}
        label="Cardholder Name"
        name="name"
        placeholder="Cardholder Name"
        onChange={handleChange("name")}
        // onChange={handleChange("bid")}
      />
      <Box>
        {exp ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            Invalid expiration date!
          </Typography>
        ) : (
          ""
        )}
        {exist ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            Card already exists!
          </Typography>
        ) : (
          ""
        )}
        {cvv ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            CVV must contain 3 digits.
          </Typography>
        ) : (
          ""
        )}
        {num ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            Card number must contain 16 digits.
          </Typography>
        ) : (
          ""
        )}
        {success ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            Card added successfully.
          </Typography>
        ) : (
          ""
        )}
        {emptycvv ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            CVV cannot be empty.
          </Typography>
        ) : (
          ""
        )}
        {emptycard ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            Card cannot be empty.
          </Typography>
        ) : (
          ""
        )}
        {name ? (
          <Typography color="text.primary" sx={{ color: "red", fontWeight: 500 }}>
            Card holder name cannot be empty.
          </Typography>
        ) : (
          ""
        )}
      </Box>
      <Button onClick={handleSubmit} sx={{ mt: 1 }} variant="contained">
        Add Card
      </Button>
    </Box>
  );
}
