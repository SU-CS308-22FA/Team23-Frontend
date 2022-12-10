import * as React from "react";
import { Box, Container } from "@mui/material";
import Card from "./productCard";
import axios from "axios";
import FilterCard from "./filterCard";
import SortProduct from "./sort";
import serverURI from "../../Constants/connection";

export default function ListCards(props) {
  const isAdmin = props.admin;
  const [myOption, setOption] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [filterOptions, setFilterOptions] = React.useState({ status: [], teams: [], priceRange: "", productType: [] });

  let uri = serverURI + "/products/";
  if (props.type === "search") {
    uri = props.uri;
  } else if (props.type === "list") {
    uri = serverURI + "/products/" + myOption;
  }

  function func1(data) {
    console.log(data);
    setOption(data);
  }

  function func2(data) {
    console.log(data);
    props.func(data);
  }

  const getFilterOptions = (options) => {
    // console.log(options);
    setFilterOptions(options);
    // console.log(filterOptions);
  };

  const uriOptions = () => {
    let total = "";
    if (filterOptions.status.length !== 0) {
      total += "status:";
      for (let i = 0; i < filterOptions.status.length; i++) {
        total += filterOptions.status[i] + ",";
      }
      total += ";";
    } else if (filterOptions.teams.length !== 0) {
      total += "teams:";
      for (let i = 0; i < filterOptions.teams.length; i++) {
        total += filterOptions.teams[i] + ",";
      }
      total += ";";
    } else if (filterOptions.productType.length !== 0) {
      total += "teams:";
      for (let i = 0; i < filterOptions.productType.length; i++) {
        total += filterOptions.productType[i] + ",";
      }
      total += ";";
    } else if (filterOptions.priceRange !== "") {
      total += "priceRange:" + filterOptions.priceRange + ";";
    }
    console.log(total);
  };

  React.useEffect(() => {
    console.log("uriOpt");
  }, [filterOptions]);

  React.useEffect(() => {
    uriOptions();
    var config = {
      method: "get",
      url: uri,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data.message);
        setProducts(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri, filterOptions]);

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* <Divider></Divider> */}
      <SortProduct func={func1}></SortProduct>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "20%", pl: 2 }}>
          <FilterCard getFilterOptions={getFilterOptions}></FilterCard>
        </Box>
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 2,
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {products.map((product) => (
            <Card
              func={func2}
              size={1}
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
    </Container>
  );
}
