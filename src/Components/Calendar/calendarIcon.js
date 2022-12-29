import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import * as React from "react";
import { ListItem, Typography, IconButton } from "@mui/material";
import { Container, Box } from "@mui/system";

export default function CalendarIcon(props) {
  function func2() {
    props.func();
  }
  return (
    <Container maxWidth="m">
      <ListItem sx={{ alignItems: "center" }}>
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: 400, mt: 1 }}
          >
            Statistics
          </Typography>
          <IconButton onClick={func2}>
            <CalendarMonthIcon />
          </IconButton>
        </Box>
      </ListItem>
    </Container>
  );
}
