import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import serverURI from "../Constants/connection";
import { Container } from "@mui/system";
import axios from "axios";
import { Box, Typography } from "@mui/material";

export default function Calendar(props) {
  let email = props.email;
  let uri = serverURI + "/users/statistics/";

  const [startDate, setstartDate] = React.useState({});
  const [endDate, setendDate] = React.useState({});
  const [message, setMessage] = React.useState({});

  let begin = [startDate["$D"], startDate["$M"] + 1, startDate["$y"]];
  let end = [endDate["$D"], endDate["$M"] + 1, endDate["$y"]];
  //   console.log(begin, ":", end);

  var begindate = new Date(begin[2], begin[1] - 1, begin[0]).getTime();
  var enddate = new Date(end[2], end[1] - 1, end[0]).getTime();
  console.log(begindate, enddate);

  React.useEffect(() => {
    var config = {
      method: "get",
      url: uri + begindate + "+" + enddate + "-" + email,

      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(uri);

    axios(config)
      .then((response) => {
        console.log(response.data.message);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [enddate]);

  return (
    <Container>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => {
            setstartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => {
            setendDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Typography>{`Amount: ${message}`}</Typography>
    </Container>
  );
}
