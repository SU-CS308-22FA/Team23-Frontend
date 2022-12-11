import * as React from "react";
import { Box, Container, CircularProgress } from "@mui/material";
import OpenItems from "../ActiveBids/openItems";
import serverURI from "../../Constants/connection";
import axios from "axios";

export default function ListCards(props) {
  const email = props.email;
  // console.log(email);
  let uri = serverURI + "/users/activebids/";
  const [message, setMessage] = React.useState([{}]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    var config = {
      method: "get",
      url: uri + email,

      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(uri);

    axios(config)
      .then((response) => {
        console.log(response.data.message);
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email, uri]);

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* <Divider></Divider> */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 30 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            columnGap: 3,
            rowGap: 2,
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {message.map((product, idx) => (
            <OpenItems
              key={idx}
              pid={product._id}
              price={product.price}
              start_date={product.start_date}
              duration={product.duration}
              type={product.type}
              name={product.name}
              owner={product.owner}
              image={product.image}
              states={product.state}
            ></OpenItems>
          ))}
        </Box>
      )}
    </Container>
  );
}
