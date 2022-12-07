import * as React from "react";
import { ListItem, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
