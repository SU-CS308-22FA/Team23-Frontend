import * as React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from './cart';
import '../Styles/hot.css'
import { Button, Typography } from "@mui/material";
import { AddProduct, ButtonForm } from "./popupUpload";
import { useState } from "react";


// https://upload.wikimedia.org/wikipedia/commons/a/a3/Fenerbah%C3%A7elogo.png

export default function TeamHeader() {
    const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

    return (
        <Container sx={{height: 500}}>
            <Box sx={{display: 'flex',  justifyContent: 'flex-start', height:500}}>

                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "end", mb:10, ml:10}}>

                    <img width="250"src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Fenerbah%C3%A7elogo.png"/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "spaceAround", mt:13, ml:10}}>
                    <Typography variant="h3" color="text.primary" sx={{ fontWeight: 900 }}>
                        Fenerbahçe
                    </Typography>
                    <Box sx={{mt:5}}>
                    <Typography variant="h5" color="text.primary" sx={{ fontWeight: 40 }}>
                        Stats 
                    </Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "end", ml:35, mb:10}}>
                <ButtonForm handleLoginClick={handleLoginClick} />
      
      
      
                </Box>
                
             
            </Box>

      
      
      <AddProduct isShowLogin={isShowLogin} />
        </Container>    
    );
}