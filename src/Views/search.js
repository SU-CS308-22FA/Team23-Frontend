import * as React from "react";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "../Components/Navbar/appbar";
import ListCards from "../Components/Card/listCards";
import serverURI from "../Constants/connection";

const theme = createTheme();

export default function SearchPage() {
  const { searchQuery } = useParams();
  let uri = serverURI + "/products/search/" + searchQuery;

  React.useEffect(() => {}, [searchQuery]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ListCards uri={uri} type={"search"}></ListCards>
    </ThemeProvider>
  );
}
