import * as React from "react";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from "../Components/Navbar/appbar";
import ListCardSearch from "../Components/Card/listCardSearch";
import serverURI from "../Constants/connection";

const theme = createTheme();

export default function SearchPage() {
  const { searchQuery } = useParams();
  let uri = serverURI + "/products/search/" + searchQuery;

  React.useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <ListCardSearch uri={uri} ></ListCardSearch>
    </ThemeProvider>
  );
}
