import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../Components/appbar";
import ProductHeader from "../Components/productHeader";
import ProductBody from "../Components/productBody";
import { useParams } from "react-router-dom";
import serverURI from "../Constants/connection";
import axios, * as others from "axios";
import { ListItem, ListSubheader, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/system";

export default function ArrowDown(props) {
  function func2() {
    props.func();
  }
  return (
    <Container maxWidth="m">
      <ListItem sx={{ alignItems: "center", ml: 55, mt: 20 }}>
        {" "}
        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 400 }}>
          About the product
        </Typography>
        <IconButton onClick={func2}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </ListItem>
    </Container>
  );
}
