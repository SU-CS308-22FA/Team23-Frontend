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
        <Box sx={{ bgcolor: "primary", borderRadius: 2, maxWidth: 600, position: "fixed", top: "30%", left: "40%", zIndex: 1 }}>
            <div className="show">
                <CardMedia
                    component="img"
                    src={info.image}
                    style={{ width: 400, height: 500 }}
                />
                <Box sx={{ bgcolor: "primary", alignItems: "center", position: "absolute", left: "39%", top: "30%", zIndex: 1, height: 300, width: 400 }}>
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