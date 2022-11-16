
import React, { useState } from "react";
import { AddProduct } from "../Components/popupUpload";
import { ButtonForm } from "../Components/popupUpload";
import AppBar from "../Components/appbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import ListCards from "../Components/listCards";
import HotCards from "../Components/hot";
import Divider from "../Components/divider";

const theme = createTheme();

export default function UploadProduct() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      <Container sx={{width:1, height:45}}>

        <ButtonForm handleLoginClick={handleLoginClick} />
      </Container>
      
      <AddProduct isShowLogin={isShowLogin} />
      
    </ThemeProvider>
    
      
      
  
  );
}
