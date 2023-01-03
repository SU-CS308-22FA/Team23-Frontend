import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  const handlePay = (data) => {
    props.payCard(pid);
  }

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
                onClick={handleProductPage}
                component="img"
                src={image}
                alt="Paella dish"
                style={{ width: 200, height: 200, m: 3 }}
              />
            </Box>
            <Box onClick={handleProductPage} sx={{ ml: 5 }}>
              <Typography color="text.primary" sx={{ fontWeight: 700 }}>
                {name}
              </Typography>
              <Typography color="text.primary" sx={{ fontWeight: 500 }}>
                {type}
              </Typography>
              <Typography color="text.primary" sx={{ fontWeight: 500 }}>
                {owner}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
          >
            {props.active === "true" ? (<Box>
              <Typography sx={{ color: "black", fontWeight: 700 }}>
                {`Your bid:`}
              </Typography>
              {states ? (
                <Typography sx={{ color: "green", fontWeight: 700 }}>
                  {`${price}$`}
                </Typography>
              ) : (
                <Typography sx={{ color: "red", fontWeight: 700 }}>
                  {`${price}$`}
                </Typography>
              )}
            </Box>) : (
              <Box sx={{ display: "flex", width: 50, flexDirection: "row" }}>
                {props.paid ?
                  (
                    <Typography sx={{ color: "black", fontWeight: 700, fontSize: "14px" }}>
                      {`Authentication token: ${pid}`}
                    </Typography>
                  ) :
                  (<Box sx={{ display: "flex", ml: 2 }}>
                    <Button variant="contained" onClick={handlePay}>Pay</Button>
                  </Box>)}
              </Box>)}
          </Box>
        </Box>
      </Box>
    </Container >
  );
}
