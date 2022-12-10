import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import * as React from "react";
import { ListItem, Typography, IconButton } from "@mui/material";
import { Container } from "@mui/system";

export default function CalendarIcon(props) {
  function func2() {
    props.func();
  }
  return (
    <Container maxWidth="m">
      <ListItem sx={{ alignItems: "center" }}>
        <Typography variant="h5" color="text.primary" sx={{ fontWeight: 400 }}>
          Statistics
        </Typography>
        <IconButton onClick={func2}>
          <CalendarMonthIcon />
        </IconButton>
      </ListItem>
    </Container>
  );
}
