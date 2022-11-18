import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ProductCard(props) {
  const id = props.id;
  const type = props.type || "test";
  const name = props.name || "test";
  const owner = props.owner || "test";
  const image =
    props.image ||
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/49808757050946de8bedae29011926b5_9366/Manchester_United_22-23_Home_Jersey_Red_H13881_21_model.jpg";

  const admin = props.admin;
  function func3() {
    props.func(id);
  }

  const size = props.size;
  let size1 = {};

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  size === 1
    ? (size1 = {
        maxWidth: 300,
        imgHeight: "220",
        name: "h6",
        itemType: "h10",
        variant: "h10",
        displayChip: "none",
      })
    : (size1 = {
        maxWidth: 300,
        imgHeight: "300",
        name: "h5",
        itemType: "h9",
        variant: "h9",
        displayChip: "flex",
      });

  return (
    <Card sx={{ maxWidth: size1.maxWidth, position: "relative" }}>
      <CardActionArea onClick={handleClick}>
        <Box
          sx={{
            display: size1.displayChip,
            alignContent: "space-between",
            position: "absolute",
            bottom: "29%",
            left: "5%",
          }}
        >
          <Chip
            icon={<AccessTimeIcon />}
            color="primary"
            label="23:23:23 Bid:$5,000"
          />
        </Box>
        <CardMedia
          component="img"
          height={size1.imgHeight}
          src={image}
          alt="Paella dish"
        />
        <CardContent>
          <Box>
            <Typography
              variant={size1.name}
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={size1.itemType}
              color="text.primary"
              sx={{ fontWeight: 500 }}
            >
              {type}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={size1.variant}
              color="text.primary"
              sx={{ fontWeight: 500 }}
            >
              {owner}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <Box sx={{ zIndex: 1 }}>
        {admin ? <Button onClick={func3}>Update</Button> : ""}
      </Box>
    </Card>
  );
}
