import * as React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Container } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function OpenItems(props) {
  const pid = props.pid;
  // console.log(pid);
  const type = props.type || "test";
  const name = props.name || "test";
  const owner = props.owner || "test";
  const image =
    props.image ||
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/49808757050946de8bedae29011926b5_9366/Manchester_United_22-23_Home_Jersey_Red_H13881_21_model.jpg";
  const price = props.price;
  const duration = Number(props.duration) / 1000;
  const start_date = Number(props.start_date) / 1000;
  const currentDate = Math.floor(Date.now() / 1000);
  const remainingTime = duration - (currentDate - start_date);
  const states = props.states;
  const [currentRemaningTime, setRemainingTime] = React.useState(remainingTime);
  const navigate = useNavigate();

  const handleProductPage = () => {
    navigate(`/product/${pid}`);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            p: 3,
          }}
        >
          <Box sx={{ display: "flex", direction: "row", alignItems: "center" }}>
            <Box>
              <img
                component="img"
                src={image}
                alt="Paella dish"
                style={{ width: 200, height: 200, m: 3 }}
              />
              <IconButton sx={{ fontSize: 12 }} onClick={handleProductPage}>
                Product Detail
                <RemoveRedEyeIcon />
              </IconButton>
            </Box>
            <Box sx={{ ml: 5 }}>
              <Typography color="text.primary" sx={{ fontWeight: 700 }}>
                {name}
              </Typography>
              <Typography color="text.primary" sx={{ fontWeight: 500 }}>
                {type}
              </Typography>
              <Typography color="text.primary" sx={{ fontWeight: 500 }}>
                {owner}
              </Typography>
              <Typography color="text.primary" sx={{ fontWeight: 500 }}>
                {`${price}$`}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ alignItems: "center" }}>
            {states ? (
              <Box sx={{ display: "flex" }}>
                {" "}
                <EmojiEventsIcon></EmojiEventsIcon>
                <Typography sx={{ color: "green", fontWeight: 700 }}>
                  Highest Bid
                </Typography>
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}