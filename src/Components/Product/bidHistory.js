import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function BidHistory(props) {
    let bidInfo = props.info || [];
    return (
        <Box>
            <Box sx={{ fontWeight: 'bold', fontSize: "15px", mb: 1, mt: 2, ml: 1 }} >
                Current Bids
            </Box>
            <Box sx={{
                width: 350,
                height: 220,
            }}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 1000,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 200,
                        '& ul': { padding: 0 },
                    }}
                >
                    {bidInfo.map((sectionId, idx) => (
                        <li key={idx}>
                            <ul>
                                <ListItem>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "100%" }} >
                                        <Box display="flex" flexDirection="column">
                                            < Typography variant="h15" color="text.primary" sx={{ fontWeight: 500, fontSize: "15px" }}>
                                                {sectionId.name}
                                            </Typography>
                                            <Typography variant="h20" color="text.primary" sx={{ fontWeight: 300, fontSize: "12px" }}>
                                                {sectionId.date}
                                            </Typography>
                                        </Box>
                                        <Typography variant="h15" color="text.primary" sx={{ fontWeight: 700, fontSize: "15px" }}>
                                            ${sectionId.offer}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </ul>
                        </li>
                    ))
                    }
                </List >
            </Box >
        </Box >


    );
}