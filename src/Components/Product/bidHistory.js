import * as React from 'react';
import { Box, Typography, ListItem, List } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

export default function BidHistory(props) {
    let bidInfo = props.info || [];

    function isEmpty(obj) {
        return Object.keys(obj).length !== 0;
    }

    return (
        <Box>
            {isEmpty(bidInfo[0]) ? (
                <Box>
                    <Box sx={{ fontWeight: 'bold', fontSize: "15px", mb: 1, mt: 2, ml: 1 }} >
                        Current Bids
                    </Box>
                    <Box sx={{ width: 350, height: 220, }}>
                        <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 200, '& ul': { padding: 0 }, }}>
                            {bidInfo.map((sectionId, idx) => (
                                <li key={idx}>
                                    <ul>
                                        <ListItem>
                                            {idx === 0 ? (
                                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "100%", ml: 1 }} >
                                                    <EmojiEventsOutlinedIcon sx={{ position: "absolute", left: -1, top: 7, zIndex: 2 }} ></EmojiEventsOutlinedIcon>
                                                    <Box display="flex" flexDirection="column">
                                                        <Box display="flex" flexDirection="column">
                                                            <Typography variant="h15" color="green" sx={{ fontWeight: 500, fontSize: "15px" }}>
                                                                {sectionId.name}
                                                            </Typography>
                                                            <Typography variant="h20" color="green" sx={{ fontWeight: 300, fontSize: "12px" }}>
                                                                {sectionId.date}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="h15" color="green" sx={{ fontWeight: 700, fontSize: "15px" }}>
                                                        ${sectionId.offer}
                                                    </Typography>
                                                </Box>) : (
                                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "100%", ml: 1 }} >
                                                    <Box display="flex" flexDirection="column">
                                                        <Box display="flex" flexDirection="column">
                                                            <Typography variant="h15" color="text.primary" sx={{ fontWeight: 500, fontSize: "15px" }}>
                                                                {sectionId.name}
                                                            </Typography>
                                                            <Typography variant="h20" color="text.primary" sx={{ fontWeight: 300, fontSize: "12px" }}>
                                                                {sectionId.date}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="h15" color="text.primary" sx={{ fontWeight: 700, fontSize: "15px" }}>
                                                        ${sectionId.offer}
                                                    </Typography>
                                                </Box>)}
                                        </ListItem>
                                    </ul>
                                </li>))}
                        </List >
                    </Box >
                </Box>
            ) :
                <Box sx={{ display: "flex", alignItems: "center", ml: 15 }}>
                    <Typography variant="h10" color="text.primary" sx={{ fontWeight: 700, fontSize: "125px" }}>
                        :(
                    </Typography>
                </Box>
            }

        </Box >
    );
}