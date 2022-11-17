import * as React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from './cart';
import serverURI from "../Constants/connection";
import axios, * as others from "axios";
import { set } from "mongoose";
import Divider from "./divider";
import { Link } from 'react-router-dom'

export default function ListCards() {
    let uri = serverURI + "/products/test";
    const [products, setProducts] = React.useState([]);


    React.useEffect(()=>{
    
    var data = JSON.stringify({
      x: 30,
    });
    var config = {
      method: "get",
      url: uri,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response.data.message);
        setProducts(response.data.message)
      })
      .catch((error) => {
       console.log(error);
      });
    }, []);


    return(
        <Container sx={{mt:5, mb:5}}>
        {/* <Divider></Divider> */}
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 2,
                gridTemplateColumns: 'repeat(4, 1fr)'
                
            }}
        >

          
            {products.map((product)=>(
                <Card key={product._id} id={product._id} type={product.type} name={product.name} owner={product.owner} image={product.image}>
                  
                </Card>
            ))}
     
        </Box>
        </Container>
        
    );


}