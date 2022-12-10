import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button, Typography, Container, Box } from "@mui/material";
import Calendar from "../calender";

import serverURI from "../../Constants/connection";

// https://upload.wikimedia.org/wikipedia/commons/a/a3/Fenerbah%C3%A7elogo.png

export default function TeamHeader(props) {
  const cookie = new Cookies();
  const email = props.email;

  const [isShowLogin, setIsShowLogin] = useState(true);
  const [logo, setLogo] = useState("");
  const [teamName, setTeamName] = useState("");

  function func2() {
    props.func();
  }

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  React.useEffect(() => {
    let uri = serverURI + "/users/team/";
    const email = cookie.get("email");

    var config = {
      method: "get",
      url: uri + email,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setLogo(response.data.message.team[0].logo);
        setTeamName(response.data.message.user[0].name);
        console.log(response.data.message.user[0]);
      })
      .catch((error) => {});
  }, []);

  return (
    <Container sx={{ height: 500 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          height: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            mb: 10,
            ml: 10,
          }}
        >
          <img width="250" src={logo} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "spaceAround",
            mt: 13,
            ml: 10,
          }}
        >
          <Typography
            variant="h3"
            color="text.primary"
            sx={{ fontWeight: 900 }}
          >
            {teamName}
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ fontWeight: 40 }}
            >
              Stats
            </Typography>
          </Box>
          <Box>
            <Calendar email={email}></Calendar>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            ml: 35,
            mb: 10,
          }}
        >
          <Button onClick={func2}>Upload</Button>
        </Box>
      </Box>
    </Container>
  );
}