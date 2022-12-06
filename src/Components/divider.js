import * as React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from './cart';
import serverURI from "../Constants/connection";
import axios, * as others from "axios";
import { set } from "mongoose";
import { Typography } from "@mui/material";

export default function Divider() {

    return(
        <Container sx={{mt:5, mb:5, height:35, maxWidth:"xl"}}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 900 }} >
                Open Auctions
                </Typography>
            </Box>
        </Container>
        
    );


}