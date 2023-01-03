import * as React from 'react';
import { Box, Container, CircularProgress } from '@mui/material';
import Card from './productCard';
import axios from 'axios';

import serverURI from '../../Constants/connection';
import Cookies from 'universal-cookie';

export default function ListClosedCardsTeam(props) {
  const adminPage = props.adminPage;
  const isAdmin = props.isAdmin;
  const email = props.email;
  const cookie = new Cookies();
  const newEmail = cookie.get('email');
  const [myOption, setOption] = React.useState(0);
  const [uri, setUri] = React.useState(
    serverURI + '/products/option:0' + '&' + newEmail
  );
  const [products, setProducts] = React.useState([]);
  const [total, setTotal] = React.useState('option:0');
  const [loading, setLoading] = React.useState(true);

  function func2(data) {
    console.log(data);
    props.func(data);
  }

  const getFilterOptions = (options) => {
    if (email) {
      console.log('email burda hovam', email);
      let name = email.substring(0, email.indexOf('@'));
      name = name.charAt(0).toUpperCase() + name.slice(1);
      options.teams.push(name);
    }
    let total = '';
    if (options.status.length !== 0) {
      total += 'status:';
      for (let i = 0; i < options.status.length; i++) {
        if (i === 0) {
          total += options.status[i];
        } else {
          total += ',' + options.status[i];
        }
      }
      total += ';';
    }
    if (options.teams.length !== 0) {
      total += 'teams:';
      for (let i = 0; i < options.teams.length; i++) {
        if (i === 0) {
          total += options.teams[i];
        } else {
          total += ',' + options.teams[i];
        }
      }
      total += ';';
    }
    if (options.productType.length !== 0) {
      total += 'types:';
      for (let i = 0; i < options.productType.length; i++) {
        if (i === 0) {
          total += options.productType[i];
        } else {
          total += ',' + options.productType[i];
        }
      }
      total += ';';
    }
    if (options.priceRange !== '') {
      total += 'priceRange:' + options.priceRange + ';';
    }
    total += 'option:' + myOption;

    setTotal(total);

    setUri(serverURI + '/products/' + total + '&' + newEmail);
  };

  // React.useEffect(() => {
  //   if (email) {
  //     console.log(props.email);
  //     setLoading(false);
  //     getFilterOptions({ status: [], teams: [email], priceRange: "", productType: [] });
  //   }
  // }, []);

  React.useEffect(() => {
    console.log(uri);
    if (props.email) {
      console.log(props.email);
      getFilterOptions({
        status: [],
        teams: [email],
        priceRange: '',
        productType: [],
      });
    } else {
      setLoading(false);
    }
    var config = {
      method: 'get',
      url: uri,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data.message);
        setProducts(response.data.message);
        setLoading(false);

        if (props.email) {
          console.log(props.email);
          getFilterOptions({
            status: [],
            teams: [email],
            priceRange: '',
            productType: [],
          });
          setProducts(response.data.message);
          setLoading(false);
        } else {
          setProducts(response.data.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uri]);

  React.useEffect(() => {
    if (email) {
      getFilterOptions({
        status: ['closed'],
        teams: [email],
        priceRange: '',
        productType: [],
      });
    }
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 5, width: '100%' }}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 30 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box
              sx={{
                pr: 5,
                pl: 5,
                display: 'grid',
                columnGap: 3,
                rowGap: 2,
                gridTemplateColumns: 'repeat(4, 1fr)',
              }}
            >
              {products.map((product) => (
                <Card
                  isfav={product.isFav}
                  func={func2}
                  size={0}
                  adminPage={adminPage}
                  isAdmin={isAdmin}
                  key={product._id}
                  status={"closed"}
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
