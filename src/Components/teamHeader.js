import * as React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../Styles/hot.css'
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import serverURI from "../Constants/connection";
import Cookies from "universal-cookie";
import UploadIcon from '@mui/icons-material/Upload';

// https://upload.wikimedia.org/wikipedia/commons/a/a3/Fenerbah%C3%A7elogo.png

export default function TeamHeader(props) {
    

    const [logo, setLogo] = useState("");
    const [teamName, setTeamName] = useState("");

    function func2() {

      props.func();
    }


  React.useEffect(()=>{
    const cookie = new Cookies();
    let uri = serverURI + "/users/team/";
    const email = cookie.get("email");

    var config = {
      method: "get",
      url: uri + email,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setLogo(response.data.message.team[0].logo);
        setTeamName(response.data.message.user[0].name);

      })
      .catch((error) => {
        
      });
  }, []);


    return (
        <Container sx={{height: 500}}>
            <Box sx={{display: 'flex',  justifyContent: 'flex-start', height:500}}>

                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "end", mb:10, ml:10}}>

                    <img width="250"src={logo} alt="Team Logo"/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", mt:13, ml:10}}>
                    <Typography variant="h3" color="text.primary" sx={{ fontWeight: 900 }}>
                        {teamName}
                    </Typography>
                    <Box sx={{mt:5}}>
                    
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "end", ml:35, mb:10}}>
                
                <Button onClick={func2} variant="outlined" startIcon={<UploadIcon />}>
                  Upload
                </Button>
      
      
                </Box>
                
             
            </Box>

      
      

        </Container>    
    );
}