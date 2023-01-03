import * as React from "react";
import { Box, Container, CircularProgress } from "@mui/material";
import Card from "./productCard";
import axios from "axios";
import FilterCard from "./filterCard";
import SortProduct from "./sort";
import serverURI from "../../Constants/connection";
import Cookies from "universal-cookie";

export default function ListCardSearch(props) {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    let uri = props.uri;
    React.useEffect(() => {
        var config = {
            method: 'get',
            url: uri,

            headers: {
                'Content-Type': 'application/json',
            },
        };

        axios(config)
            .then((response) => {
                setProducts(response.data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [uri]);

    return (
        <Container maxWidth="xl" sx={{ mt: 8, mb: 5, width: "100%" }}>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 30 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box>
                    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                        <Box
                            sx={{
                                pr: 5,
                                pl: 5,
                                display: "grid",
                                columnGap: 3,
                                rowGap: 2,
                                gridTemplateColumns: "repeat(4, 1fr)",
                            }}
                        >
                            {products.map((product) => (
                                <Card
                                    isfav={product.isFav}
                                    size={0}
                                    key={product._id}
                                    id={product._id}
                                    price={product.price}
                                    start_date={product.start_date}
                                    duration={product.duration}
                                    type={product.type}
                                    name={product.name}
                                    owner={product.owner}
                                    image={product.image}
                                ></Card>
                            ))}
                        </Box>
                    </Box>
                </Box>
            )}
        </Container>
    );
}
