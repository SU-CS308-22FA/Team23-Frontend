import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "../Components/appbar";
import ListCards from "../Components/listCards";
import HotCards from "../Components/hot";
import Divider from "../Components/divider";
import { useParams } from "react-router-dom";
import serverURI from "../Constants/connection";

const theme = createTheme();

export default function SearchPage() {
    const { searchQuery } = useParams();
    let uri = serverURI + "/products/search/" + searchQuery;
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar></AppBar>
            <ListCards uri={uri}></ListCards>

        </ThemeProvider>
    );
}
