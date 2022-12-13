import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress, Box } from '@mui/material';

import AppBar from '../Components/Navbar/appbar';
import ProductHeader from '../Components/Product/productHeader';
import ProductBody from '../Components/Product/productBody';
import serverURI from '../Constants/connection';
import ArrowDown from '../Components/Product/arrowDown';

const theme = createTheme();

export default function HomePage() {
  const { id } = useParams();
  let uri = serverURI + '/products/productPage/';
  const [products, setProducts] = React.useState([{}]);
  const [bids, setBids] = React.useState([{}]);
  const [showList, setshowList] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    var config = {
      method: 'get',
      url: uri + id,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then((response) => {
        setProducts(response.data.message);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri, id]);

  React.useEffect(() => {
    var config = {
      method: 'get',
      url: serverURI + '/products/bidHistory/' + id,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then((response) => {
        setLoading(false);
        setBids(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function isShow() {
    if (showList === true) {
      setshowList(false);
    } else {
      setshowList(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar></AppBar>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 30 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <ProductHeader prop={products[0]} id={id} bids={bids}></ProductHeader>
          <ArrowDown func={isShow}></ArrowDown>
          {showList ? (
            <ProductBody
              player={products[0].name}
              owner={products[0].owner}
              type={products[0].type}
              sold={products[0].sold}
            ></ProductBody>
          ) : (
            ''
          )}
        </Box>
      )}
    </ThemeProvider>
  );
}
