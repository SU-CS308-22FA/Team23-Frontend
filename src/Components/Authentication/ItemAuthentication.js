import * as React from "react";
import {
  ListItem,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Container } from "@mui/system";
import { GetCertificate } from "../../Service/ProductService";
import useWindowDimensions from "../Utils/windowDimensions";

export default function ItemAuthentication(props) {
  const [data, setData] = React.useState({ certificate: "" });
  const [flag, setFlag] = React.useState(false);

  const handleChange = (name) => (e) => {
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {};
    obj.certificate = data.certificate;

    GetCertificate(obj).then((response) => {
      console.log(response.message, "asdasdasd");

      if (response.message.length > 0) {
        setFlag(false);
        props.info(response.message);
      } else {
        setFlag(true);
      }
    });
  };

  let { height, width } = useWindowDimensions();
  let boxHeight = height - 68;
  let boxWidth = width;
  console.log(boxHeight, boxWidth);
  return (
    <Container>
      <Box
        sx={{ left: 0, right: 0, top: 68, zIndex: -5, position: "absolute" }}
      >
        <img
          width={boxWidth}
          height={boxHeight}
          src="https://cdn1.ntv.com.tr/gorsel/XsRyCBiv1ki-6sLIb0DOEQ.jpg?width=952&height=540&mode=both&scale=both"
        ></img>
      </Box>

      <Box
        sx={{
          display: "flex",
          borderRadius: "10px",
          boxShadow: 5,
          padding: 3,
          height: 200,
          width: 550,
          justifyContent: "center",
          flexDirection: "column",
          mt: 20,
          ml: 35,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{ fontWeight: 700, fontFamily: "Helvetica Neue" }}
          >
            AUTHENTICATE YOUR SHIRT
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Typography
            variant="h10"
            color="text.primary"
            sx={{ fontWeight: 400 }}
          >
            Verify the unique serial number below to confirm authenticity and
            obtain player data.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            error={flag}
            margin="normal"
            id="certificate"
            fullWidth
            value={data.certificate}
            label="Enter Certificate Number"
            name="certificate"
            variant="outlined"
            onChange={handleChange("certificate")}
          />
          <Button id="search" onClick={handleSubmit}>
            Search
          </Button>
        </Box>
        {flag === true ? (
          <Typography
            id="cer-error"
            variant="h30"
            color="red"
            sx={{ fontWeight: 400, fontSize: "14px" }}
          >
            This certificate number is not valid
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </Container>
  );
}
