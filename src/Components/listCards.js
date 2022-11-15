import * as React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from './cart';


export default function ListCards() {
    return(
        <Container sx={{mt:5, mb:5}}>
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 2,
                gridTemplateColumns: 'repeat(4, 1fr)'
                
            }}
        >
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </Box>
        </Container>
        
    );


}