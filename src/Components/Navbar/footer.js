import * as React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

export default function Footer() {
  const content = {
    copy: "For contact: mactan@gmail.com",
  };

  let brand;

  return (
    <footer>
      <Container maxWidth="lg">
        <Box
          py={6}
          sx={{
            display: "flex",
            flexDirection: "reverse-row",
            flexWrap: "wrap",
            alignItems: "center",
            width: 1,
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            component="nav"
          ></Box>
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
          >
            {content["copy"]}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
