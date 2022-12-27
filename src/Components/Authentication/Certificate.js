import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Box, TextField, Button, IconButton, Typography, Container, CardMedia } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import serverURI from "../../Constants/connection";
import "../../Style/popupForm.css";

export default function Certificate(props) {
    const info = props.info[0];

    const handleCancel = () => {
        props.close();
    };
    return (
        <Box sx={{ flexDirection: "column", bgcolor: "primary", borderRadius: 2, maxWidth: 600, position: "fixed", top: "30%", left: "35%", zIndex: 1 }}>
            <div className="show">
                <Box sx={{ justifyContent: "center", alignItems: "center", mb: 3 }}>
                    <Typography variant="h30" sx={{ fontWeight: 400, fontSize: "15px", color: "red" }}>
                        CONGRATULATIONS, You successfully authenticated your shirt.
                    </Typography>
                </Box>
                <Box
                    sx={{ display: "flex", flexDirection: "row", bgcolor: "background.paper", borderRadius: 3, justifyContent: "center", alignItems: "center" }}>
                    <CardMedia
                        style={{ width: 300, height: 300 }}
                        src={info.image}
                        component="img"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h30" sx={{ fontWeight: 400, fontSize: "17px", color: "green" }}>
                            Name: {info.name}
                        </Typography>
                        <Typography variant="h30" sx={{ fontWeight: 400, fontSize: "17px", color: "blue" }}>
                            Type: {info.type}
                        </Typography>
                        <Typography variant="h30" sx={{ fontWeight: 400, fontSize: "17x", color: "pink" }}>
                            Owner: {info.owner}
                        </Typography>
                        <Typography variant="h30" sx={{ fontWeight: 400, fontSize: "17px", color: "red" }}>
                            Price: {info.price}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ bgcolor: "primary", alignItems: "center", position: "absolute", bottom: "25%", right: "10%", zIndex: 1, height: 300, width: 400 }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleCancel}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
            </div>
        </Box>

    );
};