import * as React from "react";
import { ListItem, Typography, IconButton, Box, TextField, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Container } from "@mui/system";
import { GetCertificate } from "../../Service/ProductService";


export default function ItemAuthentication(props) {
    const [data, setData] = React.useState({ certificate: "" });
    const [flag, setFlag] = React.useState(false);

    const handleChange = (name) => (e) => {
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = {};
        obj.certificate = data.certificate;

        GetCertificate(obj).then((response) => {
            console.log(response.message, "asdasdasd");

            if (response.message.length > 0) {
                setFlag(false);
                props.info(response.message);
            }
            else {
                setFlag(true);
            }
        });
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", mt: 30 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                        AUTHENTICATE YOUR SHIRT
                    </Typography>
                </Box>
                <Typography variant="h10" color="text.primary" sx={{ fontWeight: 400 }}>
                    Verify the unique serial number below to confirm authenticity and obtain player data.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TextField
                        error={flag}
                        margin="normal"
                        id="certificate"
                        fullWidth
                        value={data.certificate}
                        label="Enter Certificate Number"
                        name="certificate"
                        variant="outlined"
                        onChange={handleChange("certificate")}
                    />
                    <Button onClick={handleSubmit}>Search</Button>
                </Box>
                {flag === true ? (
                    <Typography variant="h30" color="red" sx={{ fontWeight: 400, fontSize: "14px" }}>
                        This certificate number is not valid
                    </Typography>) : ""}
            </Box>
        </Container>
    );
}