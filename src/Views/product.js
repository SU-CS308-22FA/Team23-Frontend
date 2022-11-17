import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "../Components/appbar";
import ProductHeader from "../Components/productHeader";
import ProductBody from "../Components/productBody";

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ProductHeader></ProductHeader>
      <ProductBody></ProductBody>
    </ThemeProvider>
  );
}
