import * as React from "react";
import { Box, Container, CircularProgress } from "@mui/material";
import Card from "./productCard";
import axios from "axios";
import FilterCard from "./filterCard";
import SortProduct from "./sort";
import serverURI from "../../Constants/connection";

export default function ListCards(props) {
  const isAdmin = props.admin;
  const [myOption, setOption] = React.useState(0);
  const [uri, setUri] = React.useState(serverURI + "/products/option:0");
  const [products, setProducts] = React.useState([]);
  const [total, setTotal] = React.useState("option:0");
  const [loading, setLoading] = React.useState(true);

  function func1(data) {
    setOption(data);
    let newTotal = total.substring(0, total.lastIndexOf(":") + 1) + data;
    setTotal(newTotal);
    setUri(serverURI + "/products/" + newTotal);
  }

  function func2(data) {
    console.log(data);
    props.func(data);
  }

  const getFilterOptions = (options) => {
    let total = "";
    if (options.status.length !== 0) {
      total += "status:";
      for (let i = 0; i < options.status.length; i++) {
        if (i === 0) {
          total += options.status[i];
        } else {
          total += "," + options.status[i];
        }
      }
      total += ";";
    }
    if (options.teams.length !== 0) {
      total += "teams:";
      for (let i = 0; i < options.teams.length; i++) {
        if (i === 0) {
          total += options.teams[i];
        } else {
          total += "," + options.teams[i];
        }
      }
      total += ";";
    }
    if (options.productType.length !== 0) {
      total += "types:";
      for (let i = 0; i < options.productType.length; i++) {
        if (i === 0) {
          total += options.productType[i];
        } else {
          total += "," + options.productType[i];
        }
      }
      total += ";";
    }
    if (options.priceRange !== "") {
      total += "priceRange:" + options.priceRange + ";";
    }
    total += "option:" + myOption;

    setTotal(total);
    setUri(serverURI + "/products/" + total);
  };

  React.useEffect(() => {
    console.log(uri);
    var config = {
      method: "get",
      url: uri,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setLoading(false);
        console.log(response.data.message);
        setProducts(response.data.message);
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
          <Box sx={{ display: "flex", flexDirection: "row-reverse", mb: 4, pr: 5 }}>
            <SortProduct func={func1}></SortProduct>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Box sx={{ width: "20%", pl: 5 }}>
              <FilterCard getFilterOptions={getFilterOptions}></FilterCard>
            </Box>
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
                  func={func2}
                  size={0}
                  admin={isAdmin}
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
