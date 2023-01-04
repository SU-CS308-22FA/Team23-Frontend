import * as React from "react";
import {
  Box,
  IconButton,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../Style/popupForm.css";
import useWindowDimensions from "../Utils/windowDimensions";

export default function Certificate(props) {
  const info = props.info[0];
  let finishDate = new Date(info.start_date + info.duration);
  finishDate = finishDate.toLocaleString();

  let { height, width } = useWindowDimensions();

  height = (height - 550) / 2;
  width = (width - 900) / 2;

  const handleCancel = () => {
    props.close();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: 550,
          width: 900,
          border: 1,
          borderRadius: "20px",
          flexDirection: "column",
          bgcolor: "primary",
          position: "fixed",
          top: height,
          left: width,
          zIndex: 1,
          backgroundColor: "white",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCancel}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="show">
          <Box
            sx={{
              display: "flex",
              padding: 2,
              width: 600,
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
              ml: 18,
            }}
          >
            <Typography
              id="success"
              align="center"
              variant="h30"
              sx={{ fontWeight: 400, fontSize: "20px", color: "red" }}
            >
              CONGRATULATIONS, You successfully authenticated your shirt.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "background.paper",
              borderRadius: 3,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <CardMedia
              style={{ width: 400, height: 420 }}
              src={info.image}
              component="img"
            />
            <Box
              sx={{
                display: "flex",
                height: 300,
                width: 470,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "space-between",
              }}
            >
              <Typography
                variant="h10"
                sx={{
                  fontFamily: "Monospace",
                  fontWeight: 400,
                  fontSize: "17px",
                }}
              >
                Finished: {finishDate}
              </Typography>
              <Typography
                variant="h30"
                sx={{ fontFamily: "Monospace", fontSize: "17px" }}
              >
                Name: {info.name}
              </Typography>
              <Typography
                variant="h30"
                sx={{ fontFamily: "Monospace", fontSize: "17px" }}
              >
                Type: {info.type}
              </Typography>
              <Typography
                variant="h30"
                sx={{ fontFamily: "Monospace", fontSize: "17px" }}
              >
                Owner: {info.owner}
              </Typography>
              <Typography
                variant="h30"
                sx={{ fontFamily: "Monospace", fontSize: "17px" }}
              >
                Final Price: {info.price}
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
    </Container>
  );
}
